import React, { useState } from "react";
import NavbarComponnent from "../../components/NavbarComponents";
import { FormFeedback, Alert } from "reactstrap";

export default class Login extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: {
        username: "",
        password: "",
      },
      alert: false
    };
  }
  handleChange = (event) => {
    this.setState({user: {...this.state.user, [event.target.name]: event.target.value}});
  };
  submitHandler = (event) => {
    event.preventDefault();
    if(this.state.user.username == false){
      this.setState({alert : !alert.value})
      console.log(this.state)
    }else {
      this.setState({alert : alert.true})
      console.log(this.state)
    }
  }

  render() {
    const { alert } = this.state;  
    return (
      <>
      <body>
        <NavbarComponnent />
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100 p-t-30 p-b-50">
              <span className="login100-form-title p-b-41">Account Login</span>
                <div className="err-form-alert">
                    { alert && <Alert color="danger"> Username / Password salah </Alert>} 
                </div>
              <form
                className="login100-form validate-form p-b-33 p-t-5"
                action={this.props.action}
                method={this.props.method}
                onSubmit={this.submitHandler}
              >
                <div className="wrap-input100 validate-input">
                  <input
                    invalid
                    className="input100"
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={this.handleChange.bind(this.user)}
                  />
                  <span className="focus-input100" data-placeholder="" />
                  <FormFeedback>
                    Oh noes! that name is already taken
                  </FormFeedback>
                </div>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Enter password"
                >
                  <input
                    className="input100"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleChange.bind(this.user)}
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
        </body>
      </>
    );
  }
}
