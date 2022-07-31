import React from "react";
import {CardType, Rocket} from "../../../common/types";
import {StyledRocketCard, StyledRocketImage, StyledRocketTitle, StyledTagSpecial} from "../../../common/styles";

interface RocketCardProps {
    rocket: Rocket,
    type: CardType,
}

// Through all this component we can see how we are overriding the styling and in one case, adding a new component to render
const RocketCard: React.FC<RocketCardProps> = ({rocket,type}) => {
    return(
        <StyledRocketCard style={{
            border:`${type === CardType.SPECIAL ? "2px solid #FFAE00FF" : "1px solid darkgrey"}`,
            backgroundColor: `${type === CardType.SPECIAL ? "#181818" : "white"}`,
            boxShadow: `${type === CardType.SPECIAL  ? "0px 0px 10px #FFAE00FF" : ""}`
        }}>
            {type === CardType.SPECIAL && <StyledTagSpecial> 🚀 </StyledTagSpecial>}
            <StyledRocketImage src={rocket.flickr_images[0]} />
            <StyledRocketTitle style={{color: `${ type === CardType.SPECIAL ? "#FFAE00FF": "black"}`}}>{rocket.name}</StyledRocketTitle>
        </StyledRocketCard>
    )
}

export default RocketCard