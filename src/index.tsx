import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProblemSRP from "./solid/single-responsability-principle/problem";
import SolutionSRP from "./solid/single-responsability-principle/solution";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path={'/solid/single-responsibility-principle/problem'} element={<ProblemSRP/>}/>
              <Route path={'/solid/single-responsibility-principle/solution'} element={<SolutionSRP/>}/>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
