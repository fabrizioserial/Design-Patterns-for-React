import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProblemSRP from "./solid/single-responsability-principle/problem";
import SolutionSRP from "./solid/single-responsability-principle/solution";
import ProblemOCP from "./solid/open-closed-principle/problem";
import SolutionOCP from "./solid/open-closed-principle/solution";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              {/* Single Responsibility Principle */}
              <Route path={'/solid/single-responsibility-principle/problem'} element={<ProblemSRP/>}/>
              <Route path={'/solid/single-responsibility-principle/solution'} element={<SolutionSRP/>}/>
              {/* Open Closed Principle */}
              <Route path={'/solid/open-closed-principle/problem'} element={<ProblemOCP/>}/>
              <Route path={'/solid/open-closed-principle/solution'} element={<SolutionOCP/>}/>


          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
