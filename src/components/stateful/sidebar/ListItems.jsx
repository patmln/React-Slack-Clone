import {RiArrowRightSFill} from 'react-icons/ri'
import {FiMoreVertical} from 'react-icons/fi'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import {HiPlus} from 'react-icons/hi'
import {useState} from 'react'

export default(props) => {
  const {
    addGeneral,
    label, list,
    setShowModal,
    itemKey, itemImg
  } = props

  const [isRotate, setIsRotate] = useState(false)
  const [showOptions, setShowOptions] = useState(false)


  return (
    <div style={{marginTop: '10px'}}>
      <Tab 
        isRotate={isRotate} 
        showOptions={showOptions}
        onMouseEnter={() => setShowOptions(true)}
        onMouseLeave={() => setShowOptions(false)}
      >
        <div style={{display: 'flex'}}>
          <RiArrowRightSFill 
            size={20} 
            onClick={() => setIsRotate(!isRotate)} 
          />
          <p style={{marginLeft:'8px'}}>{label}</p>
        </div>
        <div>
          <button>
            <FiMoreVertical size={18} color={'#b0b2b4'}/>
          </button>
          <button onClick={() => setShowModal(true)}>
            <HiPlus size={20} color={'#b0b2b4'}/>
          </button>
        </div>
      </Tab>
      <List isRotate={isRotate}>
        {addGeneral && 
          <ListItem to=''>
            # general
          </ListItem>
        }
        {list && list.map((item, index) => (
          <ListItem to='' key={index}>
            {itemImg}
            <p>{item[itemKey]}</p>
          </ListItem> 
        ))}
      </List>
    </div>
  )
}

const List = styled.div`
  display: ${
    ({ isRotate }) => !isRotate && 'none'
  }
`

const ListItem = styled(NavLink)`
  height: 28px;
  display: flex;
  color: #b0b2b4;
  font-size: 15px;
  cursor: pointer;
  padding-left: 36px;
  align-items: center;
  text-decoration: none;
  :hover { background: #313843; }
  ${({ active }) => active && `
    color: #FFF;
    background: #537AA6;`
  }
  img { height: 20px; }
  p { margin-left: 8px; } 
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
  button { 
    cursor: pointer;
    background: none; 
  }
  div:first-child svg {
    transition: transform .1s ease;
    transform: rotate(${
      ({ isRotate }) => isRotate ? '90deg' : '0deg'
    });
  }
  div:last-child {
    transition: opacity .1s ease-out;
    opacity: ${({ showOptions }) => showOptions ? '1' : '0'}
  }
`
