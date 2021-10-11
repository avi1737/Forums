import React, { useState } from 'react'
import { Col, Container,Row } from 'react-bootstrap';
import styled from 'styled-components'
import { AiOutlineLike , AiOutlineComment, AiOutlineShareAlt} from 'react-icons/ai';
import CommentList from './CommentList';

const PostContainer = styled.div`
    width : 100%;
    height : auto;
    padding : 10px 0px;
    margin : 12px;
    font-size : 13px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius : 20px 10px 0px 20px;
`;

const PostContent = styled.div`
    width : 100%;
    height : auto;
    font-size : 13px;
`;

const CreatorProfile = styled.div`
    width : 70px;
    height : 70px;
`;

const CreatorProfileUsername = styled.h5`
    font-size : 15px;
    font-weight : bold;
`;

const ProfileImage = styled.img.attrs(props => ({
    src: props.url
  }))`
   width : 40px;
   height : 40px;
   border-radius : 50%;
`;

function Post(props) {

    const [isOpen, setOpen] = useState(false);
    const {content,commentsCount,likesCount,created_date,id} = props.data;

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
                <LikeComment likesCount = {likesCount} commentsCount = {commentsCount} openComments = {openComments}/>
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
    const {likesCount , commentsCount} = props;
    return(
        <>
        <Col lg = {12} className="mt-4">
            { likesCount }
            <AiOutlineLike
             style = {{fontSize : '24px', margin: '0px 30px', cursor:'pointer'}}
            />
            { commentsCount }
            <AiOutlineComment
            onClick = {() => props.openComments()}
            style = {{fontSize : '24px', margin: '0px 30px', cursor:'pointer'}}
            />
            <AiOutlineShareAlt
            style = {{fontSize : '24px', margin: '0px 30px', cursor:'pointer'}}
            />
        </Col>
        </>
    )
}



export default Post;




