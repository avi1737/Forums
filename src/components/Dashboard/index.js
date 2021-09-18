import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { callLogout } from "../../Graphs/Auth/Logout";

function Dashboard() {
  const dispatch = useDispatch();
  const history = useHistory();

  async function logout() {
    try {
      const response = await callLogout();
      dispatch({
        type: "CLEAR_AUTH",
      });
      history.push(`${process.env.PUBLIC_URL}/Login`);
    } catch (e) {}
  }

  return (
    <>
      <button onClick={logout}>Logout</button>
    </>
  );
}

export default Dashboard;
