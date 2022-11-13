import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import "./Login.css";

export const Login = () => {
  const [email, set] = useState("savage@sales.myauto.com");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    return fetch(`http://localhost:8088/users?email=${email}`)
      .then((response) => response.json())
      .then((foundUsers) => {
        if (foundUsers.length === 1) {
          const user = foundUsers[0];
          localStorage.setItem(
            "bro_user",
            JSON.stringify({
              id: user.id,
              sales: user.isSales,
            })
          );

          navigate("/");
        } else {
          window.alert("Invalid login");
        }
      });
  };

  return (
    <>
    <Container>
        <Row>
            <Col></Col>
            <Col xs={10}>
            
      <Container className="container--login">
        <Row>
          <Col xs={2}></Col>
          <Col xs={8} align="center">
            <form className="form--login" onSubmit={handleLogin}>
              <h1>Bro Where's That Car?</h1>
              <h2>Dealership Vechicle Locator</h2>
              <h3>Please Sign In</h3>
              <fieldset>
                <label htmlFor="inputEmail"> Email: </label>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => set(event.target.value)}
                  className="form-control"
                  placeholder="Email address"
                  required
                  autoFocus
                />
              </fieldset>
              <fieldset>
                <button type="submit">Sign in</button>
              </fieldset>
            </form>
          </Col>
          <Col xs={2}></Col>
        </Row>
        <Row className="link--register">
          <Col xs={3}></Col>
          <Col xs={6} align="center">
            <Link to="/register">Not a Bro yet?</Link>
          </Col>
          <Col xs={3}></Col>
        </Row>
      </Container>
      </Col>
      <Col>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col xs={8}>
            <div>
              <img
                className="confused-dude"
                src={require('../../assetts/clipart4601061.png')} 
              ></img>
            </div>
          </Col>
        </Row>
      </Col>
        </Row>
      </Container>
    </>
  );
};
