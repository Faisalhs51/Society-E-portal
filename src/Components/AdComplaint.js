// AdComplaint.js
import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact";
const AdComplaint = () => {
  const [complaints, setComplaints] = useState([{}]);
  const getComplaints = async () => {
    const res = await fetch("/api/complaint/getcomplaints", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.token,
      },
    });
    let data = await res.json();
    setComplaints(data);
  };

  useEffect(() => {
    getComplaints();
  }, []);

  const deleteEvent = async (id) => {
    // console.log(e);
    if (window.confirm("Are you sure you want to delete this complaint? ")) {
      const response = await fetch("/api/complaint/deletecomplaint/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.token,
        },
      });
      const json = await response.json();
      console.log(json);
      getComplaints();
      alert("Complaint deleted...");
    } else return;
  };

  return (
    <>
      <h1 className="ntcbrd">Complaints</h1>
      <MDBRow>
        {complaints.map((c) => {
          const { name, email, complaintDesc } = c;
          const key = c._id;
          return (
            <>
              <MDBCol md="4">
                <MDBCard
                  className="card-image"
                  style={{
                    backgroundImage:
                      "url('https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg')",
                    margin: "15px",
                  }}
                >
                  <div className="text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4 complaintCardBox">
                    <div>
                      <h5 className="orange-text">{email}</h5>
                      <MDBCardTitle tag="h3" className="pt-2">
                        <strong>{name}</strong>
                      </MDBCardTitle>
                      <p>{complaintDesc}</p>
                      <MDBBtn
                        color="deep-orange"
                        key={key}
                        onClick={() => {
                          deleteEvent(key);
                        }}
                      >
                        <MDBIcon icon="trash-alt" /> Delete
                      </MDBBtn>
                    </div>
                  </div>
                </MDBCard>
              </MDBCol>
            </>
          );
        })}
      </MDBRow>
    </>
  );
};

export default AdComplaint;
