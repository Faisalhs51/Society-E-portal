import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact";

const ComplaintCard = (props) => {
  return (
      <MDBCol md="4">
        <MDBCard
          className="card-image"
          style={{
            backgroundImage:
              "url('https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg')",
          }}
        >
          <div className="text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4 complaintCardBox">
            <div>
              <h5 className="orange-text">{props.email}</h5>
              <MDBCardTitle tag="h3" className="pt-2">
                <strong>{props.name}</strong>
              </MDBCardTitle>
              <p>
                {props.complaintDesc}
              </p>
              <MDBBtn color="deep-orange">
                <MDBIcon icon="trash-alt" /> Delete
              </MDBBtn>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
  );
};

export default ComplaintCard;
