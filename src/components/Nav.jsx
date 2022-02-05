import styled from 'styled-components'

import {MdHelpOutline} from 'react-icons/md'
import {CgSearch} from 'react-icons/cg'
import {BiTime} from 'react-icons/bi'
import {useState} from 'react'

const Nav = ({signOut}) => {
  const [workspace, setWorkspace] = useState('Avion School')

  return (
    <Container>
      <HistoryIcon>
        <BiTime size={22}/>
      </HistoryIcon>
      <SearchBox>
        <input 
          type='text'
          placeholder={`Search ${workspace}`}
        />
        <CgSearch size={18}/>
      </SearchBox>
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
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  background: #0B161E;
  justify-content: space-around;
  outline: 1px solid #34383E;
`

const HistoryIcon = styled.div`
  display: flex;
  min-width: auto; 
  padding-left: 16px;
  padding-right: 20px;
  align-items: center;
`

const SearchBox = styled.div`
  width: 732px;
  display: flex;
  border-radius: 6px;
  position: relative;
  background: #3C454B;
  align-items: center;
  input {
    width: 95%;
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
  display: flex;
  position: relative;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
`

const Image = styled.div`
  height: 28px;
  width: 28px;
  border: 2px solid #FFF;
  border-radius: 3px;
  img { width: 100%; }
`
