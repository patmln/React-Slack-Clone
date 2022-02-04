import styled from 'styled-components'

const ErrorPage = () => {
  return ( 
    <Container>
      <MessageBox>
        <h1>404</h1>
        <p>Page not found</p>
        <ButtonGroup>
          <Button onclick="history.back(-1)">Go Back</Button>
          <Button>Go to Home Page</Button>
        </ButtonGroup>
      </MessageBox>
    </Container>
  )
}

export default ErrorPage

const Container = styled.div`
  height: 100vh;
  background: #2F3242;
`

const MessageBox = styled.div`
  height: 200px;
  width: 380px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: 50px;
  color: #FFF;
  font-weight: 300;
  h4 {
    font-size: 60px;
    line-height: 46px;
    margin-bottom: 40px;
  }
`

const ButtonGroup = styled.div`
  margin-top: 40px;
`

const Button = styled.a`
  background: #68c950;
  padding: 8px 25px;
  border-radius: 4px;
  color: #FFF;
  font-weight: bold;
  font-size: 14px;
  transition: all 0.3s linear;
  cursor: pointer;
  text-decoration: none;
  margin-right: 10px;
  &:hover {
    background: #5A5C6C;
    color: #fff;
  }
`
