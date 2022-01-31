import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 8px 20px;
  align-items: center;
`

export const UserAvatar = styled.div`
  width: 36px; 
  height: 36px;
  overflow: hidden;
  margin-right: 8px;
  border-radius: 2px;
  img { width: 100%; }
`

export const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const Name = styled.span`
  font-size: 15px;
  font-weight: 700;
  line-height: 1.4;
  margin-right: 8px;
`

export const Date = styled.span`
  font-size: 13px;
  margin-left: 8px;
  font-weight: 400;
  color: rgb(97, 96, 97);
`
