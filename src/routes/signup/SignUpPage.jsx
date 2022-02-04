import {useState} from 'react'

import Footer from './Footer'
import Body from './Body'
import {
  Container, 
  Content, 
  Header, Logo
} from './style'

const SignUpPage = () => {
  const logoUrl = 'http://a.slack-edge.com/bv1-9/slack_logo-ebd02d1.svg'

  return(
    <Container>
      <Content>
        <Header>
          <Logo>
            <img alt="Slack" src={logoUrl}/>
          </Logo>
        </Header>
        <Body/>
        <Footer/>
      </Content>
    </Container>
  )
}

export default SignUpPage
