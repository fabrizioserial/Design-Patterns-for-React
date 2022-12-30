import {FC, useState} from 'react'
import {StyledHOCContainer, StyledModalContainer} from "../styles/styledComponents";
import {MODAL_TYPE} from "../utils/type";
import DummiesComponent from "../components/DummiesComponent";
import {useDispatch} from "../utils/utils";

export const withModal = (WrappedComponent: FC) => (props: any) => {
    // This function is a mocking of the redux store, we should change it for the real one
    const open = function () {
        return true
    }() // -> the last parenthesis is to call the function, and use "open" as a variable which is what we get from the redux store

    // This variable is a mocking of the redux store, we should change it for the real one
    let type = function () {
        return MODAL_TYPE.ALERT
    }() // -> the last parenthesis is to call the function, and use "open" as a variable which is what we get from the redux store

    // Same here
    const dispatch = useDispatch()

    const handleOnClose = () => {
        dispatch(function closeModal() {
        });
    };

    const renderModal = () => {
        switch (type) {
            case MODAL_TYPE.ALERT:
                return <DummiesComponent onClose={handleOnClose}/>;
            case MODAL_TYPE.CONFIRM:
                return <DummiesComponent onClose={handleOnClose}/>;
            case MODAL_TYPE.DEFAULT:
                return <DummiesComponent onClose={handleOnClose}/>;
        }
    };

    const ModalContainer = () => {
        return (
            <div className={'modal-container'}>
                <StyledModalContainer/>
                {renderModal()}
            </div>
        );
    };

    return (
        <StyledHOCContainer>
            <WrappedComponent {...props} />
            {open && ModalContainer()}
        </StyledHOCContainer>
    )
}