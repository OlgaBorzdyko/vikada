import { create } from 'zustand'

export type ItemData = {
  title: string
  description: string
  img: string[]
  address: string
  phoneNumber: string
  webSite: string
  workingSchedule: null
  excursions: string[] | null
  tags: string[]
}

type MapPoint = {
  id: string
  title: string
  tags: string[]
}

interface MapStore {
  selectedObject: ItemData | null
  setSelectedObject: (object: ItemData) => void
  points: MapPoint[]
  setPoints: (points: MapPoint[]) => void
}

export const useMapStore = create<MapStore>((set) => ({
  selectedObject: null,
  points: [],
  setSelectedObject: (object) => set({ selectedObject: object }),
  setPoints: (points) => set({ points })
}))
