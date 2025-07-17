import { AppBar, Toolbar, Typography } from '@mui/material'

const Header = () => {
  return (
    <>
      <AppBar color="transparent" elevation={0} position="static">
        <Toolbar sx={{ px: '72px', py: '10px' }}>
          <Typography
            sx={{
              color: 'primary',
              flexGrow: 1
            }}
          >
            Москва и область
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
