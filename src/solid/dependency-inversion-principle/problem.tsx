import React, {useEffect, useState} from "react";
import {StyledRocketListContainer} from "./common/styles";
import axios from "axios";
import RocketCard from "./common/components/RocketCard";
import {Rocket} from "./common/types";

const ProblemDIP = () => {
    const [rocketList, setRocketList] = useState<Rocket[]>([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get<Rocket[]>(
                "https://api.spacexdata.com/v4/rockets"
            );
            setRocketList(data);
        })();
    },[]);

    return (
        <StyledRocketListContainer>
            {rocketList?.map((rocket, index) => (
                <RocketCard rocket={rocket} key={index} />
            ))}
        </StyledRocketListContainer>
    );
}

/**
 * Dependency Inversion Principle
 * This principle says that we have to have high-level code interface with an abstraction,
 * rather than an implementation detail.
 * In this example we can see that
 *
 */

export default ProblemDIP;