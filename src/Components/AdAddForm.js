// AdAddForm
import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { useHistory } from "react-router-dom";

const AdAddForm = () => {
  const history = useHistory();
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/notice/addnotice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.token,
        },
        body: JSON.stringify({ date, title, disc: description }),
      });

      const json = await response.json();
      console.log(json);
      alert("Submitted successfully");

      history.push("/form2/adminlogin");

      setDate("");
      setTitle("");
      setDescription("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <br />
      <br />
      <div className="memcomp2">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <div className="memComplaint">
                <form>
                  <p className="h4 text-center mb-4">
                    Add Notice to Notice Table
                  </p>
                  <label
                    htmlFor="defaultFormRegisterNameEx"
                    className="grey-text"
                  >
                    Enter Date
                  </label>
                  <input
                    type="text"
                    id="defaultFormRegisterNameEx"
                    className="form-control"
                    placeholder="Format: DD/MM/YYYY"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                  <br />
                  <label
                    htmlFor="defaultFormRegisterEmailEx"
                    className="grey-text"
                  >
                    Enter Notice Title
                  </label>
                  <input
                    type="text"
                    id="defaultFormRegisterEmailEx"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <br />
                  <label
                    htmlFor="defaultFormRegisterConfirmEx"
                    className="grey-text"
                  >
                    Notice Discription
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
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="text-center mt-4">
                    {/* <Link to="/form2/adminlogin"> */}
                    <MDBBtn color="primary" type="submit" onClick={submit}>
                      Submit
                    </MDBBtn>
                    {/* </Link> */}
                    <br />
                    <br />
                    <br />
                  </div>
                </form>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
};

export default AdAddForm;
