import {useState} from 'react'
import {
  MainContainer,
  CardMainContainer,
  Title,
  CardImageBg,
  CardNumberText,
  CustomerNameHeading,
  CustomerNameText,
  InputMainContainer,
  InputDetailsContainer,
  InputElement,
} from './styledComponents'

const CreditCard = () => {
  const [cardNo, setCardNo] = useState('')
  const [name, setName] = useState('')
  const changeCardNumber = event => {
    setCardNo(event.target.value)
  }
  const changeName = event => {
    setName(event.target.value)
  }
  return (
    <MainContainer>
      <CardMainContainer>
        <Title>CREDIT CARD</Title>
        <CardImageBg data-testid="creditCard">
          <CardNumberText>{cardNo}</CardNumberText>
          <CustomerNameHeading>CARDHOLDER NAME</CustomerNameHeading>
          <CustomerNameText>{name.toUpperCase()}</CustomerNameText>
        </CardImageBg>
      </CardMainContainer>
      <InputMainContainer>
        <InputDetailsContainer>
          <h1>Payment Method</h1>
          <InputElement onChange={changeCardNumber} placeholder="Card Number" />
          <InputElement onChange={changeName} placeholder="Cardholder Name" />
        </InputDetailsContainer>
      </InputMainContainer>
    </MainContainer>
  )
}
export default CreditCard
