import RegisterHeader from "./RegisterHeader"
import RegisterBody from "./RegisterBody"
import RegisterFooter from "./RegisterFooter"
import {useState} from 'react'
import { Container, Content } from "./style"

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return(
    <Container>
      <Content>
        <RegisterHeader/>
        <RegisterBody
          setEmail={setEmail}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
        />
        <RegisterFooter/>
      </Content>
    </Container>
  )
}

export default Register



