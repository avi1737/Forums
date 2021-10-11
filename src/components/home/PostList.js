import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetch_posts_error, fetch_posts_request, fetch_posts_success } from '../../actions/posts';
import { callFeeds } from '../../Graphs/Post/Feeds';
import Loader from '../common/Loader';
import Post from './Post'

function PostList() {

    const dispatch = useDispatch();
    const authToken = useSelector((state) => state.loginReducer.token);
    const posts = useSelector((state) => state.postsReducer.posts);
    const isLoading = useSelector((state) => state.postsReducer.isLoading);

    useEffect(() => {
        fetch_posts();
    },[]);

    async function fetch_posts(){
        try{
            dispatch(fetch_posts_request());
            const feedData = await callFeeds(authToken);
            dispatch(fetch_posts_success(feedData.data.posts));
        }
        catch(err){
            dispatch(fetch_posts_error(err));
        }
    }

    return (
        <div>
            {
                isLoading ?
                <>
                <Loader/>
                <Loader/>
                <Loader/>
                </>
                :
                posts.length > 0 && posts.map((post) => (
                    <Post data={post}/>
                ))
            }
        </div>
    )
}

export default PostList
