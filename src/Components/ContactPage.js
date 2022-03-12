import React, { useState } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBInput,
} from "mdbreact";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const addFeedback = async (e) => {
    e.preventDefault();
    const task = {
      name: name,
      email: email,
      subject: subject,
      description: description,
    };
    if (task.name.length > 0) {
      const response = await fetch("api/feedback/createFeed", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });

      const json = await response.json();
      console.log(json);
      alert("Submitted successfully.");
    }

    setName("");
    setEmail("");
    setSubject("");
    setDescription("");
  };

  return (
    <>
      <div className="ftrweb">
        <section id="footer1" className="my-5">
          <MDBRow>
            <MDBCol lg="5" className="lg-0 mb-4">
              <MDBCard>
                <MDBCardBody>
                  <div className="form-header blue accent-1">
                    <h3 className="mt-2">
                      <MDBIcon icon="envelope" /> Write to us:
                    </h3>
                  </div>
                  <p className="dark-grey-text">
                    We'll write rarely, but only the best content.
                  </p>
                  <div className="md-form">
                    <MDBInput
                      icon="user"
                      label="Your name"
                      iconClass="grey-text"
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      id="form-name"
                      required
                    />
                  </div>
                  <div className="md-form">
                    <MDBInput
                      icon="envelope"
                      label="Your email"
                      iconClass="grey-text"
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      id="form-email"
                      required
                    />
                  </div>
                  <div className="md-form">
                    <MDBInput
                      icon="tag"
                      label="Subject"
                      iconClass="grey-text"
                      type="text"
                      onChange={(e) => setSubject(e.target.value)}
                      value={subject}
                      id="form-subject"
                    />
                  </div>
                  <div className="md-form">
                    <MDBInput
                      icon="pencil-alt"
                      label="Discription"
                      iconClass="grey-text"
                      type="textarea"
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                      id="form-text"
                      required
                    />
                  </div>
                  <div className="text-center">
                    <MDBBtn onClick={addFeedback} color="light-blue">
                      Submit
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="7">
              <div
                id="map-container"
                className="rounded z-depth-1-half map-container"
                style={{ height: "400px" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.5361230376275!2d73.19268521473195!3d19.215452887008045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7939b26888d97%3A0x9fac3ef590177834!2sNana%20patil%20pride!5e0!3m2!1sen!2sin!4v1632376426324!5m2!1sen!2sin"
                  title="This is a unique title"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                />
              </div>
              <br />
              <MDBRow className="text-center">
                <MDBCol md="4">
                  <MDBBtn tag="a" floating color="blue" className="accent-1">
                    <MDBIcon icon="map-marker-alt" />
                  </MDBBtn>
                  <p>Ambernath,421501</p>
                  <p className="mb-md-0">Mumbai,India</p>
                </MDBCol>
                <MDBCol md="4">
                  <MDBBtn tag="a" floating color="blue" className="accent-1">
                    <MDBIcon icon="phone" />
                  </MDBBtn>
                  <p>+91 7066237587</p>
                  <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
                </MDBCol>
                <MDBCol md="4">
                  <MDBBtn tag="a" floating color="blue" className="accent-1">
                    <MDBIcon icon="envelope" />
                  </MDBBtn>
                  <p>nanaPatilPride@gmail.com</p>
                  <p className="mb-md-0">patilPride@gmail.com</p>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </section>
        <section className="copyrightfoot">
          <p style={{padding: "5px"}}>Copyright &copy; 2021 Team CodX</p>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
