import { callGetApiToServer } from '../callApi';

export async function callComments(authToken,postId,page) {
  
  let headers = {
    'Content-Type' : 'application/json',
    Accept : 'application/json',
    Authorization : `Bearer ${authToken}`
  }

  try {
    const responseData = await callGetApiToServer(
      headers,
      "GET",
      `api/v1/posts/comments/${postId}?page=${page}&limit=3`
      );
    console.log(responseData);
    return responseData;
  } catch (error) {
    throw error;
  }
}
