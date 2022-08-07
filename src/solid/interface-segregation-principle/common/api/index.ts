import axios from "axios";
import {Rocket} from "../types";

export const getRockets = () => {
  return axios
    .get<Rocket[]>("https://api.spacexdata.com/v4/rockets")
    .then((response) => response.data);
};
