import { callApiToServer } from "../callApi";

export async function callSignup(email, password , firstName , lastName) {
  let body = JSON.stringify({
    email : email,
    password : password,
    firstName : firstName,
    lastName : lastName
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
      'api/v1/register'
      );
    console.log(responseData);
    return responseData;
  } catch (error) {
    throw error;
  }
}
