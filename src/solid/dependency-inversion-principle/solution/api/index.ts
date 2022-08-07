import axios from "axios";
import { Rocket } from "../../common/types";

export const getRockets : () => Promise<Rocket[]> = () => {
  return axios
    .get<Rocket[]>("https://api.spacexdata.com/v4/rockets")
    .then((response) => response.data);
};
