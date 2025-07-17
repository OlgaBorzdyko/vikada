import { AppBar, Box, Toolbar, Typography } from '@mui/material'

import LocationIcon from '@/assets/icons/LocationIcon.svg?react'
import LogoIcon from '@/assets/logo/Logo.svg?react'

const Header = () => {
  return (
    <>
      <AppBar color="transparent" elevation={0} position="static">
        <Toolbar
          sx={{
            px: '72px',
            py: '12px',
            minHeight: '32px !important',
            borderBottom: '1px solid #E1E1E1'
          }}
        >
          <LocationIcon style={{ width: '12.67px', height: '12.67px' }} />
          <Typography
            sx={{
              color: 'primary',
              flexGrow: 1
            }}
            variant="body1"
          >
            Москва и область
          </Typography>
        </Toolbar>
        <Toolbar
          sx={{
            px: '72px',
            py: '12px',
            minHeight: '40px !important'
          }}
        >
          <Box
            sx={{
              height: '24px',
              width: '24px',
              borderRadius: '6px',
              backgroundColor: 'primary.main',
              position: 'relative',
              padding: '8px'
            }}
          >
            <LogoIcon
              style={{
                width: '12px',
                height: '16px',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            />
          </Box>
          <Typography
            sx={{
              color: 'primary.main',
              flexGrow: 1
            }}
            variant="h1"
          >
            Vikada
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
