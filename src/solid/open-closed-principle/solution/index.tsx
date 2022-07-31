import React, {useEffect, useState} from "react";
import {Rocket} from "../common/types";
import {getRockets} from "../common/api";
import {StyledRocketListContainer} from "../common/styles";
import RocketCard from "./components/RocketCard";

const SolutionOCP = () => {
    const [rocketList, setRocketList] = useState<Rocket[]>([]);

    useEffect(() => {
        (async () => setRocketList(await getRockets()))();
    },[]);

    return (
        <StyledRocketListContainer>
            {rocketList?.map((rocket, index) => (
                <RocketCard
                    rocket={rocket}
                    key={index} />
            ))}
        </StyledRocketListContainer>
    );
}

export default SolutionOCP