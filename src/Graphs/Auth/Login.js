import firebase from "../../firebase";

export async function callLogin(email, password) {
  console.log("in about to call adminLogin", email, password);
  try {
    const responseData = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    return responseData;
  } catch (error) {
    throw error;
  }
}
