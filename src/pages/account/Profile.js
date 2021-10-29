import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetch_posts_error, fetch_posts_request, fetch_posts_success } from '../../actions/posts';
import ProfileTop from '../../components/account/ProfileTop';
import Loader, { CenterLoader } from '../../components/common/Loader';
import Post from '../../components/home/Post';
import { callProfile } from '../../Graphs/Profile/GetProfileInfo';

function ProfilePage() {

    const dispatch = useDispatch();
    const authToken = useSelector((state) => state.loginReducer.token);
    const {id} = useSelector((state) => state.loginReducer.user);
    const posts = useSelector((state) => state.postsReducer.posts);
    const isLoading = useSelector((state) => state.postsReducer.isLoading);
    const activeTab = useSelector((state) => state.profileTabReducer.activeTab);

    useEffect(() => {
        async function getProfileData(){
            try{
                dispatch(fetch_posts_request());
                const profileData = await callProfile(authToken,id);
                dispatch(fetch_posts_success(profileData.data.recentPosts));
            }
            catch(err){
                dispatch(fetch_posts_error(err));
            }
        }

        getProfileData();
    },[dispatch,authToken,id]);

    return (
        <Container className='mt-4'>
            <Row>
                <Col lg = {9} xs = {12} sm = {11}>
                    <ProfileTop/>
                </Col>
            </Row>

            { 
              activeTab === "CONNECTIONS" 
              &&
              <h1>Connections</h1>
            }

            {
                activeTab === "POSTS" 
                &&
                <Row>
                <Col lg = {8} xs = {11} sm = {11}>
                {
                isLoading ?
                <>
                  <CenterLoader>
                    <Loader/>
                  </CenterLoader>
                </>
                :
                posts.length > 0 && posts.map((post) => (
                    <Post data={post}/>
                ))
            }
                </Col>
            </Row>
            }
            
        </Container>
    )
}

export default ProfilePage;