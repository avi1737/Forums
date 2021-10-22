import React, { useState } from 'react'
import { Col, Container,Modal,Row } from 'react-bootstrap';
import styled from 'styled-components'
import { AiOutlineLike , AiOutlineComment, AiTwotoneLike, AiFillDelete} from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import CommentList from './CommentList';
import { useDispatch, useSelector } from 'react-redux';
import { callLikePost } from '../../Graphs/Post/LikePost';
import { toast } from 'react-toastify';
import { delete_post, dislike_post, edit_post, like_post } from '../../actions/posts';
import { callDislikePost } from '../../Graphs/Post/DislikePost';
import { useHistory } from 'react-router';
import { FaEdit } from 'react-icons/fa';
import { MdReportProblem } from 'react-icons/md';
import { callDeletePost } from '../../Graphs/Post/DeletePost';
import Button from 'react-bootstrap/Button';
import { AddPostInput } from './AddPost';
import { callEditPost } from '../../Graphs/Post/EditPost';
import { getTimeAgo } from '../../utils/authHelper';

const PostContainer = styled.div`
    width : 100%;
    height : auto;
    padding : 10px 0px;
    margin : 12px;
    font-size : 13px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-color : #fff;
    color : #000;
    border-radius : 8px;
`;

const PostContent = styled.div`
    width : 100%;
    height : auto;
    font-size : 14px;
    font-weight : 'bold';
    cursor : pointer;
`;

export const CreatorProfile = styled.div`
    width : 70px;
    height : 70px;
`;

const CreatorProfileUsername = styled.p`
    font-size : 14px;
    font-weight : 500;
    display : flex;
    flex-direction : column;
`;

export const ProfileImage = styled.img.attrs(props => ({
    src: props.url
  }))`
   width : 40px;
   height : 40px;
   border-radius : 50%;
`;

const DropDownList = styled.div`
   height : auto;
   background : #fff;
   border-radius : 10px;
   position : absolute;
   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
   padding : 8px;
`;

const DropDownUl = styled.ul`
   list-style : none;
`;

const DropDownLi  = styled.li`
   font-size : 14px;
   border-bottom : 1px solid #ccc;
   padding : 6px 0px;
   cursor : pointer;
`;

function Post(props) {

    const [isOpen, setOpen] = useState(false);
    const [listOpen , setListOpen] = useState(false);
    const {content,commentsCount,likesCount,id,userLikeList, User, created_date} = props.data;
    const history = useHistory();
    const dispatch = useDispatch();
    const authToken = useSelector((state) => state.loginReducer.token);
    const uId = useSelector((state) => state.loginReducer.user.id);
    const [previousContent , setContent] = useState('');
    const [buttonText , setButtonText] = useState('Save');

    const currentPath = window.location.pathname;

    //Edit Modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);

    function openComments(){
        if(isOpen){
            setOpen(false);
        }
        else{
            setOpen(true);
        }
    }

    function handleListOpen(){
        if(listOpen){
            setListOpen(false);
        }
        else{
            setListOpen(true);
        }
    }


    async function handleDelete(){
        try{
            const deletePostData = await callDeletePost(authToken,id);
            if(deletePostData.status === 200){
                setListOpen(false);
                toast.success(deletePostData.message);
                dispatch(delete_post(deletePostData.post));
            }
        }
        catch(err){
            toast.error(err);
        }
    }

    async function editCall(){
        try{
            setButtonText('Saving...');
            const editPostData = await callEditPost(authToken,id,previousContent);
            if(editPostData.status === 200){
                handleClose();
                setListOpen(false);
                dispatch(edit_post(editPostData.post));
                toast.success(editPostData.message);
            }
        }
        catch(err){
            toast.error(err);
        }
    }

    async function handleEdit(){
        setContent(content);
        handleShow();
    }

    

    return (
        <>
        <PostContainer>
            <Container>
            <Row>
              <Col lg = {1} sm = {2} xs={2}>  
              <CreatorProfile>
                  <ProfileImage url={User.profile_image}/>
              </CreatorProfile>
              </Col>

              <Col lg = {10} sm = {8} xs = {8}>
                  <CreatorProfileUsername>
                      <div>
                      { `${User.firstName} ${User.lastName}`}
                      </div>
                      <div>
                      { getTimeAgo(created_date) }
                      </div>
                  </CreatorProfileUsername>
              </Col>

              <Col lg = {1} sm = {2} xs = {2}>
              <BsThreeDotsVertical onClick = {handleListOpen}/>
              { listOpen 
                &&
                <DropDownList>
                    <DropDownUl>
                        {
                            uId === User.id
                            && 
                            <>
                            <DropDownLi onClick = {() => handleEdit()}>
                              <FaEdit/>
                               Edit Post
                              </DropDownLi>
                            <DropDownLi onClick = {handleDelete}>
                                <AiFillDelete/>
                                Delete Post
                            </DropDownLi>
                            </>
                        }
                        
                        <DropDownLi><MdReportProblem/>Report</DropDownLi>
                    </DropDownUl>
                </DropDownList>
              }
              </Col>
            </Row>

            <Row onClick = {() => history.push(`/post/${id}`)}>
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
                isOpen && (currentPath !== '/Feed')
                ? 
                <CommentList postId={id}/>
                : 
                ''
            }
            </Container>
        </PostContainer>

        {/* Edit Pop up */}

        <Modal show={show} onHide={handleClose}>

          <Modal.Header closeButton>
            <Modal.Title>Edit Post</Modal.Title>
          </Modal.Header>

          <Modal.Body>
          <AddPostInput 
            type="text" 
            onChange = {(e) => setContent(e.target.value)} 
            value = {previousContent}
            />
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={editCall}>
              {buttonText}
            </Button>
          </Modal.Footer>

        </Modal>

        </>
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
        <Col lg = {4} xs = {4} sm = {4} className="mt-4">

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

        <Col lg = {4} xs = {4} sm = {4} className="mt-4">
            { commentsCount }
            <AiOutlineComment
            onClick = {() => props.openComments()}
            style = {{fontSize : '24px', margin: '0px 30px', cursor:'pointer'}}
            />
        </Col>

        </Row>
        </>
    )
}



export default Post;




