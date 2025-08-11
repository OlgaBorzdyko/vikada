import { useMapObjects } from '../../../api/postMapObjects'

const MapObjects = () => {
  const {
    mutate: sendCoords,
    isPending,
    isSuccess,
    isError,
    error
  } = useMapObjects()

  const handleSend = () => {
    sendCoords({
      longitude_up_left: '23.343862277373226',
      lattitude_up_left: '61.72166896926755',
      longitude_down_right: '36.58294082105852',
      lattitude_down_right: '58.66564592347388'
    })
  }

  return (
    <div>
      <h2>Отправка координат</h2>
      <button onClick={handleSend}>Отправить</button>

      {isPending && <p>Отправка...</p>}
      {isError && <p>Ошибка: {error.message}</p>}
      {isSuccess && <p>Успешно!</p>}
    </div>
  )
}

export default MapObjects
