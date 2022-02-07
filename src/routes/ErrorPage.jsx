import styled from 'styled-components'

var imageName = require('./404.png')

const ErrorPage = () => {
  return ( 
    <Container>
        <Logo src={imageName} />
        <p>Page not found</p>
        <ButtonGroup>
          <Button onclick="history.back(-1)">Go Back</Button>
          <Button>Go to Home Page</Button>
        </ButtonGroup>

    </Container>
  )
}

export default ErrorPage

const Container = styled.div`
  width: 100%;
  padding-top: 150px;
  padding-left: 25%;
  display: block;
  align-items: center;
  justify-content: center;
  background: #fff;
  color: #ddd;
  font-weight: 300;
  h4 {
    font-size: 60px;
    line-height: 46px;
    margin-bottom: 40px;
  }
`

// const MessageBox = styled.div`
//   height: 200px;
//   width: 400px;
//   color: #ddd;
//   font-weight: 300;
//   h4 {
//     font-size: 60px;
//     line-height: 46px;
//     margin-bottom: 40px;
//   }
// `

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
const Logo = styled.img`
  height: 300px;
`
