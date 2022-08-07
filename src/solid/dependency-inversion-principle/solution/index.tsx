import React from "react";
import {StyledRocketListContainer} from "../common/styles";
import RocketCard from "../common/components/RocketCard";
import useRockets from "./hooks/rockets.hook";

const SolutionDIP = () => {
    const {data: rockets, loading} = useRockets()

    return (
        <>
            {
                loading ?
                    <p>"Loading ...." </p>
                    :
                    <StyledRocketListContainer>
                        {rockets?.map((rocket, index) => (
                            <RocketCard rocket={rocket} key={index}/>
                        ))}
                    </StyledRocketListContainer>
            }
        </>

    );
}

export default SolutionDIP