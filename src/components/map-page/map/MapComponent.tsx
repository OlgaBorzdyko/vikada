import 'ol/ol.css'

import TileLayer from 'ol/layer/Tile'
import VectorLayer from 'ol/layer/Vector'
import Map from 'ol/Map'
import { fromLonLat } from 'ol/proj'
import OSM from 'ol/source/OSM'
import VectorSource from 'ol/source/Vector'
import View from 'ol/View'
import { useEffect, useRef, useState } from 'react'

import { useMapObjects } from '../../../api/postMapObjects'
import { getFeaturesFromPoints } from './getFeaturesFromPoints'
import { getMapLonLat, MapLonLat } from './getMapLonLat'

const MapComponent = () => {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<Map | null>(null)
  const vectorLayerRef = useRef<VectorLayer | null>(null)
  const [coords, setCoords] = useState<MapLonLat | null>(null)

  const objects = useMapObjects()

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

    const vectorSource = new VectorSource()
    const vectorLayer = new VectorLayer({
      source: vectorSource
    })
    map.addLayer(vectorLayer)

    mapInstanceRef.current = map
    vectorLayerRef.current = vectorLayer

    map.once('postrender', () => {
      const bounds = getMapLonLat(map)
      if (bounds) setCoords(bounds)
    })

    map.on('moveend', () => {
      const bounds = getMapLonLat(map)
      if (bounds) setCoords(bounds)
    })
  }, [])
  useEffect(() => {
    if (!coords) return
    objects.mutate(coords)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coords])

  useEffect(() => {
    if (!objects.isSuccess || !objects.data) return
    if (!vectorLayerRef.current) return

    const pointsFromApi = objects.data.points.map((p) => ({
      longitude: p.map_position.coordinates[0],
      latitude: p.map_position.coordinates[1]
    }))

    const features = getFeaturesFromPoints(pointsFromApi)

    const source = vectorLayerRef.current.getSource()
    source.clear()
    source.addFeatures(features)
  }, [objects.isSuccess, objects.data])

  return (
    <>
      <div
        ref={mapRef}
        style={{
          width: '100%',
          height: 'calc(100vh - 221.33px)',
          borderRadius: 12,
          overflow: 'hidden'
        }}
      />
    </>
  )
}

export default MapComponent
