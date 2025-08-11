import Feature from 'ol/Feature'
import Point from 'ol/geom/Point'
import { fromLonLat } from 'ol/proj'
import { Icon, Style } from 'ol/style'

export const getFeaturesFromPoints = (
  points: Array<{ longitude: number; latitude: number; id: number }>
) => {
  return points.map(({ longitude, latitude, id }) => {
    const feature = new Feature({
      geometry: new Point(fromLonLat([longitude, latitude])),
      id: id
    })
    feature.setStyle(
      new Style({
        image: new Icon({
          src: '/point-marker.png',
          scale: 0.7
        })
      })
    )
    return feature
  })
}
