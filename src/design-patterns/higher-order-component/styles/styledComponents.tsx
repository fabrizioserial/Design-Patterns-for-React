import styled from "styled-components";

export const StyledHOCContainer = styled.div`
  position: relative;
  display: flex;
  max-height: 100vh;
  .modal-container{
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    z-index: 20;
    align-items: center;
    justify-content: center;
  }
`

export const StyledModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(24,24,24,0.4);
  z-index: 10;
`