import React from "react";
import { Rocket} from "../../../../common/types";
import {
    StyledRocketImage,
    StyledRocketTitle,
    StyledSpecialRocketCard,
    StyledTagSpecial
} from "../../../../common/styles";

interface RocketCardProps {
    rocket: Rocket,
}

// Through all this component we can see how we are overriding the styling and in one case, adding a new component to render
const SpacialRocketCard: React.FC<RocketCardProps> = ({rocket}) => {
    return(
        <StyledSpecialRocketCard>
            <StyledTagSpecial> 🚀 </StyledTagSpecial>
            <StyledRocketImage src={rocket.flickr_images[0]} />
            <StyledRocketTitle color={'#FFAE00FF'}>{rocket.name}</StyledRocketTitle>
        </StyledSpecialRocketCard>
    )
}

export default SpacialRocketCard