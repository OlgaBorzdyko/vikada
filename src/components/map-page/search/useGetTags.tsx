import { useEffect, useRef, useState } from 'react'

import { useObjectContent } from '../../../api/postObjectContent'
import { useMapStore } from '../../../store/MapStore'

export const useGetTags = () => {
  const points = useMapStore((state) => state.points)
  const setPoints = useMapStore((state) => state.setPoints)
  const objectContentMutation = useObjectContent()
  const [pointsData, setPointsData] = useState<string[]>([])
  const [allTags, setAllTags] = useState<string[]>([])

  const hasFetchedRef = useRef(false)

  useEffect(() => {
    if (hasFetchedRef.current || points.length === 0) {
      return
    }

    const fetchPointsData = async () => {
      try {
        hasFetchedRef.current = true

        const results = await Promise.all(
          points.map((point) =>
            objectContentMutation.mutateAsync({ object_id: String(point.id) })
          )
        )

        setPointsData(results)

        const enrichedPoints = points.map((point, i) => ({
          ...point,
          name: results[i]?.object.name ?? '',
          tags: results[i]?.tags ?? []
        }))
        setPoints(enrichedPoints)
        console.log('points', points)

        const tags = results.flatMap((point) => point.tags || [])
        setAllTags(tags)
      } catch (err) {
        console.error('Ошибка при получении данных:', err)
        hasFetchedRef.current = false
      }
    }

    fetchPointsData()
  }, [points, setPoints, objectContentMutation])

  return { pointsData, allTags }
}
