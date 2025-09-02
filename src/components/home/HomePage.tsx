import { AppBar, Box, Typography } from '@mui/material'

import HeaderLocationBar from '../header/HeaderLocationBar'
import HeaderNavigation from '../header/HeaderNavigation'

const HomePage = () => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
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
        <HeaderNavigation />
        <Box>
          <Typography variant="h4">main</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default HomePage
