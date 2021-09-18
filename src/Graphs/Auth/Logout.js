import firebase from "../../firebase";

export async function callLogout() {
  console.log("in about to call logout");
  try {
    const responseData = await firebase.auth().signOut();
    return responseData;
  } catch (error) {
    throw error;
  }
}
