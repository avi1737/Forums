import React from 'react'
import styled from 'styled-components';

const CommentContainer = styled.div`
    width : 100%;
    height : auto;
    padding : 8px 4px;
    margin : 12px;
    font-size : 13px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 4px 15px 0px;
    border-radius : 10px;
`;

function Comment(props) {

    const {content , created_date} = props.data;
    return (
        <CommentContainer>
            {content}
        </CommentContainer>
    )
}

export default Comment;
