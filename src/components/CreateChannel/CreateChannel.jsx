import React, { useState } from "react"
import {
  Modal, ModalContent, ModalHeader, 
  ModalTitle, ModalClose, ModalBody,
  ModalDescription, ModalInfo, ModalLabel, 
  ModalName, ModalInputStart, ModalInputName,
  ModalInput, ModalOptional, ModalP,
  ModalPrivate, ModalPrivateInfo, ModalCheckbox, 
  ModalLearn, ModalCreate, ModalFooter 
} from './style.js'


const CreateChannel = props => {
  //const createChannelHandler
    //fetch api
  
  if (!props.show) {
    return null
  }

  return (
    <Modal onClick={props.onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Create a Channel</ModalTitle>
          <ModalClose onClick={props.onClose}>&times;</ModalClose>
        </ModalHeader>
        <ModalBody>
          <ModalInfo>
            Channels are where your team communicates. They're best when
            organized around a topic - #marketing, for example.
          </ModalInfo>
          <ModalLabel>Name</ModalLabel>
          <ModalName>
            <ModalInputStart>#</ModalInputStart>
            <ModalInputName
                placeholder="e.g. plan-budget">    
            </ModalInputName>
          </ModalName>
          <ModalDescription>
            <ModalLabel>Description</ModalLabel>
            <ModalOptional>(optional)</ModalOptional>
          </ModalDescription>
          <ModalInput></ModalInput>
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
          <ModalCreate>Create</ModalCreate>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default CreateChannel