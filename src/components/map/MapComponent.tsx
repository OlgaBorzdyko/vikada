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
        center: fromLonLat([37.6173, 55.7558]),
        zoom: 10
      })
    })
    mapInstanceRef.current = map
  }, [])
  return (
    <div
      ref={mapRef}
      style={{
        width: '100%',
        height: '720px',
        borderRadius: 12,
        overflow: 'hidden'
      }}
    />
  )
}

export default MapComponent
