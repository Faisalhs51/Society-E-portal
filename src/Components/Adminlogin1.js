import React, { useEffect } from "react";
import { MDBBtn } from "mdbreact";
import { useHistory } from "react-router-dom";
import AdNoticeTable from "./AdNoticeTable.js";
import AdComplaint from "./AdComplaint.js";
import AdResidentsDetails from "./AdResidentsDetails.js";
import WarrningEmail from "./WarrningEmail.js";

const Adminlogin1 = () => {
  const history = useHistory();
  const logout = () => {
    localStorage.setItem("token", "");
    history.push("/");
    document.getElementById("navDisplay").style.display = "flex";
  };

  useEffect(() => {
    document.getElementById("navDisplay").style.display = "none";
  }, []);

  return (
    <div>
      <div id="logoutbtn">
        {/* <Link to="/"> */}
        <MDBBtn color="primary" size="lg" onClick={logout}>
          Log Out
        </MDBBtn>
        {/* </Link> */}
      </div>
      <br />
      <AdNoticeTable />
      <br />
      <br />
      <AdComplaint />
      <br />
      <AdResidentsDetails />
      <br />
      <br />
      <WarrningEmail />
      <br />
    </div>
  );
};

export default Adminlogin1;
