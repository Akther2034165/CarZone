import React, { useState } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import img from "../../../ass12/loginPic.jpg";
import useAuth from "../../../hooks/useAuth";
import GoogleIcon from "@mui/icons-material/Google";
import "./Login.css";
const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { loginUser, isLoading, signInWithGoogle } = useAuth();
  //redirect to private route
  const location = useLocation();
  const history = useHistory();
  const handleOnBlur = (e) => {
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
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
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
                  {/* <div className="pass">Forget Password?</div> */}
                  <input type="submit" value="Login" />

                  <div className="signup_link">
                    NOT A MEMBER? PLEASE.
                    <Link to="/register" style={{ textDecoration: "none" }}>
                      REGISTER
                    </Link>
                  </div>
                </form>
                <Button onClick={handleGoogleSignIn} className="googleBtn">
                  <GoogleIcon /> Google sign in
                </Button>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={6}>
          <img
            src="https://i.ibb.co/tm9Vw0R/login.jpg"
            className="loginImg"
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
