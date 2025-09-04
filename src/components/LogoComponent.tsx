import { Box, Typography } from '@mui/material'

import LogoIconComponent from './LogoIconComponent'

const LogoComponent = () => {
  return (
    <Box>
      <Box
        display="flex"
        flexDirection="row"
        sx={{ gap: (theme) => theme.fn.clampVW(6, 6, 6) }}
      >
        <LogoIconComponent />
        <Typography
          sx={{
            color: 'primary.main'
          }}
          variant="h1"
        >
          Vikada
        </Typography>
      </Box>
    </Box>
  )
}

export default LogoComponent
