import styled from "styled-components";

const StyledRocketListContainer = styled.div`
  padding: 10px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 10px;
`
const StyledRocketCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  border: 1px solid darkgrey;
  padding: 15px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const StyledSpecialRocketCard = styled(StyledRocketCard)`
  border: 2px solid #FFAE00FF ;
  background-color: #181818; 
  box-shadow: 0 0 10px #FFAE00FF;
`

const StyledTagSpecial = styled.div`
  position: absolute;
  top: -5px;
  left: 8px;
  height: 40px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  border-radius: 0 0 5px 5px;
  background-color: #FFAE00FF;
`

interface StyledRocketTitleProps {
    color?: string
}

const StyledRocketTitle = styled.p<StyledRocketTitleProps>`
  font-weight: bold;
  text-transform: uppercase;
  color: ${ props => (props.color ?? 'black')};
`;

const StyledRocketImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;

export {
    StyledRocketListContainer,
    StyledRocketCard,
    StyledRocketImage,
    StyledRocketTitle,
    StyledTagSpecial,
    StyledSpecialRocketCard,
}