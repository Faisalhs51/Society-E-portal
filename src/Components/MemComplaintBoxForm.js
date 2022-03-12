//MemComplaintBoxForm

import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

const MemComplaintBoxForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [complaintDesc, setComplaintDesc] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/complaint/createcomplaint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.token,
        },
        body: JSON.stringify({ name, email, complaintDesc }),
      });

      const json = await response.json();
      console.log(json);
      alert("Complaint submitted successfully");

      setName("");
      setEmail("");
      setComplaintDesc("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="memcomp2">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <div className="memComplaint">
              <form>
                <p className="h4 text-center mb-4">Complaint Box</p>
                <label
                  htmlFor="defaultFormRegisterNameEx"
                  className="grey-text"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="defaultFormRegisterNameEx"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterEmailEx"
                  className="grey-text"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="defaultFormRegisterEmailEx"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <label
                  htmlFor="defaultFormRegisterConfirmEx"
                  className="grey-text"
                >
                  Complaint
                </label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon">
                      <i className="fas fa-pencil-alt prefix"></i>
                    </span>
                  </div>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    value={complaintDesc}
                    onChange={(e) => setComplaintDesc(e.target.value)}
                  ></textarea>
                </div>
                <div className="text-center mt-4">
                  <MDBBtn color="primary" type="submit" onClick={submit}>
                    Submit
                  </MDBBtn>
                </div>
              </form>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default MemComplaintBoxForm;
