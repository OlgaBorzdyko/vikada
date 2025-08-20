import { useMapStore } from '../../../store/MapStore'

export const useTagSearch = (inputValue: string) => {
  const points = useMapStore((state) => state.points)
  console.log('точки в сторе', points)
  if (!inputValue) return points

  const lowerQuery = inputValue.toLowerCase()

  return points.filter(
    (point) =>
      point.title.toLowerCase().includes(lowerQuery) ||
      point.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  )
}
