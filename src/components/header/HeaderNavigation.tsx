import { Box, Link, Toolbar, Typography } from '@mui/material'
import { ReactNode } from 'react'

import LogoComponent from '../LogoComponent'

interface HeaderNavigationProps {
  children?: ReactNode
}

const HeaderNavigation = ({ children }: HeaderNavigationProps) => {
  return (
    <Toolbar
      sx={(theme) => ({
        pt: theme.fn.clampVW(24, 16, 48),
        display: 'flex',
        justifyContent: 'space-between',
        gap: 2,
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'flex-start', md: 'center' }
      })}
    >
      <Box sx={{ mb: { xs: 2, md: 0 } }}>
        <LogoComponent />
      </Box>

      <Box
        sx={() => ({
          display: 'flex',
          gap: 5,
          flexGrow: 1,
          justifyContent: { xs: 'flex-start', md: 'center' },
          flexDirection: { xs: 'column', md: 'row' },
          width: { xs: '100%', md: 'auto' },
          '& a': { mb: { xs: 1, md: 0 } }
        })}
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

      <Box sx={{ flexShrink: 0, mt: { xs: 2, md: 0 } }}>{children}</Box>
    </Toolbar>
  )
}

export default HeaderNavigation
