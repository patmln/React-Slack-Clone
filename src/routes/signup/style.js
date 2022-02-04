import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background: #f8f8f8;
  justify-content: center;
`

export const Content = styled.div`
  padding: 110px;  
  display: flex;
  border-radius: 5px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.12), 
    0 1px 2px rgba(0, 0, 0, 0.24);
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  margin: 2% auto;
  padding-top: 20px;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: center;
  img{ height: 40px; }
`

export const RegisterMain = styled.div`
  display: flex;
  justify-content: center;
`

export const RegisterBoard = styled.div`
  height: 50vh;
  width: 330px;
  text-align: center;
`
export const RegisterTextSubHeading = styled.div`
  font-size: 15px;
  padding-bottom: 10px;
`

export const RegisterInput = styled.input`
  width: 91%;
  margin-top:10px;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 3px;
  &:hover { box-shadow: 0 3px 10px rgb(0 0 0 / 0.2) }
`
export const SignUpButton = styled.button`
  background: #3f0f40;
  color: #fff;
  border: none;
  margin-bottom: 20px;
  margin-top: 20px;
  cursor: pointer;
  width: 95%;
  padding:10px;
  font-weight: bold;
  border-radius: 3px;
  &:hover{ background:#0A8D48; }
`
export const Instructions = styled.div`
  display: flex;
  color: grey;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 400;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  span{
    font-size: 13x;
    padding: 20px;
  }

  input{
    width: 15px;
    height: 15px;
    cursor: pointer;
    margin-right: 10px;
  }
`

export const Terms = styled.div`
  text-align: center;
  font-size: 13px;
  a {
    color: grey;
    text-decoration: none;
    &:hover{ text-decoration: underline; }
  }
`

export const PageFooter = styled.div`
  width: 100%;
  border: none;
  display: flex;
  font-size: 15px;
  text-align: center;
  align-content: center;
  justify-content: center;
  span{
    margin-right: 10px;
    font-size:12px;
  }
  a{
    text-decoration: none;
    color: grey;
    &:hover{ color: #000; }
  }
`

export const FooterChild = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
