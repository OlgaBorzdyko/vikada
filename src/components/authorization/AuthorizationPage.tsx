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
      <Typography>Добро пожаловать в Vikada</Typography>
      <Typography>
        Ваш билет в мир увлечений и новых знакомств - откройте яркие моменты
        вместе с нами!
      </Typography>
      <Box sx={{ width: '50%', padding: '72px' }}>
        <ImagesList />
      </Box>
    </Box>
  )
}
export default AuthorizationPage
