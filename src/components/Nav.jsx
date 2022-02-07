import styled from 'styled-components'

import {MdHelpOutline} from 'react-icons/md'
import {CgSearch} from 'react-icons/cg'
import {BiTime} from 'react-icons/bi'
import {useState} from 'react'

const Nav = ({signOut}) => {
  const [workspace, setWorkspace] = useState('Avion School')

  return (
    <Container>
      <Main>
        <BiTime size={22}/>
        <SearchBox>
          <input 
            type='text'
            placeholder={`Search ${workspace}`}
          />
          <CgSearch size={18}/>
        </SearchBox>
      </Main>
      <UserContent>
        <MdHelpOutline size={22}/>
        <Image onClick={signOut}>
          <img src="https://i.imgur.com/6VBx3io.png"/>
        </Image>
      </UserContent>
    </Container>
  )
}

export default Nav

// Styles
const Container = styled.div`
  color: #FFF;
  z-index: 10;
  display: flex;
  position: relative;
  align-items: center;
  background: #0B161E;
  justify-content: center;
  outline: 1px solid #34383E;
`

const Main = styled.div`
  display: flex;
  margin-left: 16px;
  margin-right: 16px;
  svg { margin-right: 16px; }
`

const SearchBox = styled.div`
  width: 732px;
  display: flex;
  border-radius: 6px;
  position: relative;
  background: #3C454B;
  align-items: center;
  input {
    width: 98%;
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

const UserContent = styled.div`
  right: 0;
  display: flex;
  position: fixed;
  align-items: center;
  padding-right: 16px;
`

const Image = styled.div`
  width: 28px;
  height: 28px;
  margin-left: 16px;
  border-radius: 3px;
  border: 1px solid #FFF;
  img { width: 100%; }
`
