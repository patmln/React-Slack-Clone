import styled from 'styled-components'

export const Container = styled.div`
  background: #3F0E40;
`

export const Workspace = styled.div`
  color: #FFF;
  height: 64px;
  display: flex;
  padding-left: 19px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #532753;
`

export const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  fill: #3F0E40;
  color: #3F0E40;
  cursor: pointer;
  background: #FFF;
  border-radius: 50%;
  margin-right: 20px;
  align-items: center;
  justify-content: center;
`

export const MainChannels = styled.div`
  padding-top: 20px;
`

export const ChannelItem = styled.div`
  color: whitesmoke;
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  &:hover { background: #350D36; }
`

export const ChannelContainer = styled.div`
  color: whitesmoke;
  margin-top: 10px;
`
export const NewChannels = styled.div`
  height: 28px;
  display: flex;
  padding-left: 19px;
  padding-right: 12px;
  align-items: center;
  justify-content: space-between;

  .MuiSvgIcon-root { cursor: pointer; }
`
