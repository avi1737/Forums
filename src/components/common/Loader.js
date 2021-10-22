import React from "react"
import styled ,{keyframes} from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const CenterLoader = styled.div`
  width : 100%;
  height : 60vh;
  display : flex;
  justify-content : center;
  align-items : center;
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: 2px solid white;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
  border-left: 4px solid #c1c1c1;
  background: transparent;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Loader = (props) => (
  <Spinner>
  </Spinner>
)

export default Loader;