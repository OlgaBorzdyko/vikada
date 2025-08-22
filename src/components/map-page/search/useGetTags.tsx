import { useEffect, useState } from 'react'

import { useObjectContent } from '../../../api/postObjectContent'
import { useMapStore } from '../../../store/MapStore'

export const useGetTags = () => {
  const points = useMapStore((state) => state.points)
  const objectContentMutation = useObjectContent()
  const [pointsData, setPointsData] = useState<string[]>([])
  const [allTags, setAllTags] = useState<string[]>([])

  useEffect(() => {
    const fetchPointsData = async () => {
      try {
        const results = await Promise.all(
          points.map((point) =>
            objectContentMutation.mutateAsync({ object_id: String(point.id) })
          )
        )

        setPointsData(results)
        const tags = results.flatMap((point) => point.tags || [])
        setAllTags(tags)
      } catch (err) {
        console.error('Ошибка при получении данных:', err)
      }
    }

    fetchPointsData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [points])

  return { pointsData, allTags }
}
