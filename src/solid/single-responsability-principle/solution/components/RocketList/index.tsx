import React, { useEffect, useState } from "react";
import { StyledRocketListContainer } from "../../styles";
import { Rocket } from "../../types";
import { getRockets } from "../../api";
import RocketCard from "../RocketCard";

const RocketList = () => {
  const [rocketList, setRocketList] = useState<Rocket[]>([]);

  useEffect(() => {
    (async () => setRocketList(await getRockets()))();
  },[]);

  return (
    <StyledRocketListContainer>
      {rocketList?.map((rocket, index) => (
        <RocketCard rocket={rocket} key={index} />
      ))}
    </StyledRocketListContainer>
  );
};

export default RocketList;
