import React, { useState } from 'react'
import { Col, Container,Row } from 'react-bootstrap';
import styled from 'styled-components'
import { AiOutlineLike , AiOutlineComment, AiOutlineShareAlt, AiTwotoneLike} from 'react-icons/ai';
import CommentList from './CommentList';
import { useDispatch, useSelector } from 'react-redux';
import { callLikePost } from '../../Graphs/Post/LikePost';
import { toast } from 'react-toastify';
import { dislike_post, like_post } from '../../actions/posts';
import { callDislikePost } from '../../Graphs/Post/DislikePost';

const PostContainer = styled.div`
    width : 100%;
    height : auto;
    padding : 10px 0px;
    margin : 12px;
    font-size : 13px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-color : #fff;
    color : #000;
`;

const PostContent = styled.div`
    width : 100%;
    height : auto;
    font-size : 14px;
    font-weight : 'bold';
`;

export const CreatorProfile = styled.div`
    width : 70px;
    height : 70px;
`;

const CreatorProfileUsername = styled.h5`
    font-size : 15px;
    font-weight : bold;
`;

export const ProfileImage = styled.img.attrs(props => ({
    src: props.url
  }))`
   width : 40px;
   height : 40px;
   border-radius : 50%;
`;

function Post(props) {

    const [isOpen, setOpen] = useState(false);
    const {content,commentsCount,likesCount,id,userLikeList} = props.data;

    function openComments(){
        if(isOpen){
            setOpen(false);
        }
        else{
            setOpen(true);
        }
    }

    return (
        <PostContainer>
            <Container>
            <Row>
              <Col lg = {1}>  
              <CreatorProfile>
                  <ProfileImage url='https://images.unsplash.com/photo-1608135751454-9f02b4ff8b6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80'/>
              </CreatorProfile>
              </Col>
              <Col lg = {10}><CreatorProfileUsername>Avinash.Varpeti</CreatorProfileUsername></Col>
              <Col lg = {1}>
                  <AiOutlineShareAlt/>
              </Col>
            </Row>

            <Row>
                <Col lg={12}>
                    <PostContent>
                     {content}
                    </PostContent>
                </Col>
            </Row>

            <Row>
                <LikeComment 
                postId = {id} 
                likesCount = {likesCount} 
                commentsCount = {commentsCount} 
                userLikeList = {userLikeList}
                openComments = {openComments}/>
            </Row>

            {
                isOpen ? <CommentList postId = {id}/>: ''
            }
            </Container>
        </PostContainer>
    )
}


//Like comment Component bar

export const LikeComment = (props) => {
    const {likesCount , commentsCount , postId, userLikeList} = props;
    const userId = useSelector((state) => state.loginReducer.user.id);
    const authToken = useSelector((state) => state.loginReducer.token);
    const dispatch = useDispatch();

    const likePost = async() => {
        try{
            const likeData = await callLikePost(authToken,postId,userId)
            if(likeData.message === 'Success'){
                toast.info('you liked this post');
                dispatch(like_post(postId,userId));
            }
        }
        catch(err){
            toast.info('There was a problem in liking the post');
        }
    }


    const dislikePost = async() => {
        try{
            const dislikeData = await callDislikePost(authToken,postId,userId)
            if(dislikeData.message === 'Success'){
                dispatch(dislike_post(postId,userId));
            }
        }
        catch(err){
            toast.info('There was a problem in liking the post');
        }
    }

    return(
        <>
        <Row>
        <Col lg = {4} xs = {4} className="mt-4">

            { likesCount }
            {
                userLikeList.includes(userId) ?
                <AiTwotoneLike
                 onClick = {dislikePost}
                 style = {{fontSize : '24px',margin: '0px 30px', cursor:'pointer'}}
                />
                :
                <AiOutlineLike
                 onClick = {likePost}
                 style = {{fontSize : '24px', margin: '0px 30px',cursor:'pointer'}}
                />
            }
        </Col>

        <Col lg = {4} xs = {4} className="mt-4">
            { commentsCount }
            <AiOutlineComment
            onClick = {() => props.openComments()}
            style = {{fontSize : '24px', margin: '0px 30px', cursor:'pointer'}}
            />
        </Col>

        <Col lg = {4} xs = {4} className="mt-4">
            <AiOutlineShareAlt
            style = {{fontSize : '24px', margin: '0px 30px', cursor:'pointer'}}
            />
        </Col>
        </Row>
        </>
    )
}



export default Post;




