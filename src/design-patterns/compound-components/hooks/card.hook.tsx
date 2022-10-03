import {useContext} from "react";
import {CardContext, CardContextContextProps} from "../components/CardSecondVersion/CardSecondVersion";


const useCardContext = ():CardContextContextProps => {
    const context = useContext(CardContext)

    if(!context) {
        throw new Error ("Components is not rendered out of a Card Component")
    }

    return context
}

export default useCardContext