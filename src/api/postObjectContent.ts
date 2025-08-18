import { useMutation } from '@tanstack/react-query'

import { useMapStore } from '../store/MapStore'
import { apiBase } from './apiBase'

export const useObjectContent = () => {
  const setSelectedObject = useMapStore((state) => state.setSelectedObject)

  return useMutation({
    mutationFn: async (payload: { object_id: string | number }) => {
      const response = await apiBase.post('/api/object-content', payload)
      if (response.status !== 200)
        throw new Error('Failed to get object content')
      return response.data
    },
    onSuccess: (data) => {
      setSelectedObject({
        title: data.object.name,
        description: data.object.description ?? '',
        img: data.images ?? [],
        address: data.object.full_address,
        phoneNumber: (data.phones ?? []).join(', '),
        webSite: (data.links ?? []).join(', '),
        workingSchedule: data.working_schedule
      })
    }
  })
}
