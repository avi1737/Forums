import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetch_comments_error, fetch_comments_request, fetch_comments_success} from '../../actions/posts';
import { callComments } from '../../Graphs/Post/Comments';
import Comment from './Comment';


const LoadMoreButton = styled.button`
   textDecoration : 'underline';
   color : 'dodgerblue';
   fontSize : '20px';
`;

function CommentList(props) {

    const dispatch = useDispatch();
    const { postId } = props;
    const [page, setPage] = useState(1);
    const authToken = useSelector((state) => state.loginReducer.token);
    const comments = useSelector((state) => state.commentReducer.comments);
    const isLoading = useSelector((state) => state.commentReducer.isLoading);

    useEffect(() => {
        async function fetch_comments(){
            try{
                dispatch(fetch_comments_request());
                const commentData = await callComments(authToken,postId,1);
                dispatch(fetch_comments_success(commentData.data));
            }
            catch(err){
                dispatch(fetch_comments_error(err));
            }
        }
       fetch_comments();
    },[dispatch,authToken,postId]);


    return (
        <div className='mt-4'>
            {
                isLoading ?
                <>
                Loading more comments...
                </>
                :
                <>
                {
                comments.length > 0 && comments.map((comment) => (
                    <Comment data={comment}/>
                ))
                }
                <LoadMoreButton onClick = {() => setPage(page+1)}>load more..</LoadMoreButton>
                </>
            }
        </div>
    )
}

export default CommentList
