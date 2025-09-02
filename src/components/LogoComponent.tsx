import { Box, Typography } from '@mui/material'

import LogoIcon from '@/assets/logo/Logo.svg?react'

const LogoComponent = () => {
  return (
    <Box>
      <Box>
        <LogoIcon
          style={{
            width: '12px',
            height: '16px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      </Box>
      <Typography
        sx={{
          color: 'primary.main',
          flexGrow: 2
        }}
        variant="h1"
      >
        Vikada
      </Typography>
    </Box>
  )
}

export default LogoComponent
