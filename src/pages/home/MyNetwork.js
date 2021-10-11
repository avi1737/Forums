import React from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import { Route, useRouteMatch } from 'react-router';
import MyConnectionSummary from '../../components/home/MyConnectionSummary';


function MyNetwork() {

    const { url, path } = useRouteMatch()

    return (
        <Container className='mt-4'>
            <Row mt={5}>
                <Col lg = {1}></Col>
                <Col lg = {3} sm={12}>
                    <MyConnectionSummary urls = {url}/>
                </Col>
                <Col lg = {6} sm={12}>
                    <Route path = {`${path}/followers`}>
                        <h1>followers</h1>
                    </Route>
                    <Route path = {`${path}/followings`}>
                        <h1>followings</h1>
                    </Route>
                    <Route path = {`${path}/myConnections`}>
                        <h1>myConnections</h1>
                    </Route>
                    <Route path = {`${path}/followers`}>
                        <h1>followers</h1>
                    </Route>
                    <Route path = {`${path}/followers`}>
                        <h1>followers</h1>
                    </Route>
                </Col>
                <Col lg = {2}></Col>
            </Row>
        </Container>
    )
}

export default MyNetwork
