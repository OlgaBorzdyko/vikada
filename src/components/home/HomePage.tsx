import { Box, Typography } from '@mui/material'

import Header from '../Header'

const HomePage = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url('/main-screen.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <Box>
          <Header />
        </Box>
        <Box>
          <Typography variant="h4">main</Typography>
        </Box>
      </Box>
    </>
  )
}
export default HomePage
