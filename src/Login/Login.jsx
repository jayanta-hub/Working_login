import React, { useState } from "react";
import { Redirect } from "react-router";

const Login = () => {
  let [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  let [check, setCheck] = useState(true);
  let changeHandler = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  let submitHandler = (event) => {
    event.preventDefault();
    localStorage.setItem("username", ` ${user.username}`);
    // if (localStorage.getItem("username")) {
    //   <Redirect to="/contact" />
    //   console.log("njdskn")
    // }
  };
  let checkHandler = (event) => {
    if (event.target.checked) {
      setCheck(!check);
    } else {
      setCheck(true);
    }
  };
  return (
    <>
      <div className="main">
        <div className="login-box">
          <form onSubmit={submitHandler}>
            <div className="text-white" style={{ textAlign: "center" }}>
              <h1> Login </h1>
            </div>
            <br />
            <div className="mb-3">
              <label className="form-label">UserName</label>
              <input
                id="username"
                name="username"
                value={user.username}
                type="text"
                className="form-control"
                placeholder="Enter your username"
                autoComplete="off"
                required
                onChange={changeHandler}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                id="email"
                name="email"
                value={user.email}
                type="email"
                className="form-control"
                autoComplete="off"
                placeholder="Enter your Email"
                onChange={changeHandler}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                value={user.password}
                className="form-control"
                placeholder="Enter your Password"
                autoComplete="off"
                required
                onChange={changeHandler}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="checkbox"
                onChange={checkHandler}
              />
              <label className="form-check-label">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary" disabled={check}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
