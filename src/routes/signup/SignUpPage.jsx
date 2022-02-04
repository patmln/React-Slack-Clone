import {
  Container, Content, 
  Header, Logo
} from './style'
import {useState} from 'react'

import Footer from './Footer'
import Body from './Body'

const SignUpPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const logoUrl = 'http://a.slack-edge.com/bv1-9/slack_logo-ebd02d1.svg'

  return(
    <Container>
      <Content>
        <Header>
          <Logo>
            <img alt="Slack" src={logoUrl}/>
          </Logo>
        </Header>
        <Body
          setEmail={setEmail}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
        />
        <Footer/>
      </Content>
    </Container>
  )
}

export default SignUpPage
