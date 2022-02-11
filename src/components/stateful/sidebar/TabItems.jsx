import styled from 'styled-components'
import {FiMoreVertical} from 'react-icons/fi'
import {BsChatText} from 'react-icons/bs'
import {HiAtSymbol} from 'react-icons/hi'
import {NavLink} from 'react-router-dom'

export default() => (
  <>
    <ListItem to='threads'>
      <BsChatText size={18}/>
      <span>Threads</span>
    </ListItem>
    <ListItem to='activity'>
      <HiAtSymbol size={18}/>
      <span>Mentions & reactions</span>
    </ListItem>
    <MoreItem>
      <FiMoreVertical size={18}/>
      <span>More</span>
    </MoreItem>
  </>
)

const listItemStyle = `
  height: 28px;
  display: flex;
  font-size: 15px;
  cursor: pointer;
  padding-left: 19px;
  align-items: center;
  span { margin-left: 8px; } 
`
<<<<<<<< HEAD:src/components/stateful/sidebar/TabItems.jsx
const ListItem = styled.div`
========
const ListItem = styled(NavLink)`
>>>>>>>> ec33718e89ffdec71fd101ca4aec710be20ad46d:src/components/sidebar/TabItems.jsx
  ${listItemStyle}
  :hover { background: #313843; }
  text-decoration: none;
  color: #b0b2b4;
`
const MoreItem = styled.div`
  ${listItemStyle}
  :hover { color: whitesmoke; }
`
