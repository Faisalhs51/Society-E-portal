import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import { Link, useHistory } from "react-router-dom";

const Loginform2 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const login = async (e) => {
    e.preventDefault();

    const response = await fetch("api/admin/login", {
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
      history.push("/form2/adminlogin");
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
              <form className="memberform1">
                <h3 id="memlogtxt" className="text-center">
                  Admin Login
                </h3>
                <div className="grey-text">
                  <MDBInput
                    label="Type your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <MDBInput
                    label="Type your password"
                    icon="lock"
                    group
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    validate
                  />
                </div>
                <div className="text-center">
                  {/* <Link to="/form2/adminlogin"> */}
                  <MDBBtn onClick={login} type="submit">
                    Login
                  </MDBBtn>
                  {/* </Link> */}
                </div>
                <br />
                <h4 id="loglink" className="text-center">
                  For Member Login, <Link to="/form">Click Here</Link>
                </h4>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <br />
      </div>
    </>
  );
};

export default Loginform2;
