import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetch_comments_error, fetch_comments_request, fetch_comments_success} from '../../actions/posts';
import { callComments } from '../../Graphs/Post/Comments';
import Comment from './Comment';


const loadMoreButton = styled.p`
   textDecoration : 'underline';
   color : 'dodgerblue';
`;

function CommentList(props) {

    const dispatch = useDispatch();
    const { postId } = props;
    const [page, setPage] = useState(1);
    const authToken = useSelector((state) => state.loginReducer.token);
    const comments = useSelector((state) => state.commentReducer.comments);

    console.log("COmment in list", comments);
    const isLoading = useSelector((state) => state.commentReducer.isLoading);

    useEffect(() => {
        async function fetch_comments(){
            try{
                dispatch(fetch_comments_request());
                const commentData = await callComments(authToken,postId,page);
                dispatch(fetch_comments_success(commentData.data));
            }
            catch(err){
                dispatch(fetch_comments_error(err));
            }
        }
       fetch_comments();
    },[dispatch,page,authToken,postId]);


    return (
        <div>
            {
                isLoading ?
                <>
                <Spinner/>
                </>
                :
                <>
                {
                comments.length > 0 && comments.map((comment) => (
                    <Comment data={comment}/>
                ))
                }
                <loadMoreButton onClick = {() => setPage(page+1)}>load more..</loadMoreButton>
                </>
            }
        </div>
    )
}

export default CommentList
