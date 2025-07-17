import { AppBar } from '@mui/material'

import HeaderLocationBar from './header/HeaderLocationBar'
import HeaderNavigation from './header/HeaderNavigation'

const Header = () => {
  return (
    <>
      <AppBar color="transparent" elevation={0} position="static">
        <HeaderLocationBar />
        <HeaderNavigation />
      </AppBar>
    </>
  )
}

export default Header
