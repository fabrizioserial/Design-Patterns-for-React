import React from "react";
import CardWrapper from "./components/CardWrapper";
import DummiesComponent from "./components/DummiesComponent";
const App =() => {

    return(
        <>
            <CardWrapper ComponentToInject={DummiesComponent}/>
        </>
    )
}
export default App