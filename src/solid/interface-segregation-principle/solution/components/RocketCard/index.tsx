import React from "react";
import {StyledRocketCard, StyledRocketImage, StyledRocketTitle} from "../../../common/styles";

interface RocketCardProps {
  // Now we only request name and imageUrl that are the properties that we will use in the component
  name: string;
  imageUrl: string;
}

const RocketCard: React.FC<RocketCardProps> = ({ name, imageUrl }) => {
  return (
    <StyledRocketCard>
      <StyledRocketImage src={imageUrl} />
        <StyledRocketTitle>{name}</StyledRocketTitle>
    </StyledRocketCard>
  );
};

/**
 * Interface Segregation Principle says that a component should not request by props more things than what it will use
 *
 * Now we can see that in our interface we are requesting the props that we will use.
 */

export default RocketCard;
