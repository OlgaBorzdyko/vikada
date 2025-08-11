import { useMutation } from '@tanstack/react-query'

import { apiBase } from './apiBase'

export const useObjectContent = () => {
  return useMutation({
    queryKey: ['object-content'],
    mutationFn: async (coords) => {
      const response = await apiBase.post('/api/object-content', coords)
      if (response.status !== 200)
        throw new Error('Failed to get object content')
      console.log(response.data)
      return response.data
    }
  })
}
