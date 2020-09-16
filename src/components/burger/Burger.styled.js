import styled from 'styled-components'

import HamburgerImage from '../../icones/hamburguer.svg'
import HamburgerImageOpened from '../../icones/hamburguer-aberto0.svg'

const StyledBurgerClosed = styled.div`
  position: relative;
  background-image: url(${HamburgerImage});
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  border: none;
  display: block;
`

const StyledBurgerOpened = styled.div`
  position: relative;
  background-image: url(${HamburgerImageOpened});
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  margin: 50px 100px;
  display: block;
  z-index: -1;
`

export { StyledBurgerClosed, StyledBurgerOpened }
