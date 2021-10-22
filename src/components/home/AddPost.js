import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { callAddPost } from '../../Graphs/Post/AddPost';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { add_post } from '../../actions/posts';


const AddPostContainer = styled.div`
    width : 98%;
    margin : 0px auto;
    height : 100px;
    border-radius : 4px;
    background : #fff;
    padding : 10px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

export const AddPostInput = styled.textarea`
    width : 100%;
    height : 60px;
    border : 1px solid #c1c1c1;
    border-radius : 10px;
    padding : 6px 10px;
    cursor : pointer;
    outline : 0;
    min-height : 120px;
    color : black;
`;

const AddPostInputDisbaled = styled.textarea.attrs(props => ({
    placeholder : 'Create A Post'
  }))`
    width : 100%;
    height : 60px;
    border : 1px solid #c1c1c1;
    border-radius : 30px;
    background-color : #fff;
    padding : 6px 10px;
    cursor : pointer;
    max-height : 60px;
    min-height : 60px;
    font-size : 22px;
    font-weight : 600;

    @media only screen and (max-width: 600px) {
        font-size : 14px;
        padding : 10px 15px;
      }
`;


function ModalClickComponent(){
    return (
        <>
        <AddPostContainer>
            <AddPostInputDisbaled disabled/>
        </AddPostContainer>
        </>
    )
}

function AddPost() {

    const dispatch = useDispatch();
    const authToken = useSelector((state) => state.loginReducer.token);
    const userId = useSelector((state) => state.loginReducer.user.id);
    const [content , setContent] = useState('');
    const [buttonText , setButtonText] = useState('Post');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleAddPost = async() => {
        try{
            setButtonText('Posting...');
            const addPostData = await callAddPost(authToken,userId,content);
            if(addPostData.status === 200){
                handleClose();
                toast.success('Posted Successfully');
                console.log(addPostData);
                dispatch(add_post(addPostData.post));
                setButtonText('Post');
            }
        }
        catch(err){
            toast.error('There was a problem Adding Post!');
            setButtonText('Post');
        }
    }

    return (
        <div className = "mt-4">
            <div onClick={handleShow}>
          <ModalClickComponent/>
        </div>
  
        <Modal show={show} onHide={handleClose}>

          <Modal.Header closeButton>
            <Modal.Title>Create a post</Modal.Title>
          </Modal.Header>

          <Modal.Body>
          <AddPostInput type="text" onChange = {(e) => setContent(e.target.value)}/>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAddPost}>
              {buttonText}
            </Button>
          </Modal.Footer>

        </Modal>
        </div>
    )
}


export default AddPost;
