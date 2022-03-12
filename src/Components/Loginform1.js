import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import { Link, useHistory } from "react-router-dom";

const Loginform1 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const login = async (e) => {
    e.preventDefault();

    const response = await fetch("api/resident/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      history.push("/form/memberlogin");
    } else {
      alert("Invalid credentials");
    }
  };

  useEffect(() => {
    document.getElementById("navDisplay").style.display = "none";
  }, []);

  return (
    <>
      <br />
      <div className="memform">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <span>
                <form>
                  <h3 id="memlogtxt" className="text-center">
                    Member Login
                  </h3>
                  <div className="grey-text">
                    <MDBInput
                      className="form-control"
                      label="Type your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <MDBInput
                      className="form-control"
                      label="Type your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="text-center">
                    <Link to="/form/memberlogin">
                      <MDBBtn type="submit" onClick={login}>
                        Login
                      </MDBBtn>
                    </Link>
                  </div>
                  <br />
                  <h4 id="loglink" className="text-center">
                    For Admin Login, <Link to="/form2">Click Here</Link>
                  </h4>
                </form>
              </span>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <br />
      </div>
    </>
  );
};

export default Loginform1;
