import 'ol/ol.css'

import { Box } from '@mui/material'
import { defaults as defaultControls, Zoom } from 'ol/control'
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
import { useGetTags } from '../search/useGetTags'
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

  const azaz = useGetTags()
  console.log('azaz', azaz)

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
      }),
      controls: defaultControls({
        zoom: false,
        attribution: true
      }).extend([
        new Zoom({
          className: 'custom-zoom'
        })
      ])
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

    const pointsFromApi = objects.data.points?.map((p) => ({
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
    <Box
      ref={mapRef}
      sx={{
        width: '100%',
        height: { xs: '100vh', md: 'calc(100vh - 220px)' },
        borderRadius: { xs: 0, md: 2 },
        overflow: 'hidden',
        position: 'relative',
        '& .custom-zoom': {
          right: { xs: 8, md: 16 },
          top: { xs: 80, md: 16 },
          backgroundColor: 'white',
          borderRadius: 1,
          boxShadow: 1,
          '& button': {
            width: { xs: 48, md: 56 },
            height: { xs: 48, md: 56 },
            fontSize: { xs: 24, md: 28 }
          }
        }
      }}
    />
  )
}

export default MapComponent
