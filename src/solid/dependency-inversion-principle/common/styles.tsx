import styled from "styled-components";

const StyledRocketListContainer = styled.div`
  padding: 10px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 10px;
`;

const StyledRocketCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid darkgrey;
  padding: 15px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const StyledRocketTitle = styled.p`
  font-weight: bold;
  text-transform: uppercase;
`;

const StyledRocketImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;

export {
    StyledRocketListContainer,
    StyledRocketCard,
    StyledRocketTitle,
    StyledRocketImage,
}