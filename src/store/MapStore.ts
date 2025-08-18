import { create } from 'zustand'

export type ItemData = {
  title: string
  description: string
  img: string[]
  address: string
  phoneNumber: string
  webSite: string
  workingSchedule: null
}

interface MapStore {
  selectedObject: ItemData | null
  setSelectedObject: (object: ItemData) => void
}

export const useMapStore = create<MapStore>((set) => ({
  selectedObject: null,
  setSelectedObject: (object) => set({ selectedObject: object })
}))
