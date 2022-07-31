import React, {useEffect, useState} from "react";
import {CardType, Rocket} from "../common/types";
import {getRockets} from "../common/api";
import {StyledRocketListContainer} from "../common/styles";
import RocketCard from "./components/RocketCard";


const ProblemOCP = () => {
    const [rocketList, setRocketList] = useState<Rocket[]>([]);

    useEffect(() => {
        (async () => setRocketList(await getRockets()))();
    },[]);

    return (
        <StyledRocketListContainer>
            {rocketList?.map((rocket, index) => (
                <RocketCard
                    rocket={rocket}
                    // Here we needed to add a new prop to change the behaviour of the Card component
                    type={rocket.name === "Starship" ? CardType.SPECIAL : CardType.NORMAL}
                    key={index} />
            ))}
        </StyledRocketListContainer>
    );
}

export default ProblemOCP;