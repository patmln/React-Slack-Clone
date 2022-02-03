import RegisterHeader from "./RegisterHeader"
import RegisterBody from "./RegisterBody"
import RegisterFooter from "./RegisterFooter"
import {useState} from 'react'
import { Container, Content } from "./style"

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return(
    <Container>
      <Content>
        <RegisterHeader/>
        <RegisterBody/>
        <RegisterFooter/>
      </Content>
    </Container>
  )
}

export default Register



