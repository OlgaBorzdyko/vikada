import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const HeaderButton = ({ label, to }: { label: string; to: string }) => {
  return (
    <Box
      component={Link}
      sx={{
        all: 'unset',
        display: 'inline-block',
        width: (theme) => theme.fn.clampVW(160, 120, 200),
        height: (theme) => theme.fn.clampVW(44, 32, 56)
      }}
      to={to}
    >
      <Button
        sx={{
          width: '100%',
          height: '100%',
          minWidth: 0,
          padding: 0,
          textTransform: 'none',
          borderRadius: '8px'
        }}
        variant="outlined"
      >
        <Typography variant="h1">{label}</Typography>
      </Button>
    </Box>
  )
}

export default HeaderButton
