// AdNoticeTable.js

import React from "react";
import DatatablePage from "./DatatablePage";
import { MDBBtn, MDBIcon } from "mdbreact";
import { Link } from "react-router-dom";

const AdNoticeTable = () => {
  return (
    <div>
      <DatatablePage />
      <div className="addresdbtn">
        <Link to="/form2/adminlogin/adminaddnotice">
          <MDBBtn color="primary">
            <MDBIcon icon="plus-square" className="mr-1" /> Add Notice
          </MDBBtn>
        </Link>
      </div>
    </div>
  );
};

export default AdNoticeTable;
