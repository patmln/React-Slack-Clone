import {getAllUsers} from '../../utils/api/user'
import {useEffect, useState} from 'react'
import styled from 'styled-components'

export default({auth, selected, setSelected}) => {
  const [search, setSearch] = useState('')
  const [userList, setUserList] = useState([])
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    (async()=> {
      const res = await getAllUsers(auth)
      setUserList(res.data)
    })()
  }, [])

  const handleClick = id => setSelected([...selected, id])      

  const handleOnChange = input => {
    let matches = []
    if (input.length > 0) {
      matches = userList.filter(user => {
        const regex = new RegExp(`${input}`,'gi')
        return user.email.match(regex)
      })
    }
    setSuggestions(matches)
    setSearch(input)
  }

  return (<>
    <Search>
      <label>To:</label>
      <input 
        onChange={e => handleOnChange(e.target.value)}
        placeholder='#a-channel, @somebody, or somebody@example.com'
      />
    </Search>
    <SearchResult hide={!suggestions.length}>
    {suggestions.map((user, index) => {
      return (
        <ResultItem 
          key={index}
          onClick={() => handleClick(user.id)}
          >
          <img src='./frog-boi.jpg' alt=''/>
          <strong>{user.email}</strong>
        </ResultItem>
      )
    })}
    </SearchResult>
  </>)  
}

const Search = styled.div`
  width: 100%;
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

const SearchResult = styled.div`
  width: 98%;
  font-size: 15px;
  max-height: 240px;
  margin-top: -10px;
  overflow-y: scroll;
  border-radius: 8px;
  background: #222529;
  padding: 1em 0 1em 0;
  border: 1px solid #323337;
  display: ${(props) => props.hide && 'none'}
`

const ResultItem = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  padding: .5em 0 .5em 20px;
  &:hover { background: #1264A3; }
  img {
    height: 20px;
    margin-right: 8px;
    border-radius: 5px;
    background-size: 100%;
    background-repeat: no-repeat;
  }
`
