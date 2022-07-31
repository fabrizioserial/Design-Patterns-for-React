import React from "react";
import { Rocket} from "../../../common/types";
import SpecialRocketCard from "./SpecialRocketCard";
import NormalRocketCard from "./NormalRocketCard";

interface RocketCardProps {
    rocket: Rocket,
}

const RocketCard: React.FC<RocketCardProps> = ({rocket}) => {
    const CardToRender = () => {
        switch (rocket.name) {
            case 'Starship':
                return <SpecialRocketCard rocket={rocket}/>
            default:
                return <NormalRocketCard rocket={rocket}/>
        }
    }
    return( <CardToRender/> )
}

export default RocketCard