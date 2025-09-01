import { useMapStore } from '../../../store/MapStore'

export const useTagSearch = (inputValue: string) => {
  const points = useMapStore((state) => state.points)
  console.log('test point', points[0])
  if (!inputValue) return points
  return points.filter(
    (point) =>
      point.name?.toLowerCase().includes(inputValue.toLowerCase()) ||
      point.tags?.some((tag) =>
        tag.name?.toLowerCase().includes(inputValue.toLowerCase())
      )
  )
}
