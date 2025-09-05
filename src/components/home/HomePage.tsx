import { AppBar, Box, Typography } from '@mui/material'

import HeaderButton from '../header/HeaderButton'
import HeaderLocationBar from '../header/HeaderLocationBar'
import HeaderNavigation from '../header/HeaderNavigation'

const HomePage = () => {
  return (
    <Box display="flex" flexDirection="column" height="100vh" width="auto">
      <AppBar color="transparent" elevation={0} position="static" />
      <HeaderLocationBar />

      <Box
        display="flex"
        flexDirection="column"
        flexGrow={1}
        position="relative"
      >
        <Box
          alt="Main screen"
          component="img"
          src="/main-screen.jpg"
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0
          }}
        />

        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            px: (theme) => theme.fn.clampVW(72, 16, 72),
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box>
            <HeaderNavigation>
              <HeaderButton label="Войти" to="/auth" />
            </HeaderNavigation>
          </Box>

          <Box
            sx={{
              pt: (theme) => theme.fn.clampVW(84, 16, 84),
              pb: (theme) => theme.fn.clampVW(20, 16, 20),
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              flexGrow: 1
            }}
          >
            <Box textAlign="left">
              <Typography variant="h4">
                Поиск компании для отдыха с{' '}
                <Typography color="primary.main" component="span" variant="h4">
                  Vikada
                </Typography>
              </Typography>
              <Typography
                sx={{
                  mt: (theme) => theme.fn.clampVW(16, 8, 24)
                }}
                variant="h5"
              >
                Найди новых друзей и зарядись эмоциями
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default HomePage
