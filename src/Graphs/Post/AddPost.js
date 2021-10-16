import { callApiToServer } from '../callApi';

export async function callAddPost(authToken,userId,content) {
  
  let body = JSON.stringify({
    author : userId,
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
      "POST",
      'api/v1/posts/create'
      );
    console.log(responseData);
    return responseData;
  } catch (error) {
    throw error;
  }
}