import { Container } from '@mui/material'

import Header from './components/Header'
import MapComponent from './components/map/MapComponent'

const MapPage = () => {
  return (
    <>
      <Container>
        <Header />
        <MapComponent />
      </Container>
    </>
  )
}
export default MapPage
