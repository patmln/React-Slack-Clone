import {
  RegisterMain, RegisterBoard,
  RegisterInput, SignUpButton,
  RegisterTextSubHeading,
  Instructions, Terms
} from './style'

const Body = props => {
  const {
    setEmail, setPassword, 
    setConfirmPassword
  } = props

  return (
    <RegisterMain>
      <RegisterBoard>
        <RegisterTextSubHeading>
          We suggest using the <strong>email address you use at work.</strong>
        </RegisterTextSubHeading>
        <RegisterInput
          type="email" 
          placeholder="name@work-email.com"
          onChange={e => setEmail(e.target.value)}
        />
        <RegisterInput
          type="text" 
          placeholder="Enter your password"
          onChange={e => setPassword(e.target.value)}
        />
        <RegisterInput
          type="text" 
          placeholder="Confirm password"
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <SignUpButton onClick={() => {}}>Sign Up</SignUpButton> 
        <Instructions>
          <span> 
            <input type="checkbox" name="emailnotifs" id="emailnotifs"/> 
            <label htmlFor="emailnotifs">
              Its okay to send me emails about Slack.
            </label>
          </span>
          <Terms>By continuing, you’re agreeing to our 
            <a href="#">Customer Terms of Service,</a> 
            <a href="#">Privacy Policy,</a>
            <a href="#">Cookie Policy.</a>
          </Terms>
        </Instructions>
      </RegisterBoard>
    </RegisterMain>
  )
}

export default Body
