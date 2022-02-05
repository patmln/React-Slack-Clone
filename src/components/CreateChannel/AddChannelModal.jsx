import {useState} from 'react'
import {
  Modal, ModalContent, 
  Header, ModalTitle, 
  ModalClose, ModalBody,
<<<<<<< HEAD
  Description,Info, 
=======
  Description, Info, 
>>>>>>> d9ee63fc64d031d62447b36f99a4c2b7f9d4b2ee
  ModalLabel, ModalName, 
  ModalInputStart, NameInput,
  DescriptionInput, ModalOptional, 
  ModalP, ModalPrivate, 
  ModalPrivateInfo, 
  ModalCheckbox, ModalLearn, 
  ModalCreate, ModalFooter 
} from './style.js'


const AddChannelModal = props => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [_private, isPrivate] = useState(false)

  const handleCreate = () => {
    
  }

  if (!props.show) return null

  return (
    <Modal onClick={props.onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <Header>
          <h2>Create a Channel</h2>
          <ModalClose onClick={props.onClose}>&times;</ModalClose>
        </Header>
        <ModalBody>
          <Info>
            Channels are where your team communicates. They're best when
            organized around a topic - #marketing, for example.
          </Info>
          <ModalLabel>Name</ModalLabel>
          <ModalName>
            <ModalInputStart>#</ModalInputStart>
            <NameInput 
              placeholder='e.g. plan-budget'
              onChange={e => setName(e.target.value)}
             />    
          </ModalName>
          <Description>
            <ModalLabel>Description</ModalLabel>
            <ModalOptional>(optional)</ModalOptional>
          </Description>
          <DescriptionInput
            onChange={e => setDescription(e.target.value)}
          />
          <ModalP>What's this channel about?</ModalP>
          <ModalLabel>Make private</ModalLabel>
          <ModalPrivate>
            <ModalPrivateInfo>
              When a channel is set to private, it can only be
              viewed or joined by invitation.
            </ModalPrivateInfo>
            <ModalCheckbox></ModalCheckbox>
          </ModalPrivate>
        </ModalBody>
        <ModalFooter>
          <ModalLearn>Learn more</ModalLearn>
          <ModalCreate onClick={handleCreate}>Create</ModalCreate>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default AddChannelModal
