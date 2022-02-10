import styled from 'styled-components'

export const Modal = styled.div`
  width: 500px;
  padding: 30px;
  cursor: default;
  border-radius: 8px;
  background: #222529;
  border: 1px solid #8d8d8e;

  button {
    float: right;
    color: #222529;
    cursor: pointer;
    font-size: 15px;
    margin-top: 15px;
    font-weight: bold;
    border-radius: 4px;
    padding: 10px 15px;
    background: #2EB67D;   
    transition: all .1s ease;
    :hover {
      color: #d1d2d3;
      background: none;
      outline: 1px #2EB67D solid;
    }
  }
`

export const Header = styled.div`
  display: flex;
  color: #d1d2d3;
  align-items: center;
  justify-content: space-between;
  svg { cursor: pointer; }
`
