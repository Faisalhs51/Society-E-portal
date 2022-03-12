//MemVocational

import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardGroup,
  MDBCardImage,
  MDBCardText,
  MDBCardBody,
} from "mdbreact";
import AC_fitter from "../Images/AC_fitter.jpeg";
import carpenter from "../Images/Carpenter.jpeg";
import Electrician from "../Images/Electrician.jpeg";
import Electronic from "../Images/Electronic_technician.jpeg";
import Plumber from "../Images/Plumber.jpeg";
import Welder from "../Images/welder.jpeg";

const MemVocational = () => {
  return (
    <>
    <h1 className="ntcbrd">Vocational Trusted Contacts</h1>
      <div className="vocational">
        <MDBCardGroup>
          <MDBCard className="vocational">
            <MDBCardImage
              src={AC_fitter}
              alt="MDBCard image cap"
              width="370px"
              height="247px"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">Air condition fitters</MDBCardTitle>
              <MDBCardText>
                Air conditioning (AC) technicians work with cooling systems to
                ensure proper installation, maintenance and repair. Becoming an
                AC technician usually involves completing a heating,
                ventilation, air conditioning and refrigeration degree program
                and/or an apprenticeship
              </MDBCardText>
            </MDBCardBody>
            <MDBCardText>
              Name: Adnan Ansari <br />
              Contact: 0222345672
            </MDBCardText>
          </MDBCard>

          <MDBCard className="vocational">
            <MDBCardImage
              src={carpenter}
              alt="MDBCard image cap"
              width="370px"
              height="247px"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">Carpenter</MDBCardTitle>
              <MDBCardText>
                Carpenters construct, install, and repair a variety of
                residential, commercial, and industrial structures and fixtures.
                In general, carpenters work with wood, steel, and concrete.
                Carpenters are also often involved with demolition and
                maintenance of these structures and fixtures.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardText>
              Name: Prathmesh vishwakarma <br />
              Contact: 0222345673
            </MDBCardText>
          </MDBCard>

          <MDBCard className="vocational">
            <MDBCardImage
              src={Welder}
              alt="MDBCard image cap"
              width="370px"
              height="247px"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">Welder</MDBCardTitle>
              <MDBCardText>
                A Welder, or Brazer, is responsible for assembling pieces of
                metal together or repairing damage in metal components using
                heavy machinery that emits high heat, melting the metal into
                shape. Their duties include reviewing blueprints, cutting metal
                into the appropriate shape and smoothing molten metal to remove
                creases.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardText>
              Name: Anwar Shah <br />
              Contact: 0222345674
            </MDBCardText>
          </MDBCard>
        </MDBCardGroup>

        <br />
        <MDBCardGroup>
          <MDBCard className="vocational">
            <MDBCardImage
              src={Plumber}
              alt="MDBCard image cap"
              width="370px"
              height="247px"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">Plumber</MDBCardTitle>
              <MDBCardText>
                Cut, assemble and install pipes and tubes with attention to
                existing infrastructure (e.g. electrical wiring) Install and
                maintain water supply systems. Locate and repair issues with
                water supply lines (e.g. leaks) Repair or replace broken
                drainage lines, clogged drains, faucets etc.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardText>
              Name: Mehfooz Alam <br />
              Contact: 0222345675
            </MDBCardText>
          </MDBCard>

          <MDBCard className="vocational">
            <MDBCardImage
              src={Electrician}
              alt="MDBCard image cap"
              width="370px"
              height="247px"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">Electrician</MDBCardTitle>
              <MDBCardText>
                Executing plans of electrical wiring for well functioning
                lighting, intercom and other electrical systems. Installing
                electrical apparatus, fixtures and equipment for alarm and other
                systems. Installing safety and distribution components.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardText>
              Name: Kashinath Shinde <br />
              Contact: 0222345676
            </MDBCardText>
          </MDBCard>

          <MDBCard className="vocational">
            <MDBCardImage
              src={Electronic}
              alt="MDBCard image cap"
              width="370px"
              height="247px"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">Electronic Technician</MDBCardTitle>
              <MDBCardText>
                The Electronics Technician is broadly responsible for
                fabrication, testing, troubleshooting, repairing, and modifying
                electronic developmental and production equipment, parts,
                components, and systems according to engineering instructions
                and customer specifications.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardText>
              Name: Rakesh Kambhle <br />
              Contact: 0222345677
            </MDBCardText>
          </MDBCard>
        </MDBCardGroup>
      </div>
    </>
  );
};

export default MemVocational;
