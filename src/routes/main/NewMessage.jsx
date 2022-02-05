import MessageInput from '../../components/MessageInput'
import {getAllUsers} from '../../utils/api'
import {useEffect, useState} from 'react'
import styled from 'styled-components'

const NewMessage = ({user}) => {
  const auth = user.authData
  const [search, setSearch] = useState('')
  const [userList, setUserList] = useState([])
  const [receiverId, setReceiverId] = useState('')
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    (async()=> {
      const {data} = await getAllUsers(auth)
      setUserList(data)
    })()
  }, [])

  const handleOnChange = input => {
    let matches = []
    if (input.length > 0) {
      matches = userList.filter(usr => {
        const regex = new RegExp(`${input}`,'gi')
        return usr.email.match(regex)
      })
    }
    setSuggestions(matches)
    setSearch(input)
  }

  return (
    <Container>
      <Header>
        <h4>New message</h4>
      </Header>
      <Search>
        <h4>To:</h4>
        <input 
          onChange={e => handleOnChange(e.target.value)}
          placeholder='#a-channel, @somebody, or somebody@example.com'
        />
      </Search>
      {suggestions && 
        suggestions.map(({email}, index) => 
          <div key={index}>{email}</div>
        )
      }
    <MessageInput auth={auth} />
    </Container>
  )
}

export default NewMessage

const Container = styled.div`
  display: flex;
  color: #d1d2d3;
  flex-direction: column;
`

const Header = styled.div`
  height: 49px;
  display: flex;
  padding-left: 20px;
  background: #1A1D21;
  padding-right: 20px;
  align-items: center;
  outline: 1px solid #35373B;
  justify-content: space-between;
`

const Search = styled.div`
  height: 49px;
  display: flex;
  padding-left: 20px;
  background: #1A1D21;
  padding-right: 20px;
  align-items: center;
  outline: 1px solid #35373B;
  justify-content: space-between;

  input {
    height: 100%;
    width: 100%;
    color:#a4a4a6;
    font-size: 14px;
    margin-left: 8px;
    background: transparent;
    &:focus { outline: 0; }
  }
`
