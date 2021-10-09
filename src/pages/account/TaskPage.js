import React, { useEffect, useState } from "react";

const TaskPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  function fetchTask() {
    setLoading(true);
    fetch("http://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }

  function AddTask(){
      let user = {
          title : "New Added User",
          id : 902
      }
      setUsers([...users, user]);
  }

  function DeleteTask(id){
      let newUsers = users.filter((user) => user.id !== id);
      setUsers(newUsers);
  }

  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading..</h1>
      ) : (
        <div>
          <table>
          {users.map(user => (
           <tr key={user.id}>
             <td>{user.id}</td>  
             <td>{user.title}</td>
             <td><button onClick = {() => DeleteTask(user.id)}>Delete</button></td>
           </tr>
           ))}
          </table>
          <button onClick = {AddTask}>Add Task</button>
        </div>
      )}
    </>
  );
};

export default TaskPage;