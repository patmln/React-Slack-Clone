import {RiArrowRightSFill} from 'react-icons/ri'
import {FiMoreVertical} from 'react-icons/fi'
import styled from 'styled-components'
import {HiPlus} from 'react-icons/hi'
import {ListItem} from './TabItems'
import Modal from '../../Modal'
import {useState} from 'react'

export default({channels}) => {
  const [show, setShow] = useState(false)
  return (
    <Accordion>
      <Tab>
        <RiArrowRightSFill size={20}/>
        <p>Channels</p>
        <FiMoreVertical size={18}/>
        <HiPlus size={20} onClick={() => setShow(true)}/>
        <Modal onClose={() => setShow(false)} show={show}/>
      </Tab>
      <div>{
        channels.map(({name}, index) => (
          <ListItem key={index}>
            #{name}
          </ListItem> 
        ))
      }</div>
    </Accordion>
  )
}

const Accordion = styled.div`
  margin-top: 10px;
`
const Tab = styled.div`
  height: 28px;
  display: flex;
  cursor: pointer;
  padding-left: 19px;
  padding-right: 12px;
  align-items: center;
  justify-content: space-between;
  svg:hover {
    border-radius: 5px;
    background: #34393F;
  }
`
