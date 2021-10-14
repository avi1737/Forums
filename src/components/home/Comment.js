import React from 'react'
import styled from 'styled-components';
import { CreatorProfile, ProfileImage } from './Post';

const CommentContainer = styled.div`
    width : 80%;
    height : auto;
    padding : 8px 12px;
    margin : 12px;
    font-size : 14px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 4px 15px 0px;
    border-radius : 10px;
    color : black;
    background : #fff;
    border-radius : 6px 10px 12px 12px;
`;

function Comment(props) {

    const {content } = props.data;
    return (
        <>
        <CreatorProfile>
                  <ProfileImage url='https://images.unsplash.com/photo-1608135751454-9f02b4ff8b6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80'/>
        </CreatorProfile>
        <CommentContainer>
            {content}
        </CommentContainer>
        </>
    )
}

export default Comment;
