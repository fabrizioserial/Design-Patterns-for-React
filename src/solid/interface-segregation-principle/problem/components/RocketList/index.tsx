import React, { useEffect, useState } from "react";

import RocketCard from "../RocketCard";
import {Rocket} from "../../../common/types";
import {getRockets} from "../../../common/api";
import {StyledRocketListContainer} from "../../../common/styles";

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
