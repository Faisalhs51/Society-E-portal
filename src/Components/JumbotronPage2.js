import React from "react";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol,  MDBCardTitle, MDBCardImage, MDBCardBody} from "mdbreact";

const JumbotronPage2 = (props) => {
  return (
    <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="text-center">
            <MDBCardTitle className="card-title h2 pb-2">
              <strong>{props.title}</strong>
            </MDBCardTitle>
            <MDBCardImage
              src={props.imgg}
              className="img-fluid"
            />
            <MDBCardBody>
              <MDBCardTitle className="indigo-text h5 m-4">{props.desc}</MDBCardTitle>          
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default JumbotronPage2;