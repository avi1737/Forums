import { callGetApiToServer } from '../callApi';

export async function callProfile(authToken,userId) {
  
  let headers = {
    'Content-Type' : 'application/json',
    Accept : 'application/json',
    Authorization : `Bearer ${authToken}`
  }

  try {
    const responseData = await callGetApiToServer(
      headers,
      "GET",
      `api/v1/user/profile/${userId}`
      );
    console.log(responseData);
    return responseData;
  } catch (error) {
    throw error;
  }
}
