import { Box } from '@mui/material'
import React from 'react'

import InfoBar from './InfoBar'

const TagInfoComponent = ({
  isOpen,
  setIsOpen
}: {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1000
      }}
    >
      <InfoBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </Box>
  )
}

export default TagInfoComponent
