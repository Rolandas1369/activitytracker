import { useState, FunctionComponent } from "react";

import axios from "axios";

const baseURL = "http://activitytracker.xyz/api/";

const Login: FunctionComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const createToken = () => {
     axios
      .post(baseURL + "token/", { email: username, password: password })
      .then((res) => {
        const data = res.data as {access: string}
        const token  = data.access
       localStorage.setItem('access_token', token)
        console.log(res)
      }).catch((er) => console.log(er))
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
