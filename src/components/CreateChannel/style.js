import styled from 'styled-components'

export const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalContent = styled.div`
  width: 500px;
  height: 64vh;
  background-color: #fff;
  border-radius: 8px;
  padding: 30px;
  padding-top: 20px;
  padding-bottom: 0px;
  padding-right: 35px;
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: end;
  margin-top: 40px;
`

export const ModalTitle = styled.h2`
  color: black;
` 

export const ModalClose = styled.button`
  cursor: pointer;
  background-color: white;
  border: none;
  font-size: 30px;
  color: gray;
` 

export const ModalBody = styled.div`
  padding-top: 20px;
`

export const Info = styled.p`
  color: gray;
  font-size: 14px;
` 
export const ModalOptional = styled.span`
  color: gray;
  margin-bottom: 10px;
  margin-top: 30px;
` 

export const Description = styled.div`
  display: flex;
  align-items: center;
` 

export const ModalLabel = styled.h4`
  margin-bottom: 10px;
  margin-top: 30px;
  color: black;
` 
export const ModalP = styled.span`
  color: gray;
  font-size: 13px;
`

export const ModalName = styled.div`
  display: flex;
  align-items: center;
` 
export const ModalInputStart = styled.button`
  color: gray;
  padding: 10px 10px;
  border: 1px solid gray;
  border-radius: 4px 0px 0px 4px;
  background-color: white;
  border-right-style: none;
` 

export const ModalInputName = styled.input`
  width: 100%;
  padding: 10px 10px;
  border: 1px solid gray;
  border-radius: 0px 4px 4px 0px;
  border-left-style: none;
  border-left-radius: none;
  &:focus { outline: none; }
`

export const ModalInput = styled.input`
  width: 100%;
  padding: 10px 10px;
  border: 1px solid gray;
  border-radius: 4px;
  &:focus { outline: none; }
`

export const ModalPrivate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
` 

export const ModalPrivateInfo = styled.p`
  color: gray;
  width: 70%;
` 

export const ModalCheckbox = styled.input.attrs({ type: 'checkbox' })`
  
` 

export const ModalLearn = styled.button`
  color: gray;
  background-color: white;
  border: none;
  font-size: 15px;
  cursor: pointer;
` 

export const ModalCreate = styled.button`
  color: gray;
  background-color: lightgray;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: gray;
  }
` 
