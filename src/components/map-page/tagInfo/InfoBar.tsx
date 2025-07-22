import React from 'react'
import styled from 'styled-components'

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
      <BarWrapper isOpen={isOpen}>Информация об экскурсиях</BarWrapper>
    </>
  )
}

const BarWrapper = styled.div`
  position: absolute;
  right: 0;
  width: 50%;
  height: ${({ isOpen }) => (isOpen ? 'calc(100vh - 221.33px)' : 0)};
  z-index: ${({ isOpen }) => (isOpen ? '99' : -1)};
  transition: opacity 0.3s ease, height 0.3s ease-in-out;
  background-color: pink;
  border-radius: 12px;
`

const StyledButton = styled.button`
  position: absolute;
`

export default InfoBar
