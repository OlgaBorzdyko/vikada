import { AppBar, Toolbar, Typography } from '@mui/material'

import LocationIcon from '@/assets/icons/LocationIcon.svg?react'

const Header = () => {
  return (
    <>
      <AppBar color="transparent" elevation={0} position="static">
        <Toolbar sx={{ px: '72px', py: '10px' }}>
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
      </AppBar>
    </>
  )
}

export default Header
