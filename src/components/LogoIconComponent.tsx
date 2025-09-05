import { Box } from '@mui/material'

import LogoIcon from '@/assets/logo/Logo.svg?react'

const LogoIconComponent = () => {
  return (
    <Box
      sx={{
        width: (theme) => theme.fn.clampVW(20, 18, 24),
        height: (theme) => theme.fn.clampVW(20, 18, 24),
        borderRadius: '6px',
        backgroundColor: 'primary.main',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}
    >
      <LogoIcon />
    </Box>
  )
}

export default LogoIconComponent
