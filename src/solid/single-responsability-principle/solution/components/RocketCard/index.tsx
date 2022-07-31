import React from "react";
import {
  StyledRocketCard,
  StyledRocketImage,
  StyledRocketTitle,
} from "../../styles";
import { Rocket } from "../../types";

interface RocketCardProps {
  rocket: Rocket;
}

const RocketCard: React.FC<RocketCardProps> = ({ rocket }) => {
  return (
    <StyledRocketCard>
      <StyledRocketImage src={rocket.flickr_images[0]} />
      <StyledRocketTitle>{rocket.name}</StyledRocketTitle>
    </StyledRocketCard>
  );
};

export default RocketCard;
