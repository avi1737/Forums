import { callApiToServer } from '../callApi';

export async function callDeletePost(authToken,postId) {
  
  let body = JSON.stringify({
    
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
      "DELETE",
      `api/v1/posts/delete/${postId}`
      );
    console.log(responseData);
    return responseData;
  } catch (error) {
    throw error;
  }
}
