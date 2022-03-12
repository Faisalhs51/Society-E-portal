import React from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";
import { MDBBtn } from "mdbreact";

const WarrningEmail = () => {

  const sendMail = async() =>{
    const response = await fetch('http://localhost:5000/api/maintenance/sendMail');
    console.log(response.json);
    alert("Message Sented Successfully!!!")
  }

  return (
    <div>
      <MDBJumbotron fluid>
        <MDBContainer>
          <h2 className="display-4">Remainder Email</h2>
          <p className="lead">
            Admin can send Remainder Email to Resident of the Society for
            Requesting them to pay the Maintainence as soon as possible.
          </p>
          <MDBBtn color="deep-purple" onClick={sendMail}>Send Email</MDBBtn>
        </MDBContainer>
      </MDBJumbotron>
    </div>
  );
};

export default WarrningEmail;
