import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import Facilities from "./Facilities.js";
import Events1 from "./Events1";
import Aboutus1 from "./Aboutus1.js";
import Loginform1 from "./Loginform1.js";
import Loginform2 from "./Loginform2.js";
import ContactPage from "./ContactPage.js";
import Adminlogin1 from "./Adminlogin1.js";
import Memberlogin1 from "./Memberlogin1.js";
import AdAddForm from "./AdAddForm.js";
import AdResidentForm from "./AdResidentForm.js";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/facilities">
              <Facilities />
            </Route>
            <Route exact path="/events">
              <Events1 />
            </Route>
            <Route exact path="/aboutus">
              <Aboutus1 />
            </Route>
            <Route exact path="/form">
              <Loginform1 />
            </Route>
            <Route exact path="/form2">
              <Loginform2 />
            </Route>
            <Route exact path="/form/memberlogin">
              <Memberlogin1 />
            </Route>
            <Route exact path="/form2/adminlogin">
              <Adminlogin1 />
            </Route>
            <Route exact path="/form2/adminlogin/adminaddnotice">
              <AdAddForm />
            </Route>
            <Route exact path="/form2/adminlogin/adminaddresident">
              <AdResidentForm />
            </Route>
          </Switch>
        </div>
        <ContactPage />
      </Router>
    </>
  );
};

export default App;
