//AdResidentForm.js

import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
import { useHistory } from "react-router-dom";

const AdResidentForm = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [wing, setWing] = useState("");
  const [rNo, setRNo] = useState();
  // const [roomModel, setRoomModel] = useState('');
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    let roomModel = document.getElementById("roomType").value;
  
    try {
      const response = await fetch("/api/resident/addmember", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.token,
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          wing,
          rNo,
          roomModel,
          password,
        }),
      });

      const json = await response.json();
      console.log(json);
      alert("Submitted successfully.");

      history.push("/form2/adminlogin");

      setName("");
      setEmail("");
      setPhone();
      setWing("");
      setRNo();
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <br />
          <div className="addresidentform">
            <form>
              <p className="h4 text-center py-4">Resident Details</p>
              <label htmlFor="wing" className="grey-text font-weight-light">
                Enter Wing
              </label>
              <input
                type="text"
                id="wing"
                className="form-control"
                required
                value={wing}
                onChange={(e) => setWing(e.target.value)}
              />
              <br />
              <label htmlFor="rNo" className="grey-text font-weight-light">
                Enter Room Number
              </label>
              <input
                type="number"
                id="rNo"
                className="form-control"
                required
                value={rNo}
                onChange={(e) => setRNo(e.target.value)}
              />
              <br />
              <label htmlFor="roomtype" className="grey-text font-weight-light">
                Enter Room Type
              </label>
              <select className="browser-default custom-select" id="roomType">
                <option>Select the room type</option>
                <option value="1">1-BHK</option>
                <option value="2">2-BHK</option>
                <option value="3">3-BHK</option>
              </select>
              <br />
              <br />
              <label htmlFor="name" className="grey-text font-weight-light">
                Enter Resident Full-Name
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <label htmlFor="email" className="grey-text font-weight-light">
                Enter Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <label htmlFor="phone" className="grey-text font-weight-light">
                Enter Phone Number
              </label>
              <input
                type="number"
                id="phone"
                className="form-control"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <br />
              <label htmlFor="password" className="grey-text font-weight-light">
                Enter PasswordNumber
              </label>
              <input
                type="text"
                id="password"
                className="form-control"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <div className="text-center py-4 mt-3">
                <MDBBtn
                  className="btn btn-outline-purple"
                  type="submit"
                  onClick={submit}
                >
                  SUBMIT
                  <MDBIcon far icon="paper-plane" className="ml-2" />
                </MDBBtn>
              </div>
            </form>
          </div>
          <br />
          <br />
          <br />
          <br />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AdResidentForm;
