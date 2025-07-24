import { Box, Typography, useTheme } from '@mui/material'

import ImagesList from './ImagesList'

const AuthorizationPage = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        background: `linear-gradient(to left, white 50%, ${theme.palette.primary.main} 50%)`,
        height: '100vh'
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
      <Box
        sx={{
          width: '50%',
          paddingLeft: '72px',
          paddingRight: '72px',
          paddingBottom: '146px',
          paddingTop: '40px'
        }}
      >
        <ImagesList />
      </Box>
    </Box>
  )
}
export default AuthorizationPage
