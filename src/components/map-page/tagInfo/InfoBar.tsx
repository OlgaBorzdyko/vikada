import Box from '@mui/material/Box'
import styled from 'styled-components'

import TagMainInfo from './TagMainInfo'
import ToursList from './ToursList'

interface InfoBarProps {
  isOpen: boolean
}

const InfoBar = ({ isOpen }: InfoBarProps) => {
  return (
    <BarWrapper isOpen={isOpen}>
      <Box sx={{ padding: '20px' }}>
        <p>Выбранное место</p>
        <TagMainInfo />
        <ToursList />
      </Box>
    </BarWrapper>
  )
}

const BarWrapper = styled.div<{ isOpen: boolean }>`
  position: absolute;
  background-color: white;
  border: 1px solid #e1e1e1;
  overflow-y: auto;
  overflow-x: hidden;
  transition: max-height 0.3s ease-in-out;
  z-index: 99;

  right: 0;
  top: 0;
  width: 40.97%;
  max-height: ${({ isOpen }) => (isOpen ? 'calc(100vh - 221.33px)' : '0')};
  border-radius: 0 12px 12px 0;

  @media (max-width: 768px) {
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? '70vh' : '0')};
    border-radius: 12px 12px 0 0;
  }
`
export default InfoBar

//${({ theme }) => theme.palette.background.default};
