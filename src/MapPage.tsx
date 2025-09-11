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

  const paddingX = { md: theme.fn.clampVW(72, 16, 72) }
  const paddingBottom = theme.fn.clampVW(42, 16, 42)

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      {/* header */}
      <AppBar
        color="transparent"
        elevation={0}
        position="static"
        sx={{
          px: paddingX,
          pt: theme.fn.clampVW(24, 12, 32)
        }}
      >
        <Header />
      </AppBar>

      {/* breadcrumbs */}
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          px: paddingX,
          pb: paddingBottom,
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

      <Box sx={{ px: paddingX }}>
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
              top: { xs: 16, md: 40 },
              left: { xs: 16, md: 40 },
              zIndex: 1000,
              backgroundColor: 'white',
              borderRadius: 1,
              boxShadow: 3,
              width: { xs: 'calc(100% - 32px)', md: '300px' }
            }}
          >
            <SearchComponent />
          </Box>

          <MapComponent setIsOpen={setIsOpen} />
          <TagInfoComponent isOpen={isOpen} setIsOpen={setIsOpen} />
        </Box>
      </Box>
    </Box>
  )
}

export default MapPage
