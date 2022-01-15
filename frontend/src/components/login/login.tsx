import { useState, FunctionComponent } from "react";

import axios from "axios";

const baseURL = "http://activitytracker/api/";

const Login: FunctionComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const createToken = () => {
    // axios
    //   .post(baseURL + "token/", { email: username, password: password })
    //   .then((res) => {
    //     console.log(res.data.access);
    //     localStorage.setItem("access_token", res.data.access);
    //   });
  };

  return (
    <div>
      <form
        className="bg-red-500"
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          createToken();
        }}
      >
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Email"
          name="email"
          required
        ></input>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          name="pass"
          required
        ></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
