import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';


const ProfileCard = styled.div`
   width : 100%;
   height : 350px;
   background : #fff;
   border-radius : 8px;
   position : relative;
   z-index : -100;
`;

const ProfileCardCover = styled.div`
   widht : 100%;
   height : 40%;
   background : #ccc;
   postion : relative;
`;

const ProfileCardInfo = styled.div`
   widht : 100%;
   height : 50%;
   padding : 10% 20px;
`;

const ProfilePicture = styled.img.attrs(props => ({
    src: props.url
  }))`
   position : absolute;
   width : 150px;
   height : 150px;
   background : red;
   border-radius : 50%;
   top : 25%;
   left : 40%;

   @media only screen and (max-width: 728px) {
    width : 120px;
    height : 120px;
    top : 30%;
    left : 36%;
  }
`;

const ProfilePicEdit = styled.div`
   width : 30px;
   height :30px;
   position : absolute;
   top: 55%;
   left : 50%;
   background : #ccc;
   border-radius : 50%;
   display : flex;
   justify-content : center;
   align-items : center;
`;

const ProfileTab = styled.div`
  display : flex;
  flex-direction : row;
  flex : 1fr 1fr 1fr 1fr;
  width : 100%;
  overflow-x : auto;
  height : 10%;
  padding : 0px 20px;
`;

const ProfileTabItem = styled.div`
   color : #c1c1c1;
   font-weight : 500;
   padding : 0px 20px;
`;


function ProfileTop() {

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [buttonText, setButtonText] = useState('Save');
    const { profile_image , firstName , lastName , email} = useSelector((state) => state.loginReducer.user);


    return (
        <>
        <ProfileCard>

            <ProfileCardCover/>

            <ProfilePicture url = {profile_image} onClick = {() => setShow(true)}>
            </ProfilePicture>

              <ProfilePicEdit>
                  <FaEdit/>
              </ProfilePicEdit>

            <ProfileCardInfo>
                <h5>{firstName} {lastName}</h5>
                <p>{ email }</p>
            </ProfileCardInfo>

            <ProfileTab>
                <ProfileTabItem>
                    My Posts
                </ProfileTabItem>
                <ProfileTabItem>
                    My Connections
                </ProfileTabItem>
                <ProfileTabItem>Followers</ProfileTabItem>
                <ProfileTabItem>Followings</ProfileTabItem>
            </ProfileTab>
        </ProfileCard>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Profile Picture</Modal.Title>
          </Modal.Header>

          <Modal.Body>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">
              {buttonText}
            </Button>
          </Modal.Footer>
        </Modal>
        </>
    )
}

export default ProfileTop
