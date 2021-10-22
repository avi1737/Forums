import React from 'react'
import styled from 'styled-components';
import { CreatorProfile, ProfileImage } from './Post';
import { getTimeAgo } from '../../utils/authHelper';

const CommentFlex = styled.div`
    display : flex;
    flex-direction : row;
`;

const CommentContainer = styled.div`
    width : 70%;
    height : auto;
    padding : 8px 12px;
    margin : 12px auto;
    font-size : 13px;
    min-height : 60px;
    border-radius : 6px;
    color : black;
    background : #cecece;
    border-radius : 8px;
`;

function Comment(props) {

    const {content ,User, created_date} = props.data;
    return (
        <>
        <CommentFlex>
          <CreatorProfile>
                  <ProfileImage url={User.profile_image}/>
          </CreatorProfile>

            <CommentContainer>
              {content}
            </CommentContainer>

        </CommentFlex>
        { getTimeAgo(created_date) }
        </>
    )
}

export default Comment;
