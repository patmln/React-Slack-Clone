import {getAllUsers} from '../../../utils/api/user'
import {useEffect, useState, useRef} from 'react'
import Suggestions from './Suggestions'
import styled from 'styled-components'
import Selected from './Selected'

export default({auth, selected, setSelected}) => {
  const inputRef = useRef()
  const [userList, setUserList] = useState([])
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    (async()=> {
      const res = await getAllUsers(auth)
      setUserList(res.data)
    })()
  }, [])

  const handleClick = id => {
    setSelected(id)
    inputRef.current.value = ''
    inputRef.current.placeholder = ''
  }

  const handleOnChange = () => {
    const input = inputRef.current.value
    let matches = []
    if (input.length > 0) {
      matches = userList.filter(user => {
        const regex = new RegExp(`${input}`,'gi')
        return user.email.match(regex)
      })
    }
    setSuggestions(matches)
  }

  return (
    <>
      <Search>
        <label>To:</label>
        {selected && 
          <Selected 
            userList={userList}
            selected={selected}
            setSelected={setSelected}
          />
        } 
        <input
          ref={inputRef}
          onChange={handleOnChange}
          placeholder='#a-channel, @somebody, or somebody@example.com'
        />
      </Search>
      <Suggestions 
        list={suggestions} 
        handleClick={handleClick}
      />
    </>
  )  
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
  label { margin-right: 8px; }
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
