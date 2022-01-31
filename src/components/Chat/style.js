import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content;
`

export const Header = styled.div`
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(83, 39, 83, 0.13);
`

export const Channel = styled.div``

export const ChannelName = styled.div`
  font-weight: 700;
`

export const ChannelInfo = styled.div`
    color: #606060;
    font-size: 13px;
    margin-top: 8px;
    font-weight: 400;
`

export const ChannelDetails = styled.div`
  display: flex;
  color: #606060;
  align-items: center;

  .MuiSvgIcon-root { margin-left: 10px; }
`

export const MessageContainer = styled.div``
