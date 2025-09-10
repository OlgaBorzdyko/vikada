import {
  AppBar,
  Box,
  Breadcrumbs,
  Link,
  Typography,
  useTheme
} from '@mui/material'
import { useState } from 'react'

import Header from './components/header/Header'
import MapComponent from './components/map-page/map/MapComponent'
import SearchComponent from './components/map-page/search/SearchComponent'
import TagInfoComponent from './components/map-page/tagInfo/TagInfoComponent'

const MapPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const theme = useTheme()

  return (
    <Box sx={{ position: 'relative' }}>
      {/* header */}
      <AppBar
        color="transparent"
        elevation={0}
        position="static"
        sx={{
          px: theme.fn.clampVW(72, 16, 72),
          pt: theme.fn.clampVW(24, 12, 32)
        }}
      >
        <Header />
      </AppBar>

      {/* breadcrumbs */}
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          px: theme.fn.clampVW(72, 16, 72),
          pb: theme.fn.clampVW(24, 12, 32),
          alignItems: { xs: 'center', md: 'flex-start' },
          flexGrow: 1
        }}
      >
        <Breadcrumbs aria-label="breadcrumb" separator="›">
          <Link href="/">
            <Typography color="text.secondary">Главная</Typography>
          </Link>
          <Typography color="text.secondary">Карты</Typography>
        </Breadcrumbs>
      </Box>

      {/* map */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: {
            xs: '100vh',
            md: `calc(100vh - ${theme.fn.clampVW(200, 160, 240)})`
          },
          borderRadius: { xs: 0, md: theme.fn.clampVW(12, 0, 12) },
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: theme.fn.clampVW(16, 8, 24),
            left: theme.fn.clampVW(16, 8, 24),
            zIndex: 1000
          }}
        >
          <SearchComponent />
        </Box>

        <MapComponent setIsOpen={setIsOpen} />
        <TagInfoComponent isOpen={isOpen} setIsOpen={setIsOpen} />
      </Box>
    </Box>
  )
}

export default MapPage
