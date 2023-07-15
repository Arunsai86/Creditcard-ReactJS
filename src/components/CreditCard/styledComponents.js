import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #ffffff;
  height: 100vh;
  width: 100vw;
  display: flex;
`

export const CardMainContainer = styled.div`
  background-color: #3b4b69;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Title = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  color: #ffffff;
  margin-top: 30px;
  border-bottom: 2.5px solid #ffd773;
`
export const CardImageBg = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  width: 85%;
  height: 280px;
  border-radius: 15px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`

export const CardNumberText = styled.p`
  font-size: 25px;
  color: #ffffff;
`
export const CustomerNameHeading = styled.p`
  font-size: 10px;
  color: #ffffff;
`
export const CustomerNameText = styled.p`
  color: #ffffff;
  font-size: 15px;
`
export const InputMainContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const InputDetailsContainer = styled.div`
  width: 90%;
  height: 300px;
  border: 1px solid #d3d9e0;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const InputElement = styled.input`
  width: 80%;
  height: 33px;
  margin-top: 10px;
  margin-bottom: 20px;
  outline: none;
  padding-left: 5px;
`
