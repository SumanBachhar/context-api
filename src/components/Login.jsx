import { useState } from "react";
import { useGlobalContext } from "../context/UserContextProvider";

const Login = () => {
  const { setUser } = useGlobalContext();

  const [username, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    setUser({ username, userPassword });
  };
  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const passwordHandler = (event) => {
    setUserPassword(event.target.value);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <h2>Login</h2>
        <input
          type="text"
          name="name"
          id="name"
          value={username}
          placeholder="Username"
          onChange={usernameHandler}
        />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          value={userPassword}
          placeholder="Password"
          onChange={passwordHandler}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
