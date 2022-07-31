import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

// Styled component definition
const StyledProblemSRP = styled.div`
  .title {
    font-size: 22px;
    color: black;
  }
  .list {
    padding: 10px 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-column-gap: 10px;

    .item {
      display: flex;
      flex-direction: column;
      border: 1px solid darkgrey;
      padding: 15px;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      .rocket-image {
        width: 300px;
        height: 300px;
        object-fit: cover;
      }
      .rocket-name {
        font-weight: bold;
        text-transform: uppercase;
      }
    }
  }
`;

// Rocket type definition

type Rocket = {
  height: Diameter;
  diameter: Diameter;
  mass: Mass;
  first_stage: FirstStage;
  second_stage: SecondStage;
  engines: Engines;
  landing_legs: LandingLegs;
  payload_weights: PayloadWeight[];
  flickr_images: string[];
  name: string;
  type: string;
  active: boolean;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: Date;
  country: string;
  company: string;
  wikipedia: string;
  description: string;
  id: string;
};

type Diameter = {
  meters: number | null;
  feet: number | null;
};

type Engines = {
  isp: ISP;
  thrust_sea_level: Thrust;
  thrust_vacuum: Thrust;
  number: number;
  type: string;
  version: string;
  layout: null | string;
  engine_loss_max: number | null;
  propellant_1: string;
  propellant_2: string;
  thrust_to_weight: number;
};

type ISP = {
  sea_level: number;
  vacuum: number;
};

type Thrust = {
  kN: number;
  lbf: number;
};

type FirstStage = {
  thrust_sea_level: Thrust;
  thrust_vacuum: Thrust;
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec: number | null;
};

type LandingLegs = {
  number: number;
  material: null | string;
};

type Mass = {
  kg: number;
  lb: number;
};

type PayloadWeight = {
  id: string;
  name: string;
  kg: number;
  lb: number;
};

type SecondStage = {
  thrust: Thrust;
  payloads: Payloads;
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec: number | null;
};

type Payloads = {
  composite_fairing: CompositeFairing;
  option_1: string;
};

type CompositeFairing = {
  height: Diameter;
  diameter: Diameter;
};

// Component that render the title, and the list.
const ProblemSRP = () => {
  const [rocketList, setRocketList] = useState<Rocket[]>();

  useEffect(() => {
    // Fetch the rocket list and set to the state
    (async () => {
      const { data } = await axios.get<Rocket[]>(
        "https://api.spacexdata.com/v4/rockets"
      );
      setRocketList(data);
    })();
  }, []);

  return (
    <StyledProblemSRP>
      <h1 className={"title"}>SpaceX Rockets</h1>
      <div className={"list"}>
        {rocketList?.map((rocket, index) => (
          <div className={"item"}>
            <img className={"rocket-image"} src={rocket.flickr_images[0]} />
            <p className={"rocket-name"}>{rocket.name}</p>
          </div>
        ))}
      </div>
    </StyledProblemSRP>
  );
};

/**
 * We can see that this component has the responsibility of get the rocket list, define the styled, support the list
 * and the title of the page. The SRP says that a class (in this case, component) should have only one reason to change.
 * When the requirements change, that change will be manifest through a change in responsibility amongst the
 * classes/components. If a class/component assumes more than one responsibility, then there will be more than one reason
 * for it to change.
 *
 */

export default ProblemSRP;
