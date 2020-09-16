import React from 'react'
import styled from 'styled-components'
import BgHeaderImageDesktop from '../../images/index-image.jpg'
import BgHeaderImageMobile from '../../images/index-image-mobile.jpg'
import LogoIn8 from '../../images/logo-in8-dev.svg'
import Burger from '../burger'
import { SectionMenu } from '../Section'

const Header = styled.div`
  min-height: 565px;
`

const StyledBg = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`

const Menu = styled(SectionMenu)``

const StyledMenuLeftDesktop = styled.div`
  float: left;
`
const StyledMenuRightDesktop = styled.div`
  float: right;
  font-family: 'Helvetica 25';
  font-size: 1.2em;
  color: #fff;
`

const StyledMenuLeftMobile = styled.div`
  float: left;
  font-family: 'Helvetica 25';
  font-size: 1.2em;
`
const StyledMenuRightMobile = styled.div`
  float: right;
  width: 70%;
  margin: 0;
  text-align: right;
`

const SiteTitle = styled.div`
  padding: 50px;
  font-family: 'Helvetica 25';
  margin: 0 auto;
  padding: 20px;
  text-align: center;

  @media (min-width: 1025px) {
    height: 60%;
    width: 50%;
    position: relative;
    padding: 200px;
  }
`

const SiteH1 = styled.div`
  color: #fff;
  font-size: 4em;

  @media (min-width: 1025px) {
    font-size: 8em;
  }
`

const SiteH2 = styled.div`
  color: #fff;
  font-size: 1.7em;

  @media (min-width: 1025px) {
    font-size: 3.4em;
  }
`
const LogoImage = () => {
  return <img src={LogoIn8} alt="logo" style={{ width: '60%' }} />
}

const HeaderDesktop = () => {
  return (
    <Header>
      <StyledBg src={BgHeaderImageDesktop} alt="header" />
      <Menu>
        <StyledMenuLeftDesktop>
          <LogoImage />
        </StyledMenuLeftDesktop>
        <StyledMenuRightDesktop>
          cadastro &bull; lista &bull; sobre mim
        </StyledMenuRightDesktop>
      </Menu>

      <SiteTitle>
        <SiteH1>ESTÁGIO</SiteH1>
        <SiteH2>PROVA DE SELEÇÃO</SiteH2>
      </SiteTitle>
    </Header>
  )
}

const HeaderMobile = () => {
  return (
    <Header>
      <StyledBg src={BgHeaderImageMobile} alt="header" />
      <Menu>
        <StyledMenuLeftMobile>
          <Burger />
        </StyledMenuLeftMobile>
        <StyledMenuRightMobile>
          <LogoImage />
        </StyledMenuRightMobile>
      </Menu>

      <SiteTitle>
        <SiteH1>ESTÁGIO</SiteH1>
        <SiteH2>PROVA DE SELEÇÃO</SiteH2>
      </SiteTitle>
    </Header>
  )
}

export { HeaderDesktop, HeaderMobile }
