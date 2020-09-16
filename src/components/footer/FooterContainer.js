import React from 'react'
import styled from 'styled-components'
import BgFooterImageDesktop from '../../images/rodape-desktop.jpg'

const Footer = styled.div`
  background-image: url(${BgFooterImageDesktop});
  height: 100%;
  display: table;
  width: 100%;
`

const FooterText = styled.div`
  text-align: center;
  color: #fff !important;
  vertical-align: middle;
  display: table-cell;
`

const FooterContainer = () => {
  return (
    <Footer>
      <FooterText>
        <div>
          <p>Daniel Rocha</p>
          <p>rochadhc@gmail.com</p>
          <p>(31) 993770539</p>
          <p>Centro Universitário Una</p>
        </div>
      </FooterText>
    </Footer>
  )
}

export default FooterContainer
