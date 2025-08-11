import type Map from 'ol/Map'
import { toLonLat } from 'ol/proj'

interface MapLonLat {
  longitude_up_left: string
  lattitude_up_left: string
  longitude_down_right: string
  lattitude_down_right: string
}

export const getMapLonLat = (map: Map | null): MapLonLat | null => {
  if (!map) return null

  const size = map.getSize()
  if (!size) return null

  const topLeftPixel = map.getCoordinateFromPixel([0, 0])
  const bottomRightPixel = map.getCoordinateFromPixel([size[0], size[1]])

  if (!topLeftPixel || !bottomRightPixel) return null
  const topLeft = toLonLat(topLeftPixel)
  const bottomRight = toLonLat(bottomRightPixel)

  return {
    longitude_up_left: topLeft[0].toString(),
    lattitude_up_left: topLeft[1].toString(),
    longitude_down_right: bottomRight[0].toString(),
    lattitude_down_right: bottomRight[1].toString()
  }
}
