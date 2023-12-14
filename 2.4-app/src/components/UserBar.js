import { useState } from "react";

function UserBar() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChangeCredentials = (e) => {
    setCredentials((prevCredentials) => {
      return {
        ...prevCredentials,
        // ES6 Computed Property Names
        // e.targ
        [e.target.name]: e.target.value,
      };
    });
  };

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // console.log("username", username);
  // console.log("password", password);
  // Task
  // Make these controlled inputs and manage them as state
  // on login, alert("Logged in!")

  // const handleNameChange = (e) => {

  //   // do validation - check length...
  //   setUsername(e.target.value);
  // }

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // }
  const handleLogin = (e) => {
    // Prevents the page from reloading (old default behaviour)
    // when page reloads, your states also get reloaded
    e.preventDefault();
    alert("Logged in");
  };

  return (
    <div
      style={{
        height: 60,
        backgroundColor: "#eee",
        margin: 10,
        borderRadius: 5,
        fontSize: 12,
      }}
    >
      <form onSubmit={handleLogin}>
        <label>Username</label>
        <input
          name="username"
          value={credentials.username}
          onChange={handleChangeCredentials}
        />
        <label>password</label>
        <input
          name="password"
          type="password"
          value={credentials.password}
          onChange={handleChangeCredentials}
        />
        <button style={{ width: 60, height: 30, fontSize: 12 }}>login</button>
      </form>
    </div>
  );
}

export default UserBar;
