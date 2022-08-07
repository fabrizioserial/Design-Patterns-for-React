import React from "react";
import {Rocket} from "../../../common/types";
import {StyledRocketCard, StyledRocketImage, StyledRocketTitle} from "../../../common/styles";


interface RocketCardProps {
    // Here we are requesting the whole Rocket object
  rocket: Rocket;
}

const RocketCard: React.FC<RocketCardProps> = ({ rocket }) => {
  return (
    <StyledRocketCard>
        {/* But we are using the flickr_images property */}
      <StyledRocketImage src={rocket.flickr_images[0]} />
        {/* and the name property */}
        <StyledRocketTitle>{rocket.name}</StyledRocketTitle>
    </StyledRocketCard>
  );
};

/**
 * Interface Segregation Principle says that a component should not request by props more things than what it will use
 *
 * Here we can see that our interface RocketCardProps needs a rocket: Rocket that carry a lot of property that we will
 * not use.
 */

export default RocketCard;
