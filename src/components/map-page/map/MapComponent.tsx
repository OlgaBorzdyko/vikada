import 'ol/ol.css'

import TileLayer from 'ol/layer/Tile'
import VectorLayer from 'ol/layer/Vector'
import Map from 'ol/Map'
import { fromLonLat } from 'ol/proj'
import OSM from 'ol/source/OSM'
import VectorSource from 'ol/source/Vector'
import View from 'ol/View'
import React, { useEffect, useRef, useState } from 'react'

import { useMapObjects } from '../../../api/postMapObjects'
import { useObjectContent } from '../../../api/postObjectContent'
import { useMapStore } from '../../../store/MapStore'
import { getFeaturesFromPoints } from './getFeaturesFromPoints'
import { getMapLonLat, MapLonLat } from './getMapLonLat'

const MapComponent = ({
  setIsOpen
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<Map | null>(null)
  const vectorLayerRef = useRef<VectorLayer | null>(null)
  const [coords, setCoords] = useState<MapLonLat | null>(null)

  const objects = useMapObjects()
  const objectContentMutation = useObjectContent()
  const setVisiblePoints = useMapStore((state) => state.setPoints)

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
        center: fromLonLat([32.053102, 54.781888]),
        zoom: 16
      })
    })

    const vectorSource = new VectorSource()
    const vectorLayer = new VectorLayer({ source: vectorSource })
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

    map.on('click', (evt) => {
      map.forEachFeatureAtPixel(evt.pixel, (feature) => {
        const id = feature.get('id')
        if (id) {
          objectContentMutation.mutate({ object_id: String(id) })
          setIsOpen((prev) => !prev)
        }
        return true
      })
    })
  }, [objectContentMutation, setIsOpen])

  useEffect(() => {
    if (!coords) return
    objects.mutate(coords)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coords])

  useEffect(() => {
    if (!objects.isSuccess || !objects.data) return
    if (!vectorLayerRef.current) return

    const pointsFromApi = objects.data.points.map((p) => ({
      id: p.id,
      longitude: p.map_position.coordinates[0],
      latitude: p.map_position.coordinates[1]
    }))
    setVisiblePoints(pointsFromApi)

    const features = getFeaturesFromPoints(pointsFromApi)
    const source = vectorLayerRef.current.getSource()
    source.clear()
    source.addFeatures(features)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [objects.isSuccess, objects.data])

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
