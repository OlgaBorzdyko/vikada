import { Breadcrumbs, Container, Link, Typography } from '@mui/material'

import Header from './components/Header'
import MapComponent from './components/map/MapComponent'

const MapPage = () => {
  return (
    <>
      <Container>
        <Header />
        <Breadcrumbs aria-label="breadcrumb" separator="›">
          <Link href="/">
            <Typography color="text.secondary">Главная</Typography>
          </Link>
          <Typography color="text.secondary">Карты</Typography>
        </Breadcrumbs>
        <MapComponent />
      </Container>
    </>
  )
}
export default MapPage
