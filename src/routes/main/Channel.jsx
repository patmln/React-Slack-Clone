import MessageInput from '../../components/MessageInput'
import {getAllUsers} from '../../utils/api'
import {useEffect, useState} from 'react'
import styled from 'styled-components'
import SampleThread from '../../data/sampleChannelThread'

const Channel = ({user}) => {
  const auth = user.authData

  return (
    <Container>
      <Header>
        <h4>Dunder Mifflin</h4>
        <Button>
          <Image src='https://static.wikia.nocookie.net/theoffice/images/6/67/Pam_Beesley.jpg' />
          <Image src='https://static.wikia.nocookie.net/theoffice/images/e/e9/Character_-_JimHalpert.PNG' />
          <Image src='https://static.wikia.nocookie.net/theoffice/images/0/0b/Angela_Martin.jpg' />
          15
        </Button>
      </Header>
      <Search>
        <button>+ Add a bookmark</button>
      </Search>
      <Thread>
        <SampleThread />
      </Thread>
      <MessageInputBox>
        <MessageInput auth={auth} />
      </MessageInputBox>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  color: #d1d2d3;
  flex-direction: column;
`

const Header = styled.div`
  height: 50px;
  display: flex;
  padding-left: 20px;
  background: #1A1D21;
  padding-right: 20px;
  align-items: center;
  outline: 1px solid #35373B;
  justify-content: space-between;
`

const Search = styled.div`
  height: 37px;
  display: flex;
  padding-left: 20px;
  background: #1A1D21;
  padding-right: 20px;
  align-items: center;
  outline: 1px solid #35373B;
  justify-content: space-between;

  button {
    font-size: 12px;
    color: #a0a0a2;
    padding: 5px 5px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: #232529;
      border-radius: 4px;
    }
  }
`

const MessageInputBox = styled.div`
  margin-top: 0%;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  color: #a0a0a2;
    padding: 5px 5px;
    background-color: transparent;
    border: 1px solid #34383E;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: #232529;
    }
`

const Image = styled.img`
  border: 1px solid black;
  border-radius: 4px;
  width: 25px;
  height: 25px;
`

const Thread = styled.div`
  height: 70%;
  overflow: auto;
`

export default Channel
