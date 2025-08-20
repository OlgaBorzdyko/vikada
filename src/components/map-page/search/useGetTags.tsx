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
        const tags = results.map((res) => res?.object?.tags || []).flat()

        setAllTags(tags)
        console.log('Все теги:', tags)

        setPointsData(results)
        console.log('Данные двух точек:', results)
      } catch (err) {
        console.error('Ошибка при получении данных точек:', err)
      }
    }

    fetchPointsData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [points])

  return { pointsData, allTags }
}
