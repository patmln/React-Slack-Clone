import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 20px;
  padding-bottom: 24px;
`

export const InputField = styled.div`
  border-radius: 4px;
  border: 1px solid #8D8D8E;
  form {
    height: 42px;
    display: flex;
    padding-left: 10px;
    align-items: center;

    input {
      flex: 1;
      border: none;
      font-size: 13px;
      &:focus { outline: none; }
    }

    button {
      width: 32px;
      border: none;
      display: flex;
      cursor: pointer;
      margin-right: 5px;
      border-radius: 2px;
      background: #007A5A;
      align-items: center;
      justify-content: center;

      .MuiSvgIcon-root { 
        width: 18px;
        color: #D9D9D9;
      }
      &:hover { background: #148567; }
    }
  }
`
