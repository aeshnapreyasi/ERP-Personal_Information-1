import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const JobInformation = () => {
  return (
    <div className="mb-4">
      <h5 className="card-title mb-3">💼 Job Information</h5>
      <div
        className="card-body rounded-3"
        style={{ backgroundColor: "rgba(249, 250, 251, 1)" }}
      >
        <div className="row g-3">
          <div className="col-md-6">
            <div className="d-flex flex-column">
              <p className="text-secondary fs-4">
                Department
                <br />
                <span className="fw-bold text-dark fs-4">Product Development</span>
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="d-flex flex-column">
              <p className="text-secondary fs-4">
                Reporting Manager
                <br />
                <span className="fw-bold text-dark">John Smith</span>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-column">
              <p className="text-secondary fs-4">
                Designation
                <br />
                <span className="fw-bold text-dark">
                  Senior Product Manager
                </span>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-column">
              <p className="text-secondary fs-4">
                Work Location
                <br />
                <span className="fw-bold text-dark">New York Office</span>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-column">
              <p className="text-secondary fs-4">
                Date of Joining
                <br />
                <span className="fw-bold text-dark">01 January 2025</span>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-column">
              <p className="text-secondary fs-4">
                Shif Timing
                <br />
                <span className="fw-bold text-dark">9:00 AM - 6:00 PM EST</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobInformation;
