import React, { useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import img from "../../../ass12/loginPic.jpg";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";
const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading } = useAuth();
  //redirect to private route
  const location = useLocation();
  const history = useHistory();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleOnSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  return (
    <Container>
      <Row>
        <Col xs={12} lg={6}>
          <div className="loginBg">
            <div className="main">
              <div className="center">
                <h1>Login</h1>
                {isLoading && (
                  <Spinner className="spinner" animation="border" />
                )}
                <form onSubmit={handleOnSubmit}>
                  <div className="form-field">
                    <input
                      type="email"
                      required
                      name="email"
                      onChange={handleOnChange}
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
                      onChange={handleOnChange}
                    />
                    <span></span>
                    <label htmlFor="">
                      <i className="fas fa-unlock"></i> Password
                    </label>
                  </div>
                  {/* <div className="pass">Forget Password?</div> */}
                  <input type="submit" value="Login" />

                  <div className="signup_link">
                    Not a member? <Link to="/register">Sign Up</Link>
                  </div>
                </form>
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

export default Login;
