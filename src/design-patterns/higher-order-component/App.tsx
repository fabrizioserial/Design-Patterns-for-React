import {withModal} from "./HOC/withModal";
import {MODAL_TYPE} from "./utils/type";
import {openModal, useDispatch} from "./utils/utils";

const App = () => {

    const dispatch = useDispatch()

    const openModalByType = (type: MODAL_TYPE, content: string) => {
        // Here should set as true the open variable in the redux store
        dispatch(openModal({type, content}))
    }

    return(
        <div>
            <h1>Higher Order Component</h1>
            <button title={'Open Modal'} onClick={()=>openModalByType(MODAL_TYPE.ALERT, "")}/>
            <button title={'Open Modal'} onClick={()=>openModalByType(MODAL_TYPE.DEFAULT, "")}/>
            <button title={'Open Modal'} onClick={()=>openModalByType(MODAL_TYPE.CONFIRM, "")}/>
        </div>
    )
}

export default withModal(App)