import 'ol/ol.css'

import TileLayer from 'ol/layer/Tile'
import Map from 'ol/Map'
import { fromLonLat } from 'ol/proj'
import OSM from 'ol/source/OSM'
import View from 'ol/View'
import { useEffect, useRef } from 'react'

const MapComponent = () => {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<Map | null>(null)

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: fromLonLat([37.620393, 55.75396]),
        zoom: 16
      })
    })
    map.once('postrender', () => {
      const size = map.getSize()
      if (!size) return
      const topLeft = map.getCoordinateFromPixel([0, 0])
      const bottomRight = map.getCoordinateFromPixel([size[0], size[1]])

      console.log('Top-left (lon/lat):', topLeft)
      console.log('Bottom-right (lon/lat):', bottomRight)
    })
  }, [])
  return (
    <div
      ref={mapRef}
      style={{
        width: '100%',
        height: 'calc(100vh - 221.33px)',
        borderRadius: 12,
        overflow: 'hidden'
      }}
    />
  )
}

export default MapComponent
