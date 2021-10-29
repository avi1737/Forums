import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const SummaryContainer = styled.div`
    width : 100%;
    height : auto;
    padding : 10px;
    font-size : 16px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius : 4px;
    position : sticky;
    background-color : #fff;
`;

const Tab = styled.p`
  font-size : 14px;
  font-weight : bold;
  cursor : pointer;
`;

function MyConnectionSummary(props) {
    return (
        <SummaryContainer>
            <Tab>My Network</Tab>

              <Link to = {`${props.urls}/followers`} style = {{ textDecoration : 'none'}}>
               <Tab>Followers</Tab>
              </Link>

              <Link to = {`${props.urls}/following`} style = {{ textDecoration : 'none'}}>
               <Tab>Following</Tab>
              </Link>

              <Link to = {`${props.urls}/requestSent`} style = {{ textDecoration : 'none'}}>
               <Tab>Request Sent</Tab>
              </Link>

              <Link to = {`${props.urls}/connectionRequest`} style = {{ textDecoration : 'none'}}>
               <Tab>Connection Request</Tab>
              </Link>
              
        </SummaryContainer>
    )
}

export default MyConnectionSummary
