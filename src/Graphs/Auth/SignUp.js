import firebase from "../../firebase";

export async function callSignup(email, password) {
  console.log("in about to call adminLogin", email, password);
  try {
    const responseData = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    return responseData;
  } catch (error) {
    throw error;
  }
}
