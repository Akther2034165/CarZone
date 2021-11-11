import React, { useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import img from "../../../ass12/loginPic.jpg";
import useAuth from "../../../hooks/useAuth";
const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, isLoading, authError } = useAuth();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleOnSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password didnot match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    <Container>
      <Row>
        <Col xs={12} lg={6}>
          <div className="loginBg">
            <div className="main">
              <div className="center">
                <h1>Register</h1>
                {!isLoading && (
                  <form onSubmit={handleOnSubmit}>
                    <div className="form-field">
                      <input
                        type="text"
                        required
                        name="name"
                        onBlur={handleOnBlur}
                      />
                      <span></span>
                      <label htmlFor="">
                        <i className="fas fa-envelope"></i> Username
                      </label>
                    </div>
                    <div className="form-field">
                      <input
                        type="email"
                        required
                        name="email"
                        onBlur={handleOnBlur}
                      />
                      <span></span>
                      <label htmlFor="">
                        <i className="fas fa-envelope"></i> Email
                      </label>
                    </div>
                    <div className="form-field">
                      <input
                        type="password"
                        required
                        name="password"
                        onBlur={handleOnBlur}
                      />
                      <span></span>
                      <label htmlFor="">
                        <i className="fas fa-unlock"></i> Password
                      </label>
                    </div>
                    <div className="form-field">
                      <input
                        type="password"
                        required
                        name="password2"
                        onBlur={handleOnBlur}
                      />
                      <span></span>
                      <label htmlFor="">
                        <i className="fas fa-unlock"></i>Re-type Password
                      </label>
                    </div>

                    <input type="submit" value="Register" />

                    <div className="signup_link">
                      already an user? please <Link to="/login">Login</Link>
                    </div>
                  </form>
                )}
                {isLoading && (
                  <Spinner className="spinner" animation="border" />
                )}
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={6}>
          <img src={img} className="loginImg" alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
