import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Error from "./Error";
import GrievanceForm from "./GrivenceFormU";
import LoginPage from "./loginpage";
import home from "./home";
import AboutUs from "./aboutus";
import mainemp from "./EMP/mainemp";
import mainprm from "./PRM/mainprm";
import mainhod from "./HOD/mainhod";
import SignUpPage from "./PRM/Components/signup";
import TotalReject from "./PRM/Pages/TotalRejectprm";
import GrievanceTable from "./PRM/Pages/TotalPendingprm";
import TotalResolved from "./PRM/Pages/TotalResolvedprm";
import SearchedDate from "./PRM/Pages/ReportPage/SearchedDate";
import ResolveGrievences from "./PRM/Pages/ReportPage/ResolveGrievences";
import SearchedTalukavillage from "./PRM/Pages/ReportPage/SearchedTalukavillage";
import SearchedGrievenceid from "./PRM/Pages/ReportPage/SearchedGrievenceid";
import AllGrievances from "./PRM/Pages/ReportPage/AllGrievences";
import TotalForwarded from "./PRM/Pages/TotalForwadedprm";

function Navbar() {
  return (
    <>
      <Router>
        <div className="container" style={{ backgroundColor: "#FBF6EE" }}>
          <nav
            className="navbar navbar-expand-lg navbar-dark"
            style={{ backgroundColor: "#5375e2" }}
          >
            <div className="container-fluid">
              <Link className="navbar-brand text-white" to="/home">
                Home Page
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      className="nav-link text-white"
                      aria-current="page"
                      to="/Grivance"
                    >
                      GrievanceForm
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-white"
                      aria-current="page"
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-white"
                      aria-current="page"
                      to="/aboutus"
                    >
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Routes>
            <Route path="" Component={home}></Route>
            <Route path="home" Component={home}></Route>
            <Route path="Grivance" Component={GrievanceForm}></Route>
            <Route path="login" Component={LoginPage}></Route>
            <Route path="aboutus" Component={AboutUs}></Route>
            <Route path="*" Component={Error}></Route>
            <Route path="mainemp/*" Component={mainemp}></Route>
            <Route path="mainprm/*" Component={mainprm}></Route>
            <Route path="mainhod/*" Component={mainhod}></Route>
            <Route path="signup/" Component={SignUpPage}></Route>
            <Route
              path="/mainprm/TotalRejectprm"
              Component={TotalReject}
            ></Route>
            <Route path="/mainprm/TotalPendingprm" Component={GrievanceTable}></Route>
            <Route path="/mainprm/TotalResolvedprm" Component={TotalResolved}></Route>
            <Route
              path="/mainprm/TotalForwardedprm"
              Component={TotalForwarded }
            ></Route>
            <Route path="/mainprm/GreivanceFormprm" Component={GrievanceForm}></Route>
            <Route path="/mainprm/AllGrievencesprm" Component={AllGrievances}></Route>
            <Route
              path="/mainprm/ResolveGrievencesprm"
              Component={ResolveGrievences}
            ></Route>
            <Route path="/mainprm/SearchedDateprm" Component={SearchedDate}></Route>
            <Route
              path="/mainprm/SearchedTalukavillageprm"
              Component={SearchedTalukavillage}
            ></Route>
            <Route
              path="/mainprm/SearchedGrievenceidprm"
              Component={SearchedGrievenceid}
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default Navbar;
