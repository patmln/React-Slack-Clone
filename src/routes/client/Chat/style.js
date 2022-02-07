import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content;
`

export const Header = styled.div`
  height: 49px;
  display: flex;
  padding-left: 20px;
  background: #1A1D21;
  padding-right: 20px;
  align-items: center;
  outline: 1px solid #35373B;
  border-bottom: 1px solid rgba(83, 39, 83, 0.13);
`

export const ChannelName = styled.div`
  font-weight: 700;
  margin-left: 8px;
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
