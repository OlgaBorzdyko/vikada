import { Box } from '@mui/material'

import LogoIcon from '@/assets/logo/Logo.svg?react'

const LogoIconComponent = () => {
  return (
    <Box
      sx={{
        height: '24px',
        width: '24px',
        borderRadius: '6px',
        backgroundColor: 'primary.main',
        position: 'relative',
        padding: '8px',
        flexShrink: 0
      }}
    >
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
  )
}

export default LogoIconComponent
