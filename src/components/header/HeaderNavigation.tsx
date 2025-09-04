import { Box, Link, Toolbar, Typography } from '@mui/material'
import { ReactNode } from 'react'

import LogoComponent from '../LogoComponent'

interface HeaderNavigationProps {
  children?: ReactNode
}

const HeaderNavigation = ({ children }: HeaderNavigationProps) => {
  return (
    <Toolbar
      sx={{
        pt: (theme) => theme.fn.clampVW(24, 16, 48),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2
      }}
    >
      <Box>
        <LogoComponent />
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: 5,
          flexGrow: 1,
          justifyContent: 'center'
        }}
      >
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
      </Box>

      <Box sx={{ flexShrink: 0 }}>{children}</Box>
    </Toolbar>
  )
}

export default HeaderNavigation
