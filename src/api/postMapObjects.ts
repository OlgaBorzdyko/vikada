import { useMutation } from '@tanstack/react-query'

import { apiBase } from './apiBase'

export const useMapObjects = () => {
  return useMutation({
    queryKey: ['objects'],
    mutationFn: async (coords) => {
      const response = await apiBase.post('/objects?=', coords)
      if (response.status !== 200) throw new Error('Failed to get objects')
      return response.data
    }
  })
}
