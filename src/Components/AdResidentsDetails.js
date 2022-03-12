//AdResidentsDetails.js

import React, { useState, useEffect } from "react";
import { MDBDataTableV5 } from "mdbreact";
import { Link } from "react-router-dom";
import { MDBBtn, MDBIcon } from "mdbreact";

export default function TopSearch() {
  const [row, setRow] = useState([{}]);

  const getresidents = async () => {
    const res = await fetch("/api/resident");
    let data = await res.json();
    let a = [];

    for (let j of data) {
      var { name, email, phone, wing, rNo, roomModel, maintenance } = j;
      a.push({
        wing,
        roomnumber: rNo,
        roomtype: roomModel + "-BHK",
        name,
        gmail: email,
        phonenumber: phone,
        totalmoney: maintenance,
      });
    }
    setRow(a);
  };

  useEffect(() => {
    getresidents();
  }, []);

  const data = {
    columns: [
      {
        label: "Wing",
        field: "wing",
        width: 50,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Wing",
        },
      },
      {
        label: "Room Number",
        field: "roomnumber",
        sort: "asc",
        width: 100,
      },
      {
        label: "Room-Type",
        field: "roomtype",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "roomtype",
        },
      },
      {
        label: "Name",
        field: "name",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
        },
      },

      {
        label: "Gmail-ID",
        field: "gmail",
        sort: "disabled",
        width: 270,
      },
      {
        label: "Phone-Number",
        field: "phonenumber",
        sort: "disabled",
        width: 100,
      },
      {
        label: "Total Maintainance 💰",
        field: "totalmoney",
        sort: "asc",
        width: 100,
      },
    ],
    rows: row,
  };

  const [datatable, setDatatable] = useState({
    columns: [
      {
        label: "Wing",
        field: "wing",
        width: 50,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Wing",
        },
      },
      {
        label: "Room Number",
        field: "roomnumber",
        sort: "asc",
        width: 100,
      },
      {
        label: "Room-Type",
        field: "roomtype",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "roomtype",
        },
      },
      {
        label: "Name",
        field: "name",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
        },
      },

      {
        label: "Gmail-ID",
        field: "gmail",
        sort: "disabled",
        width: 270,
      },
      {
        label: "Phone-Number",
        field: "phonenumber",
        sort: "disabled",
        width: 100,
      },
      {
        label: "Total Maintainance 💰",
        field: "totalmoney",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [
      {
        wing: "A",
        roomnumber: "101",
        roomtype: "1-BHK",
        name: "Moin Patil",
        gmail: "moin.6119019.it@mhssce.ac.it",
        phonenumber: "7066237587",
        totalmoney: "Rs : 1000",
      },
      {
        wing: "B",
        roomnumber: "101",
        roomtype: "2-BHK",
        name: "Faisal Hussain",
        gmail: "faisal.6119027.it@mhssce.ac.it",
        phonenumber: "7066237500",
        totalmoney: "Rs : 1500",
      },
      {
        wing: "A",
        roomnumber: "101",
        roomtype: "1-BHK",
        name: "Moin Patil",
        gmail: "moin.6119019.it@mhssce.ac.it",
        phonenumber: "7066237587",
        totalmoney: "Rs : 1000",
      },
      {
        wing: "B",
        roomnumber: "101",
        roomtype: "2-BHK",
        name: "Faisal Hussain",
        gmail: "faisal.6119027.it@mhssce.ac.it",
        phonenumber: "7066237500",
        totalmoney: "Rs : 1500",
      },
      {
        wing: "A",
        roomnumber: "101",
        roomtype: "1-BHK",
        name: "Moin Patil",
        gmail: "moin.6119019.it@mhssce.ac.it",
        phonenumber: "7066237587",
        totalmoney: "Rs : 1000",
      },
      {
        wing: "B",
        roomnumber: "101",
        roomtype: "2-BHK",
        name: "Faisal Hussain",
        gmail: "faisal.6119027.it@mhssce.ac.it",
        phonenumber: "7066237500",
        totalmoney: "Rs : 1500",
      },
      {
        wing: "A",
        roomnumber: "101",
        roomtype: "1-BHK",
        name: "Moin Patil",
        gmail: "moin.6119019.it@mhssce.ac.it",
        phonenumber: "7066237587",
        totalmoney: "Rs : 1000",
      },
      {
        wing: "B",
        roomnumber: "101",
        roomtype: "2-BHK",
        name: "Faisal Hussain",
        gmail: "faisal.6119027.it@mhssce.ac.it",
        phonenumber: "7066237500",
        totalmoney: "Rs : 1500",
      },
      {
        wing: "A",
        roomnumber: "101",
        roomtype: "1-BHK",
        name: "Moin Patil",
        gmail: "moin.6119019.it@mhssce.ac.it",
        phonenumber: "7066237587",
        totalmoney: "Rs : 1000",
      },
      {
        wing: "B",
        roomnumber: "101",
        roomtype: "2-BHK",
        name: "Faisal Hussain",
        gmail: "faisal.6119027.it@mhssce.ac.it",
        phonenumber: "7066237500",
        totalmoney: "Rs : 1500",
      },
      {
        wing: "A",
        roomnumber: "101",
        roomtype: "1-BHK",
        name: "Moin Patil",
        gmail: "moin.6119019.it@mhssce.ac.it",
        phonenumber: "7066237587",
        totalmoney: "Rs : 1000",
      },
      {
        wing: "B",
        roomnumber: "101",
        roomtype: "2-BHK",
        name: "Faisal Hussain",
        gmail: "faisal.6119027.it@mhssce.ac.it",
        phonenumber: "7066237500",
        totalmoney: "Rs : 1500",
      },
      {
        wing: "A",
        roomnumber: "101",
        roomtype: "1-BHK",
        name: "Moin Patil",
        gmail: "moin.6119019.it@mhssce.ac.it",
        phonenumber: "7066237587",
        totalmoney: "Rs : 1000",
      },
      {
        wing: "B",
        roomnumber: "101",
        roomtype: "2-BHK",
        name: "Faisal Hussain",
        gmail: "faisal.6119027.it@mhssce.ac.it",
        phonenumber: "7066237500",
        totalmoney: "Rs : 1500",
      },
      {
        wing: "A",
        roomnumber: "101",
        roomtype: "1-BHK",
        name: "Moin Patil",
        gmail: "moin.6119019.it@mhssce.ac.it",
        phonenumber: "7066237587",
        totalmoney: "Rs : 1000",
      },
      {
        wing: "B",
        roomnumber: "101",
        roomtype: "2-BHK",
        name: "Faisal Hussain",
        gmail: "faisal.6119027.it@mhssce.ac.it",
        phonenumber: "7066237500",
        totalmoney: "Rs : 1500",
      },
      {
        wing: "A",
        roomnumber: "101",
        roomtype: "1-BHK",
        name: "Moin Patil",
        gmail: "moin.6119019.it@mhssce.ac.it",
        phonenumber: "7066237587",
        totalmoney: "Rs : 1000",
      },
      {
        wing: "B",
        roomnumber: "101",
        roomtype: "2-BHK",
        name: "Faisal Hussain",
        gmail: "faisal.6119027.it@mhssce.ac.it",
        phonenumber: "7066237500",
        totalmoney: "Rs : 1500",
      },
      {
        wing: "A",
        roomnumber: "101",
        roomtype: "1-BHK",
        name: "Moin Patil",
        gmail: "moin.6119019.it@mhssce.ac.it",
        phonenumber: "7066237587",
        totalmoney: "Rs : 1000",
      },
      {
        wing: "B",
        roomnumber: "101",
        roomtype: "2-BHK",
        name: "Faisal Hussain",
        gmail: "faisal.6119027.it@mhssce.ac.it",
        phonenumber: "7066237500",
        totalmoney: "Rs : 1500",
      },
    ],
  });

  return (
    <>
      <div className="residentdetailtable">
      <h3 className="ntcbrd">Resident Records</h3>
        <MDBDataTableV5
          className="residentdetailtable2"
          hover
          entriesOptions={[5, 20, 25]}
          entries={5}
          pagesAmount={4}
          data={data}
          searchTop
          searchBottom={false}
        />
        <div className="adresbtn">
          <Link to="/form2/adminlogin/adminaddresident">
            <MDBBtn color="primary">
              <MDBIcon icon="plus-square" className="mr-1" /> Add Resident
            </MDBBtn>
          </Link>
        </div>
      </div>
    </>
  );
}
