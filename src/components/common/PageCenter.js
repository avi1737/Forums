import React from 'react'
import styled from "styled-components";

const CenterDiv = styled.div`
    display : flex ;
    justify-content : center ;
    align-items : center;
    width: 100%;
    flex-direction : column;
    height: 100vh;
    background-color: #3a539b;
`;

export default function PageCenter(props) {
    const Component = props.child;

    return (
       <CenterDiv>
           <Component/>
       </CenterDiv>
    )
}
