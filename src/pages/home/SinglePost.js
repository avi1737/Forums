import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetch_posts_success } from '../../actions/posts';
import Loader from '../../components/common/Loader';
import Post from '../../components/home/Post';
import { callSinglePost } from '../../Graphs/Post/GetSinglePost';

function SinglePost(props) {

    const [isLoading , setLoading] = useState(true);
    const authToken = useSelector((state) => state.loginReducer.token);
    const postId = props.match.params.id;
    const posts = useSelector((state) => state.postsReducer.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = `Post-${postId}`;

        async function getPost(){
            try{
                setLoading(true);
                const uniquePostData = await callSinglePost(authToken,postId);
                if(uniquePostData.message === 'Success'){
                    dispatch(fetch_posts_success([uniquePostData.data.post]));
                }
                setLoading(false);
            }
            catch(err){
                setLoading(false);
            }
        }

        getPost();
    },[dispatch,postId,authToken]);

    return (
        <Container className='mt-4'>
            <Row mt={5}>
                <Col lg = {1} xs = {0}></Col>
                <Col lg = {7} sm={12} xs= {11}>
                    {
                        isLoading ?
                        <Loader/>
                        :
                        posts.length > 0 && posts.map((post) => (
                            <Post data={post}/>
                        ))
                    }
                </Col>
                <Col xs = {0}></Col>
            </Row>
        </Container>
    )
}

export default SinglePost;
