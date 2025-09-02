import { Box, Link, Toolbar, Typography } from '@mui/material'
import { ReactNode } from 'react'

// import LogoIcon from '@/assets/logo/Logo.svg?react'

interface HeaderNavigationProps {
  children?: ReactNode
}

const HeaderNavigation = ({ children }: HeaderNavigationProps) => {
  return (
    <>
      <Toolbar
        sx={{
          minHeight: '40px !important',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '22px 0 44px'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
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
            {/*<LogoIcon*/}
            {/*  style={{*/}
            {/*    width: '12px',*/}
            {/*    height: '16px',*/}
            {/*    position: 'absolute',*/}
            {/*    top: '50%',*/}
            {/*    left: '50%',*/}
            {/*    transform: 'translate(-50%, -50%)'*/}
            {/*  }}*/}
            {/*/>*/}
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
        </Box>
        <Box sx={{ display: 'flex', gap: 5 }}>
          <Link href="/" underline="none">
            <Typography color="text.primary" variant="h1">
              Главная
            </Typography>
          </Link>
          <Link href="/" underline="none">
            <Typography color="text.primary" variant="h1">
              Объявления
            </Typography>
          </Link>
          <Link href="/" underline="none">
            <Typography color="text.primary" variant="h1">
              Группы
            </Typography>
          </Link>
          <Link href="/" underline="none">
            <Typography color="text.primary" variant="h1">
              О нас
            </Typography>
          </Link>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>{children}</Box>
        </Box>
      </Toolbar>
    </>
  )
}

export default HeaderNavigation
