import MenuIcon from '@mui/icons-material/Menu'
import { Box, Button, Drawer, IconButton } from '@mui/material'
import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import CloseIcon from '@/assets/icons/CloseIcon.svg?react'
import LoginIcon from '@/assets/icons/LoginIcon.svg?react'

import LogoIconComponent from '../LogoIconComponent' // мобильная иконка
import HeaderLocationBar from './HeaderLocationBar'
import HeaderNavigation from './HeaderNavigation'

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Desktop */}
      <Box
        display={{ xs: 'none', md: 'flex' }}
        flexDirection="column"
        zIndex={2}
      >
        <HeaderLocationBar />
        <HeaderNavigation>
          <Button variant="contained">Войти</Button>
        </HeaderNavigation>
      </Box>

      {/* Mobile nav */}
      <Box
        alignItems="flex-end"
        display={{ xs: 'flex', md: 'none' }}
        justifyContent="space-between"
        p={2}
        zIndex={2}
      >
        {/* burger + logo */}
        <Box alignItems="center" display="flex" gap={1}>
          <IconButton onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
          <LogoIconComponent />
        </Box>
        <Box flexGrow={1} />

        {/* login icon */}
        <IconButton component={RouterLink} to="/auth">
          <LoginIcon />
        </IconButton>
      </Box>

      {/* Drawer mobile */}
      <Drawer
        PaperProps={{ sx: { width: '100%' } }}
        anchor="right"
        onClose={() => setOpen(false)}
        open={open}
      >
        <Box display="flex" flexDirection="column" gap={2} height="100%" p={2}>
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <HeaderLocationBar />
          <HeaderNavigation />
        </Box>
      </Drawer>
    </>
  )
}

export default Header
