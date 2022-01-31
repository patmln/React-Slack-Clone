import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  padding: 0rem 5rem;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const InputField = styled.div`
  height: 45px;
  display: grid;
  width: 100%;
  margin: 10px 0;
  max-width: 380px;
  position: relative;
  background: #f0f0f0;
  border-radius: 15px;
  grid-template-columns: 15% 85%;
  
  .MuiSvgIcon-root {
    color: #acacac;
    line-height: 45px;
    font-size: 1.1rem;
  }
`

export const Input = styled.input`
  border: none;
  outline: none;
  line-height: 1;
  background: none;
  font-weight: 600;
  font-size: .85rem;
  color: #333;
  &::placeholder {
    color: #2a2a2a;
    font-weight: 500;
  }
`

export const Button = styled.button`
  color: #fff;
  width: 125px;
  height: 40px;
  outline: none;
  font-size: 1em;
  margin: 25px 0;
  cursor: pointer;
  font-weight: 500;
  transition: 0.5s;
  border-radius: 25px;
  background: #0A8D48;

  &:hover {
    color: #0A8D48;
    background: transparent;
    border: 1px solid #0A8D48;
  }
`
