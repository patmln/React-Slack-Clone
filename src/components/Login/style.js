import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background: #f8f8f8;
  justify-content: center;
`

export const Content = styled.div`
  padding: 100px;  
  display: flex;
  border-radius: 5px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.12), 
    0 1px 2px rgba(0, 0, 0, 0.24);
`

export const Logo = styled.img`
  height: 40px;
  margin-bottom: 40px
`
export const TextHeader = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 27px;
  margin-bottom: 30px;
  font-weight: bold
`
export const TextFooter = styled.div`
  font-family: 'Lato', sans-serif;
  padding-top: 30px;
  font-size: 13px;
  display: block;
`
export const LinkText = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 13px;
  display: block;
`