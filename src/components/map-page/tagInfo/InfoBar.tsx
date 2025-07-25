import Box from '@mui/material/Box'
import React from 'react'
import styled from 'styled-components'

import TagMainInfo from './TagMainInfo'
import ToursList from './ToursList'

const InfoBar = ({
  isOpen,
  setIsOpen
}: {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <>
      <StyledButton onClick={() => setIsOpen(!isOpen)}>
        Поле поиска тега
      </StyledButton>
      <BarWrapper isOpen={isOpen}>
        <Box sx={{ padding: '20px' }}>
          <p>Выбранное место</p>
          <TagMainInfo />
          <ToursList />
        </Box>
      </BarWrapper>
    </>
  )
}

const BarWrapper = styled.div`
  position: absolute;
  right: 0;
  width: 40.97%;
  height: ${({ isOpen }) => (isOpen ? 'calc(100vh - 221.33px)' : 0)};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  z-index: ${({ isOpen }) => (isOpen ? '99' : -1)};
  transition: opacity 0.3s ease, height 0.3s ease-in-out;
  background-color: ${({ theme }) => theme.palette.background.default};
  border-radius: 0 12px 12px 0;
  border: 1px solid #e1e1e1;
  overflow-y: scroll;
  overflow-x: hidden;
`

const StyledButton = styled.button`
  position: absolute;
  left: 10%;
`

export default InfoBar
