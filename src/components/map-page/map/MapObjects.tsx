import { useMapObjects } from '../../../api/postMapObjects'

const MapObjects = (coords) => {
  const { mutate: sendCoords } = useMapObjects()

  const handleSend = () => {
    sendCoords(coords.coords)
  }

  return (
    <div>
      <h2>Отправка координат</h2>
      <button onClick={handleSend}>Отправить</button>
    </div>
  )
}

export default MapObjects
