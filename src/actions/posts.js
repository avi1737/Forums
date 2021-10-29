import { ACTIVATE_POSTS } from "../constant/actionTypes";

export const fetch_posts_success = (payload) => {
    return {
      type: "FETCH_POSTS_SUCCESS",
      payload: payload,
    };
};

export const fetch_posts_request = () => {
    return {
      type: "FETCH_POSTS_REQUEST",
      payload: ''
    };
};

export const fetch_posts_error = (error) => {
    return {
      type: "FETCH_POSTS_ERROR",
      payload: error,
    };
};


export const fetch_comments_success = (payload) => {
  return {
    type: "FETCH_COMMENT_SUCCESS",
    payload: payload,
  };
};

export const fetch_comments_request = () => {
  return {
    type: "FETCH_COMMENT_REQUEST",
    payload: ''
  };
};

export const fetch_comments_error = (error) => {
  return {
    type: "FETCH_COMMENT_ERROR",
    payload: error,
  };
};

export const add_post = (post) => {
  return {
    type: "ADD_POST",
    payload : post
  }
}

export const delete_post = (id) => {
  return {
    type: "DELETE_POST",
    payload : parseInt(id)
  }
}

export const edit_post = (post) => {
  return {
    type: "EDIT_POST",
    payload : post
  }
}

export const like_post = (postId,userId) => {
  return {
    type: "LIKE_POST",
    payload : {
      postId,
      userId
    }
  }
}

export const dislike_post = (postId,userId) => {
  return {
    type: "DISLIKE_POST",
    payload : {
      postId,
      userId
    }
  }
}

export const active_posts = () => {
  return {
    type : ACTIVATE_POSTS,
    payload : {}
  }
}

