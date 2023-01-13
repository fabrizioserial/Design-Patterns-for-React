import React from "react";

interface CardWrapperProps {
    ComponentToInject: React.FC<{title: string}>
}

const CardWrapper = ({ComponentToInject}:CardWrapperProps) => {
    return(
        <>
            <ComponentToInject title={"Hola"}/>
        </>
    )
}

export default CardWrapper