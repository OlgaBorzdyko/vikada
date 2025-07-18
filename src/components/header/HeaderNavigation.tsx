import { Box, Button, Toolbar, Typography } from '@mui/material'

import LogoIcon from '@/assets/logo/Logo.svg?react'

const HeaderNavigation = () => {
  return (
    <>
      <Toolbar
        sx={{
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
            flexGrow: 2
          }}
          variant="h1"
        >
          Vikada
        </Typography>
        <Box display="flex" gap={2}>
          <Button variant="text">Главная</Button>
          <Button variant="text">Объявления</Button>
          <Button variant="text">Группы</Button>
          <Button variant="text">О нас</Button>
          <Button variant="contained">Екатерина</Button>
        </Box>
      </Toolbar>
    </>
  )
}

export default HeaderNavigation
