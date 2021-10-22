import { callApiToServer } from '../callApi';

export async function callEditPost(authToken,postId,content) {
  
  let body = JSON.stringify({
    content : content
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
      "PUT",
      `api/v1/posts/edit/${postId}`
      );
    console.log(responseData);
    return responseData;
  } catch (error) {
    throw error;
  }
}