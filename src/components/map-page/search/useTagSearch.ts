import { useMapStore } from '../../../store/MapStore'

export const useTagSearch = (inputValue: string) => {
  const points = useMapStore((state) => state.points) || []

  if (!inputValue) {
    return {
      pointsWithNameMatch: [],
      pointsWithTagMatch: []
    }
  }

  const searchLower = inputValue.toLowerCase()

  const pointsWithNameMatch =
    points.filter((point) =>
      point?.name?.toLowerCase().includes(searchLower)
    ) || []

  const pointsWithTagMatch =
    points.filter((point) =>
      point?.tags?.some((tag) => tag?.name?.toLowerCase().includes(searchLower))
    ) || []

  console.log('Search results:', {
    pointsCount: points.length,
    pointsWithNameMatch: pointsWithNameMatch.length,
    pointsWithTagMatch: pointsWithTagMatch.length
  })

  return {
    pointsWithNameMatch,
    pointsWithTagMatch
  }
}
