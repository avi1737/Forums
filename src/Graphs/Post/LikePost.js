import { callApiToServer } from '../callApi';

export async function callLikePost(authToken,postId,userId) {
  
  let body = JSON.stringify({
    postId : postId,
    userId : userId
  });

  let headers = {
    'Content-Type' : 'application/json',
    Accept : 'application/json',
    Authorization : `Bearer ${authToken}`
  }

  try {
    const responseData = await callApiToServer(
      body,
      headers,
      "POST",
      'api/v1/posts/like/create'
      );
    console.log(responseData);
    return responseData;
  } catch (error) {
    throw error;
  }
}
