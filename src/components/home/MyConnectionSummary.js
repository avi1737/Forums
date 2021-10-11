import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const SummaryContainer = styled.div`
    width : 100%;
    height : 250px;
    padding : 20px;
    margin : 12px;
    font-size : 13px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius : 8px;
    postion : sticky;
`;

const Tab = styled.div`
  font-size : 14px;
  font-weight : lighter;
  border-bottom : 0.5px solid #c1c1c1;
  padding : 10px 0px;
`;

function MyConnectionSummary(props) {
    return (
        <SummaryContainer>
            <Tab>My Connections</Tab>
            <Link to = {`${props.urls}/followers`}>
            <Tab>Followers</Tab>
            </Link>
            <Tab>Following</Tab>
            <Tab>Request Sent</Tab>
            <Tab>Connection Request</Tab>
        </SummaryContainer>
    )
}

export default MyConnectionSummary
