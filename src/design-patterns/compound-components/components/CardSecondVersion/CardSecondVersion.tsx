import React, {createContext, Dispatch, SetStateAction, useState} from "react";
import useCardContext from "../../hooks/card.hook";

export interface CardContextContextProps {
    selected: boolean,
    setSelected: Dispatch<SetStateAction<boolean>>,
}

export const CardContext = createContext<CardContextContextProps>({
    selected: false,
    setSelected: () => {}
});

interface CardProps {
    children?: JSX.Element[]
}
interface HeaderProps {
    title: string
}
interface BodyProps {
    content: string
}
interface ButtonProps {
    text: string
}
const CardSecondVersion = ({children}:CardProps) => {
    const [selected, setSelected] = useState<boolean>(false)
    return(
        <CardContext.Provider value={{selected,setSelected}}>
            {children}
        </CardContext.Provider>
    )
}

const Header = ({title}:HeaderProps) => {
    return(
        <h1>{title}</h1>
    )
}

const Body = ({content}:BodyProps) => {
    return(
        <p>{content}</p>
    )
}

const Button = ({text}:ButtonProps) => {
    const {setSelected,selected} = useCardContext()
    return(
        <button onClick={() => setSelected(!selected)}>
            {text}
        </button>
    )
}

CardSecondVersion.Header = Header
CardSecondVersion.Body = Body
CardSecondVersion.Button = Button

export default CardSecondVersion