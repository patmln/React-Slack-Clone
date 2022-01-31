import styled from 'styled-components'

export const Container = styled.div`
  color: #FFF;
  z-index: 10;
  display: flex;
  position: relative;
  align-items: center;
  background: #350D36;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgba(225, 225, 225, 0.1);
`

export const Main = styled.div`
  display: flex;
  margin-left: 16px;
  margin-right: 16px;
`

export const SearchBox = styled.div`
  min-width: 400px;
  margin-left: 16px;
  margin-right: 16px;
`

export const Search = styled.div`
  width: 100%;
  border-radius: 6px;
  box-shadow: inset 0 0 0 1px rgb(104, 74, 105);
  input {
    color: #FFF;
    border: none;
    padding-top: 4px;
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 4px;
    background: transparent;
    &:focus { outline: none; }
  }
`
export const UserContent = styled.div`
  align-items: center;
  padding-right: 16px;
  position: absolute;
  display: flex;
  right: 0;
  h4 { padding-right: 16px; }
`

export const Name = styled.h4``

export const Image = styled.div`
  height: 28px;
  width: 28px;
  border: 2px solid #FFF;
  border-radius: 3px;
  img { width: 100%; }
`
