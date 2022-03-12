import React from "react";
import { MDBContainer, MDBRow, MDBCol,MDBCard,  MDBIcon } from "mdbreact";

import team1 from '../Images/teamtreasurer1.jpg'
import team2 from '../Images/teamsec2.jpg'
import team3 from '../Images/teamas2.jpg'


const Testimonial2 = () => {
  return (
    <MDBContainer>
      <section className="team-section text-center my-5">
          <h2 className="h1-responsive font-weight-bold my-5">
            Our Pillars
          </h2>
          <p className="dark-grey-text w-responsive mx-auto mb-5">
          These are the pillars of our society. They are the one to introduce new ideas, collect feedback and to organize the meetings. They do a lot of hard work for the Improvement of the society and to ease the work of the Members of the society
          </p>

          <MDBRow className="text-center">
            <MDBCol md="4" className="mb-md-0 mb-5">
              <MDBContainer>
                <MDBCard className="mx-auto">
                  <img
                    src={team1}
                    alt=""
                    className="rounded-circle z-depth-1 img-fluid"
                  />
                </MDBCard>
                <h4 className="font-weight-bold dark-grey-text mt-4">
                	Treasurer
                </h4>
                <h6 className="font-weight-bold blue-text my-3">
                Dr. Gaus Gulam Shaikh
                </h6>
                <p className="font-weight-normal dark-grey-text">
                  <MDBIcon className="fa fa-quote-left pr-2" />
                  A treasurer is the elected office bearer of a housing society who is responsible for financial and legal compliances, assets, and liabilities and whose primary job is accurate management and oversight of a society's financial transactions/undertakings.
                </p>
                <div className="orange-text">
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon far icon="star-half" />
                </div>
              </MDBContainer>
            </MDBCol>
            <MDBCol md="4" className="mb-md-0 mb-5">
              <MDBContainer>
                <MDBCard className="mx-auto">
                  <img
                    src={team2}
                    alt=""
                    className="rounded-circle z-depth-1 img-fluid"
                  />
                </MDBCard>
                <h4 className="font-weight-bold dark-grey-text mt-4">
                  Secretary and Chairman 
                </h4>
                <h6 className="font-weight-bold blue-text my-3">
                  Dr. Ramakant Mishra
                </h6>
                <p className="font-weight-normal dark-grey-text">
                  <MDBIcon className="fa fa-quote-left pr-2" />
                  The Secretary must issue notices and agenda of all meetings of the general body and the committee. He must issue a letter of allotment of flats, prepare and issue demand notices/bills for payment to the Society's charges, issue a notice of repairs to be carried out in flats.
                </p>
                <div className="orange-text">
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                </div>
              </MDBContainer>
            </MDBCol>
            <MDBCol md="4">
              <MDBContainer>
                <MDBCard className="mx-auto">
                  <img
                    src={team3}
                    alt=""
                    className="rounded-circle z-depth-1 img-fluid"
                  />
                </MDBCard>
                <h4 className="font-weight-bold dark-grey-text mt-4">
                Assistant Secretary
                </h4>
                <h6 className="font-weight-bold blue-text my-3">
                Dr. G.A. Mittal
                </h6>
                <p className="font-weight-normal dark-grey-text">
                  <MDBIcon className="fa fa-quote-left pr-2" />
                  An assistant secretary is responsible for performing administrative and clerical duties to support the daily operations of various departments and management personnel and ensure the efficiency of business functions.Proofread, edit & type legal briefs, business letters, case notes.
                </p>
                <div className="orange-text">
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon icon="star" />
                  <MDBIcon far icon="star" />
                </div>
              </MDBContainer>
            </MDBCol>
          </MDBRow>
        </section>
    </MDBContainer>
  );
}

export default Testimonial2;