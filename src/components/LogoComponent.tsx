import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import LogoIconComponent from './LogoIconComponent'

const LogoComponent = () => {
  return (
    <Box>
      <Link style={{ display: 'inline-block', textDecoration: 'none' }} to="/">
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
      </Link>
    </Box>
  )
}

export default LogoComponent
