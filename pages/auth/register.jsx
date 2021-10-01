import React from "react";
import NavbarComponnent from "../../components/NavbarComponents";
import { FormFeedback, Alert } from "reactstrap";

export default class Register extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: {
        name: "",
        username: "",
        password: "",
      },
      alert: false,
    };
  }
  handleChange = (event) => {
    this.setState({
      user: { ...this.state.user, [event.target.name]: event.target.value },
    });
  };
  submitHandler = (event) => {
    event.preventDefault();
    if (this.state.user.username == false) {
      this.setState({ alert: !alert.value });
      console.log(this.state);
    } else {
      this.setState({ alert: alert.true });
      console.log(this.state);
    }
  };
  render() {
    const { alert } = this.state;  
    return (
      <>
        <NavbarComponnent />
        <div className="limiter">
          <div className="container-login100">
            <div className="content-container">
              <div className="wrap-login100 p-t-30 p-b-50">
                <span className="login100-form-title p-b-41">Register</span>
                <div className="err-form-alert">
                    { alert && <Alert color="danger"> Please provide right information </Alert>} 
                </div>
                <form
                  onSubmit={this.submitHandler}
                  className="login100-form validate-form p-b-33 p-t-5"
                >
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Enter Name"
                  >
                    <input
                      className="input100"
                      type="text"
                      name="name"
                      placeholder="Name"
                      onChange={this.handleChange.bind(this.user)}
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
                      placeholder="Username"
                      onChange={this.handleChange.bind(this.user)}
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
        </div>
      </>
    );
  }
}
