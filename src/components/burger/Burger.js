import React, { useState } from 'react'
import { StyledBurgerClosed, StyledBurgerOpened } from './Burger.styled'
import styled from 'styled-components'

const StyledMenu = styled.div`
  position: absolute;
  margin: -80px 0 0 200px;
  background: #29abe2;
  height: 300px;
  width: 300px;
  /*
  padding-top: 65px;

 
  -webkit-font-smoothing: antialiased;
  */

  /* to stop flickering of text in safari */

  transform-origin: 20% 60%;
  transform: translate(-100%, 0);
  color: #fff;
  z-index: 5000;
`

const StyledMenuItems = styled.div`
  margin: 50px 100px;
  font-family: 'Roboto';
`

function Burger() {
  const [opened, setOpened] = useState(0)

  const handleClick = () => {
    opened === 0 ? setOpened(1) : setOpened(0)
  }

  return (
    <React.Fragment>
      <StyledBurgerClosed onClick={handleClick} />
      {opened === 1 && (
        <StyledMenu id="menu">
          <StyledBurgerOpened onClick={handleClick} />
          <StyledMenuItems>
            lista
            <br />
            sobre mim
            <br />
            cadastro
          </StyledMenuItems>
        </StyledMenu>
      )}
    </React.Fragment>
  )
}

export default Burger
