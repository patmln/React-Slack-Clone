import {CgClose} from 'react-icons/cg'
import {useState, useRef} from 'react'
import {
  Modal, Header,
  Body, ModalLabel,
  ModalName, NameInput
} from './style'

export default({openNext, isOpenNext, onClose}) => {
  const nameRef = useRef(null)

  const handleClick = () => { 
    const name = nameRef.current.value
    if (!name || name.length < 3 || name.length > 15) {
      alert('Name should be within 3-15 characters long')  
    } else {
      isOpenNext(true)
    }
  }

  return (<>
    {!openNext &&
      <Modal onClick={e => e.stopPropagation()}>
        <Header>
          <h2>Create a Channel</h2>
          <CgClose size={20} onClick={onClose}/>
        </Header>
        <Body>
          <p>
            Channels are where your team communicates. They're best when
            organized around a topic - #marketing, for example.
          </p>
          <ModalLabel>Name</ModalLabel>
          <ModalName>
            <span>#</span>
            <NameInput ref={nameRef} placeholder='e.g. plan-budget'/>    
          </ModalName>
        </Body>
        <button onClick={handleClick}>Next</button>
      </Modal>
    }</>)
}
