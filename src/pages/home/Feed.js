import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import PostList from '../../components/home/PostList';

function Feed() {

    useEffect(() => {
        document.title = "Feed"
    },[]);

    return (
        <Container className='mt-4'>
            <Row mt={5}>
                <Col lg = {1} xs = {0}></Col>
                <Col lg = {6} sm={10} xs= {11}>
                    <PostList/>
                </Col>
                <Col xs = {0}></Col>
            </Row>
        </Container>
    )
}

export default Feed;
