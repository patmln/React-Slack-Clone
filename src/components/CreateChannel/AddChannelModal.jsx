import {useState} from 'react'
import {CgClose} from 'react-icons/cg'
import {
  Overlay, Content, 
  Header, Body, 
  ModalLabel, 
  ModalName, NameInput, 
} from './style.js'


const AddChannelModal = ({show, onClose})=> {
  const [name, setName] = useState('')

  const handleCreate = () => { 
    console.log(name)
    if (!name || name.length < 3 || name.length > 15) {
      alert('Name should be within 3-15 characters long')  
    } else {

    }
  }

  if (!show) return null

  return (
    <Overlay onClick={onClose}>
      <Content onClick={e => e.stopPropagation()}>
        <Header>
          <h2>Create a Channel</h2>
          <CgClose 
            size={20}
            onClick={onClose}/>
        </Header>
        <Body>
          <p>
            Channels are where your team communicates. They're best when
            organized around a topic - #marketing, for example.
          </p>
          <ModalLabel>Name</ModalLabel>
          <ModalName>
            <span>#</span>
            <NameInput 
              placeholder='e.g. plan-budget'
              onChange={e => setName(e.target.value)}
             />    
          </ModalName>
        </Body>
        <button onClick={handleCreate}>Next</button>
      </Content>
    </Overlay>
  )
}

export default AddChannelModal
