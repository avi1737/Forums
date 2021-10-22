import { callGetApiToServer } from '../callApi';

export async function callSinglePost(authToken,postId) {
  
  let headers = {
    'Content-Type' : 'application/json',
    Accept : 'application/json',
    Authorization : `Bearer ${authToken}`
  }

  try {
    const responseData = await callGetApiToServer(
      headers,
      "GET",
      `api/v1/posts/${postId}`
      );
    console.log(responseData);
    return responseData;
  } catch (error) {
    throw error;
  }
}
