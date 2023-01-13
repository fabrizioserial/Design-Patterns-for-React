import {StyledCardContainer, StyledDescription, StyledImage, StyledTitle} from "../../style/styledComponent";
import React from "react";

interface CardProps {
    items?: {
        title: string;
        image: string;
        description: string;
    }[]
}

export default function Card({items}:CardProps){
    return(
        <>
            {
                items?.map((item, index) => {
                    return(
                        <StyledCardContainer key={index}>
                            <StyledImage src={item.image} />
                            <StyledTitle>{item.title}</StyledTitle>
                            <StyledDescription>{item.description}</StyledDescription>
                        </StyledCardContainer>
                    )
                })
            }
        </>

    )
}