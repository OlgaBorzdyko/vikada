import { Box, Typography, useTheme } from '@mui/material'

const AuthorizationPage = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        background: `linear-gradient(to left, white 50%, ${theme.palette.primary.main} 50%)`,
        height: '100vh'
      }}
    >
      <Typography>Авторизация</Typography>
    </Box>
  )
}
export default AuthorizationPage
