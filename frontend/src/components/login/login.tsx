import { useState, FunctionComponent } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { config } from "../Constants";

const Login: FunctionComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [message, setMessage] = useState<null | string>(null);

  const createToken = () => {
    axios
      .post(config.url.API_URL + "token/", {
        email: username,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          setRedirect(true);
        }
        const data = res.data as { access: string };
        const token = data.access;
        localStorage.setItem("access_token", token);
        console.log(res);
      })
      .catch((er) => {
        const msg = er as { message: string };
        const mss = msg.message;
        setMessage(mss);
      });
  };

  return (
    <div className="flex mt-48 justify-center">
      {redirect ? <Redirect to="/homepage" /> : null}

      <form
        className="flex flex-col h-full w-48 bg-red-500"
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
      {message}
    </div>
  );
};

export default Login;
