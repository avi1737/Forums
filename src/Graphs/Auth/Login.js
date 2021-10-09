import { callApiToServer } from '../callApi';

export async function callLogin(email, password) {
  
  let body = JSON.stringify({
    email : email,
    password : password
  });

  let headers = {
    'Content-Type' : 'application/json',
    Accept : 'application/json'
  }

  try {
    const responseData = await callApiToServer(
      body,
      headers,
      "POST",
      'api/v1/login'
      );
    console.log(responseData);
    return responseData;
  } catch (error) {
    throw error;
  }
}
