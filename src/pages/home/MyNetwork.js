import React from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import { Route, useRouteMatch } from 'react-router';
import MyConnectionSummary from '../../components/home/MyConnectionSummary';
import FollowersList from '../../components/Network/FollowersList';


function MyNetwork() {

    const { url, path } = useRouteMatch()

    return (
        <Container className='mt-4'>
            <Row mt={5}>
                <Col lg = {1}></Col>
                <Col lg = {3} sm={11} xs = {12}>
                    <MyConnectionSummary urls = {url}/>
                </Col>
                <Col lg = {6} sm={11} xs = {12}>
                    <Route path = {`${path}/followers`}>
                        <FollowersList/>
                    </Route>
                    <Route path = {`${path}/following`}>
                        <h1>followings</h1>
                    </Route>
                    <Route path = {`${path}/requestSent`}>
                        <h1>request Sent</h1>
                    </Route>
                    <Route path = {`${path}/connectionRequest`}>
                        <h1>connection Request</h1>
                    </Route>
                </Col>
            </Row>
        </Container>
    )
}

export default MyNetwork
