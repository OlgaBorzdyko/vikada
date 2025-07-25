import { Toolbar, Typography } from '@mui/material'

import LocationIcon from '@/assets/icons/LocationIcon.svg?react'

const HeaderLocationBar = () => {
  return (
    <>
      <Toolbar
        sx={{
          minHeight: '32px !important',
          borderBottom: '1px solid #E1E1E1'
        }}
      >
        <LocationIcon
          style={{ width: '12.67px', height: '12.67px', paddingRight: '2px' }}
        />
        <Typography
          sx={{
            color: 'primary',
            flexGrow: 1
          }}
          variant="body1"
        >
          Москва и область
        </Typography>
      </Toolbar>
    </>
  )
}

export default HeaderLocationBar
