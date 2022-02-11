import {useUsers} from '../contexts/UsersProvider'
import {useRef, useEffect, useState} from 'react'
import {HiPaperAirplane} from 'react-icons/hi'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export default(props) => {
  const {
    input, setInput,
    handleClick, route
  } = props
  const [active, setActive] = useState(false)

  useEffect(() => setActive(!input), [input])

  return (
    <ChatInput>
      <Container>
        <input 
          type='text' 
          placeholder='Message here...'
          onChange={e => setInput(e.target.value)}
        />
        <Link
          to={route ? route : ''}
          active={active ? 1 : 0}
          onClick={handleClick}
        >
          <HiPaperAirplane size={18} color='white'/>
        </Link>
      </Container> 
    </ChatInput>
  )
}

const ChatInput= styled.div`
  width: 100%;
  padding: 0 20px;
  margin-top: auto;
  padding-bottom: 24px;
`

const Container = styled.div`
  height: 42px;
  display: flex;
  border-radius: 4px;
  padding-left: 10px;
  align-items: center;
  border: 1px solid #8D8D8E;

  input {
    flex: 1;
    border: none;
    font-size: 13px;
    color: whitesmoke;
    background: transparent;
    :focus { outline: none; }
    ::placeholder { color: #FFF; }
  }

  a {
    width: 32px;
    border: none;
    display: flex;
    cursor: pointer;
    margin-right: 5px;
    align-items: center;
    justify-content: center;
    background: transparent;
    transform: rotate(90deg);
    svg {
      opacity: ${props => 
        props.children[1].props.
        active ? '.25' : '1'
      };
      pointer-events: ${props => 
        props.children[1].props.
        active ? 'none' : 'auto'
      };
    }
`

