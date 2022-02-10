import {useUsers} from '../../contexts/UsersProvider'
import {useEffect, useState, useRef} from 'react'
import styled from 'styled-components'
import {CgClose} from 'react-icons/cg'
import {NameInput, Image} from './style'

export default({selected, setSelected}) => {
  const inputRef = useRef()
  const {users} = useUsers()
  const [suggestions, setSuggestions] = useState([])

  const handleOnChange = () => {
    const input = inputRef.current.value
    let matches = []
    if (input.length > 0) {
      matches = users.filter(user => {
        const regex = new RegExp(`${input}`,'gi')
        return user.email.match(regex)
      })
    }
    setSuggestions(matches)
  }

  const handleClick = id => {
    setSelected(current => {
      const newList = [...current, id]
      const uniqueId = newList.filter(
        (value, index, self) => self.indexOf(value) === index)
      return uniqueId
    })
  }

  return (
    <>
      <Input
        ref={inputRef}
        onChange={handleOnChange}
        placeholder='somebody@example.com'
      />
      <Suggestions show={suggestions.length}>
        {suggestions.map((user, i) => (
          <Item key={i} onClick={() => handleClick(user.id)}>
            <img src='./frog-boi.jpg'/>
            <span>{user.email}</span>
          </Item>
        ))}
      </Suggestions>
    </>
  )  
}

const Input = styled.input`
  width: 100%;
  color: #d1d2d3;
  padding: 10px 10px;
  border-radius: 4px;
  background: #1A1D21;
  border: 1px solid #8d8d8e;
  :focus { outline: none; }
  :placeholder { color: #999b9d; }
`

const Suggestions = styled.div`
  width: 100%;
  font-size: 15px;
  max-height: 240px;
  overflow-y: scroll;
  border-radius: 8px;
  background: #222529;
  padding: 1em 0 1em 0;
  border: 1px solid #323337;
  display: ${({ show }) => !show && 'none'};
`

const Item = styled.div`
  height: 30px;
  display: flex;
  cursor: pointer;
  align-items: center;
  padding: .5em 0 .5em 20px;
  span { font-weight: bold; }
  :hover { background: #1264A3; }
  img {
    height: 20px;
    margin-right: 8px;
    border-radius: 5px;
    background-size: 100%;
    background-repeat: no-repeat;
  }
`
