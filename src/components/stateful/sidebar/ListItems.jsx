import {RiArrowRightSFill} from 'react-icons/ri'
import {FiMoreVertical} from 'react-icons/fi'
import styled from 'styled-components'
import {HiPlus} from 'react-icons/hi'
import Modal from '../../Modal'
import {useState} from 'react'

export default(props) => {
  const {
    addGeneral,
    label, list,
    itemKey, itemImg
  } = props

  const [show, setShow] = useState(false)
  const [active, setActive] = useState(false)
  const [visible, setVisible] = useState(false)

  return (
    <div style={{marginTop: '10px'}}>
      <Tab 
        active={active} 
        visible={visible}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        <div style={{display: 'flex'}}>
          <RiArrowRightSFill 
            size={20} 
            onClick={() => setActive(!active)} 
          />
          <p>{label}</p>
        </div>
        <div>
          <FiMoreVertical size={18}/>
          <HiPlus size={20} onClick={() => setShow(true)}/>
        </div>
        <Modal onClose={() => setShow(false)} show={show}/>
      </Tab>
      <List active={active}>
        {addGeneral && 
          <ListItem style={{background: '#537aa6', color: '#fff'}}>
            # general
          </ListItem>
        }
        {list.map((item, index) => (
          <ListItem key={index}>
            {itemImg}
            <p>{item[itemKey]}</p>
          </ListItem> 
        ))}
      </List>
    </div>
  )
}

const List = styled.div`
  display: ${({ active }) => !active && 'none'}
`

const ListItem = styled.div`
  height: 28px;
  display: flex;
  font-size: 15px;
  cursor: pointer;
  padding-left: 36px;
  align-items: center;
  p { margin-left: 8px; } 
  &:hover { background: #313843; }
  img {
    height: 20px;
  }
`

const Tab = styled.div`
  height: 28px;
  display: flex;
  cursor: pointer;
  font-size: 15px;
  padding-left: 19px;
  padding-right: 12px;
  align-items: center;
  justify-content: space-between;
  svg:hover {
    border-radius: 5px;
    background: #34393F;
  }
  div:first-child svg {
    transition: all .3s ease;
    transform: rotate(${
      ({ active }) => active ? '90deg' : '0deg'
    });
  }
  div:last-child {
    transition: all .2s ease;
    opacity: ${({ visible }) => visible ? '1' : '0'}
  }
`
