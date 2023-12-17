import React, { useState } from "react";
import { Oval } from "react-loader-spinner";
import axios from "axios";

const Login = () => {
  const Token = "bro";
  const [disable, isdisable] = useState(false);
  const handleSubmit = (e) => {
    isdisable(true);
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());
    axios
      .post(
        "https://3000-varunsharma35-shoppulse-zuibb3dc6n6.ws-us107.gitpod.io/api/v1/login",
        {
          username: formJson.username,
          password: formJson.password,
        }
      )
      .then(
        function (response) {
          console.log(response);
          console.log(`logged In`);
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Token}`,
          },
        }
      )
      .catch(function (error) {
        console.log(`error ${error}`);
      })
      .finally(() => {
        isdisable(false);
      });
  };
  return (
    <div className="login">
      <form method="post" onSubmit={handleSubmit}>
        <h1 className="login-title">Login</h1>
        <div className="tile">
          <label htmlFor="username">Username </label>
          <input
            type="text"
            placeholder="Enter Your Username"
            name="username"
            id="username"
          />
        </div>
        <div className="tile">
          <label htmlFor="password">Password </label>
          <input
            type="password"
            placeholder="Enter Your Password"
            name="password"
            id="password"
          />
        </div>
        <button
          type="submit"
          id="submit"
          disabled={disable}
        >
          <Oval
            height={15}
            width={15}
            color="#FFFFFF"
            wrapperStyle={{}}
            wrapperClass="loader"
            visible={disable}
            ariaLabel="oval-loading"
            secondaryColor="#E0DFE1"
            strokeWidth={5}
            strokeWidthSecondary={5}
          />
          {disable ? "" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Login;
