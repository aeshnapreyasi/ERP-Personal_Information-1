import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profilePic from "../assets/images/erp12344.jpg";

const Header = () => {
  return (
    <div>
      <div
        className="bg-dark text-white p-3 rounded-top position-relative"
        style={{ height: "120px" }}
      >
        <div
          className="position-absolute"
          style={{ bottom: "-40px", left: "20px" }}
        >
          <img
            src={profilePic}
            alt="Profile"
            className="rounded-circle border border-4 border-white"
            style={{ width: "85px", height: "80px" }}
          />
        </div>
      </div>
      <div className="mt-5 ps-3 p-0">
        <h2 className="text-black">Sarah Johnson</h2>
        <small className="text-muted">EMP-2023-001</small>
      </div>
    </div>
  );
};

export default Header;
