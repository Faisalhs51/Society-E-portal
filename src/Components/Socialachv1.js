import React from "react";
import {  MDBRow,  MDBCard, MDBCardBody,  MDBIcon} from "mdbreact";

import moinimg1 from '../Images/socialmoin1.jpeg'
import vrushimg1 from '../Images/socialvrush1.jpg'
import vrushimg2 from '../Images/socialvrush2.jpg'
import vrushimg3 from '../Images/socialvrush3.jpg'
import faisalimg1 from '../Images/socialfaisal1.jpg'
import saifimg1 from '../Images/socialsaif1.jpg'
import saifimg2 from '../Images/socialsaif2.jpeg'
import saifimg3 from '../Images/socialsaif3.jpg'





const Socialachv1 = () => {
  return (
      <div className="social11">
    <MDBCard
        className="my-5 px-5 pt-4"
        style={{ fontWeight: 300, maxWidth: 600 }}
      >
        <MDBCardBody className="py-0">
          <MDBRow>
              <br />
            <div className="mdb-feed">
              <div className="news">
                <div className="label">
                  <img
                    src={moinimg1}
                    alt=""
                    className="rounded-circle z-depth-1-half"
                  />
                </div>
                <div className="socialcomponentshift1">
                <div className="excerpt">
                  <div className="brief">
                    <a href="https://www.instagram.com/mac_moin.patil/" target="_blank" className="name">
                      Moin Patil
                    </a> joined your group
                    <div className="date">1 hour ago</div>
                  </div>
                  <div className="feed-footer">
                    <a href="#!" className="like">
                      <MDBIcon icon="heart" />
                      <span>5 likes</span>
                    </a>
                  </div>
                </div>
                </div>
              </div>
                <br />
              <div className="news">
                <div className="label">
                  <img
                    src={vrushimg1}
                    alt=""
                    className="rounded-circle z-depth-1-half"
                  />
                </div>
                <div className="socialcomponentshift1">
                <div className="excerpt">
                  <div className="brief">
                    <a href="https://www.instagram.com/_vrush_01/" target="_blank" className="name">
                      Vrushali Gupta
                    </a> added <a href="#!">2 new Photos</a>
                    <div className="date">4 hours ago</div>
                  </div>
                  <div className="added-images">
                    <img
                      src={vrushimg2}
                      alt=""
                      className="z-depth-1 rounded mb-md-0 mb-2"
                      width="150px"
                      id="socialmediaimg1"
                    />
                    <img
                      src={vrushimg3}
                      alt=""
                      className="z-depth-1 rounded"
                      width="150px"
                      id="socialmediaimg1"


                    />
                  </div>
                  <div className="feed-footer">
                    <a href="#!" className="like">
                      <MDBIcon icon="heart" />
                      <span>18 likes</span>
                    </a>
                  </div>
                </div>
                </div>

              </div>
                <br />
              <div className="news">
                <div className="label">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9)-mini.jpg"
                    alt=""
                    className="rounded-circle z-depth-1-half"
                  />
                </div>

                <div className="socialcomponentshift1">
                <div className="excerpt">
                  <div className="brief">
                    <a href="https://www.instagram.com/gulam_gaus_0046/" target="_blank" className="name">
                      Gulam Gaus
                    </a> liked your society page.
                    <div href="#!" className="date">
                      7 hours ago
                    </div>
                  </div>
                  <div className="feed-footer">
                    <a href="#!" className="like">
                      <MDBIcon icon="heart" />
                      <span>11 likes</span>
                    </a>
                  </div>
                </div>
                </div>

              </div>
                <br />
              <div className="news">
                <div className="label">
                  <img
                    src={faisalimg1}
                    alt=""
                    className="rounded-circle z-depth-1-half"
                  />
                </div>

                <div className="socialcomponentshift1">
                <div className="excerpt">
                  <div className="brief">
                    <a href="https://www.instagram.com/_.faisal_._/" target="_blank" className="name">
                      Faisal Husain
                    </a> commented on your picture
                    <div className="date">2 days ago</div>
                  </div>
                  <div className="added-text">
                  Here every year events are conducted which motivates children and builds up self confidence in them💪. Amazing initiative by Nanapatil Society 🏛️…what a member needs is fully fullfilled here 💞.
                  </div>
                  <div className="feed-footer">
                    <a href="#!" className="like">
                      <MDBIcon icon="heart" />
                      <span>7 likes</span>
                    </a>
                  </div>
                </div>
                </div>

              </div>
                <br />
              <div className="news">
                <div className="label">
                  <img
                    src={saifimg1}
                    alt=""
                    className="rounded-circle z-depth-1-half"
                  />
                </div>

                <div className="socialcomponentshift1">
                <div className="excerpt">
                  <div className="brief">
                    <a href="https://www.instagram.com/by_saifshaikh/" target="_blank" className="name">
                      Saif Shaikh
                    </a> added <a href="#!"> 2 new photos</a> of Society
                    <div className="date">3 days ago</div>
                  </div>
                  <div className="added-images">
                    <img
                      src={saifimg2}
                      alt=""
                      className="z-depth-1 rounded mb-md-0 mb-2"
                      width="150px"
                      id="socialmediaimg1"

                    />
                    <img
                      src={saifimg3}
                      alt=""
                      className="z-depth-1 rounded"
                      width="150px"
                      id="socialmediaimg1"

                    />
                  </div>
                  <div className="feed-footer">
                    <a href="#!" className="like">
                      <MDBIcon icon="heart" />
                      <span>53 likes</span>
                    </a>
                  </div>
                </div>
                </div>

              </div>
            </div>
            <br />
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      </div>
  );
}

export default Socialachv1;