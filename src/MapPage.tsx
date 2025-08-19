import { Breadcrumbs, Container, Link, Typography } from '@mui/material'
import { useState } from 'react'

import Header from './components/Header'
import MapComponent from './components/map-page/map/MapComponent'
import TagInfoComponent from './components/map-page/tagInfo/TagInfoComponent'

const MapPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div style={{ position: 'relative' }}>
      <Container>
        <Header />
        <Breadcrumbs
          aria-label="breadcrumb"
          separator="›"
          sx={{ paddingBottom: '24px' }}
        >
          <Link href="/">
            <Typography color="text.secondary">Главная</Typography>
          </Link>
          <Typography color="text.secondary">Карты</Typography>
        </Breadcrumbs>
        <div style={{ position: 'relative' }}>
          <MapComponent setIsOpen={setIsOpen} />
          <TagInfoComponent isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </Container>
    </div>
  )
}
export default MapPage
