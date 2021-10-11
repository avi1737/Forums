
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


