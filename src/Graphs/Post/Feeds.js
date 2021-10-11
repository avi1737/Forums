import { callGetApiToServer } from '../callApi';

export async function callFeeds(authToken) {
  
  let headers = {
    'Content-Type' : 'application/json',
    Accept : 'application/json',
    Authorization : `Bearer ${authToken}`
  }

  try {
    const responseData = await callGetApiToServer(
      headers,
      "GET",
      'api/v1/posts/feeds'
      );
    console.log(responseData);
    return responseData;
  } catch (error) {
    throw error;
  }
}
