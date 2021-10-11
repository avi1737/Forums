import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import PostList from '../../components/home/PostList';
import ProfileSummary from '../../components/home/ProfileSummary';

function Feed() {
    return (
        <Container className='mt-4'>
            <Row mt={5}>
                <Col lg = {1}></Col>
                <Col lg = {3} sm={12}>
                    <ProfileSummary/>
                </Col>
                <Col lg = {6} sm={12}>
                    <PostList/>
                </Col>
                <Col lg = {2}></Col>
            </Row>
        </Container>
    )
}

export default Feed;
