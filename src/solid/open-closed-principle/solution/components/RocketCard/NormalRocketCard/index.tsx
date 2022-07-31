import React from "react";
import {Rocket} from "../../../../common/types";
import {StyledRocketCard, StyledRocketImage, StyledRocketTitle} from "../../../../common/styles";

interface RocketCardProps {
    rocket: Rocket,
}

// Through all this component we can see how we are overriding the styling and in one case, adding a new component to render
const NormalRocketCard: React.FC<RocketCardProps> = ({rocket}) => {
    return(
        <StyledRocketCard>
            <StyledRocketImage src={rocket.flickr_images[0]} />
            <StyledRocketTitle>{rocket.name}</StyledRocketTitle>
        </StyledRocketCard>
    )
}

export default NormalRocketCard