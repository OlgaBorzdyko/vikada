import { Box, Typography, useTheme } from '@mui/material'

import AuthForm from './AuthForm'
import ImagesList from './ImagesList'
import RegistrationForm from './RegistrationForm'

const AuthorizationPage = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        background: `linear-gradient(to left, white 50%, ${theme.palette.primary.main} 50%)`,
        height: '100vh',
        paddingX: '5vw',
        paddingY: '14.26vh',
        display: 'flex',
        flexDirection: 'row'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          width: '50%',
          height: 'auto',
          paddingRight: '5vw'
        }}
      >
        <Typography
          sx={{
            fontSize: '40px',
            lineHeight: '100%',
            fontWeight: 700,
            color: theme.palette.background.default
          }}
        >
          Добро пожаловать в Vikada
        </Typography>
        <Typography
          sx={{
            fontSize: '24px',
            lineHeight: '100%',
            fontWeight: 400,
            color: theme.palette.background.default
          }}
        >
          Ваш билет в мир увлечений и новых знакомств - откройте яркие моменты
          вместе с нами!
        </Typography>
        <Box sx={{}}>
          <ImagesList />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '50%',
          marginLeft: '50%',
          height: 'auto'
        }}
      >
        <AuthForm />
        <RegistrationForm />
      </Box>
    </Box>
  )
}
export default AuthorizationPage
