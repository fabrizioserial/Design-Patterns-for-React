import React from "react";

interface CardProps {
    children?: JSX.Element[]
}

interface HeaderProps {
    title: string
}

interface ImageProps {
    src: string
    alt: string
}

interface BodyProps {
    content: string
}

const Card = ({children}:CardProps) => {
    return(
        <div>
            {children}
        </div>
    )
}

const Header = ({title}:HeaderProps) => {
    return(
        <h1>
            {title}
        </h1>
    )
}

const Image = ({src,alt}:ImageProps) => {
    return(
        <img src={src} alt={alt} />
    )
}

const Body = ({content}:BodyProps) => {
    return(
        <p>
            {content}
        </p>
    )
}
Card.Image = Image
Card.Header = Header
Card.Body = Body

export default Card