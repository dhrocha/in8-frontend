import React from 'react'
import './App.css'

import {
  HeaderDesktop,
  HeaderMobile,
} from './components/header/HeaderContainer'
import SignInContainer from './components/sign-in/SignInContainer'
import UsersListContainer from './components/users-list/UsersListContainer'
import FooterContainer from './components/footer/FooterContainer'

import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Roboto'],
  },
})

function App() {
  return (
    <div>
      {window.innerWidth >= 768 ? <HeaderDesktop /> : <HeaderMobile />}
      <SignInContainer />
      <UsersListContainer />
      <FooterContainer />
    </div>
  )
}

export default App
