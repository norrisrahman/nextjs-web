import React from "react";
import NavbarComponnent from "../../components/NavbarComponents";

export default function Login() {
  return (
    <>
      <NavbarComponnent />
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-t-30 p-b-50">
            <span className="login100-form-title p-b-41">Register</span>
            <form className="login100-form validate-form p-b-33 p-t-5">
              <div
                className="wrap-input100 validate-input"
                data-validate="Enter Name"
              >
                <input
                  className="input100"
                  type="text"
                  name="username"
                  placeholder="Name"
                />
                <span className="focus-input100" data-placeholder="" />
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Enter username"
              >
                <input
                  className="input100"
                  type="text"
                  name="username"
                  placeholder="User name"
                />
                <span className="focus-input100" data-placeholder="" />
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Enter password"
              >
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  placeholder="Password"
                />
                <span className="focus-input100" data-placeholder="" />
              </div>
              <div className="container-login100-form-btn m-t-32">
                <button className="login100-form-btn">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="dropDownSelect1" />
    </>
  );
}
