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
        flexGrow={1}
        sx={{
          backgroundImage: "url('/main-screen.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box
          sx={{
            px: (theme) => theme.fn.clampVW(72, 16, 72)
          }}
        >
          <Box display="flex" flexDirection="row">
            <HeaderNavigation>
              <HeaderButton label={'Войти'} to={'/auth'} />
            </HeaderNavigation>
          </Box>
          <Box
            sx={{
              pt: (theme) => theme.fn.clampVW(84, 16, 84),
              pb: (theme) => theme.fn.clampVW(20, 16, 20),
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Box>
              <Typography variant="h4">
                Поиск компании для отдыха с Vikada
              </Typography>
              <Typography variant="h4">
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
