import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Personal = () => {
  return (
    <div className="mb-4 mt-4">
      <h5 className="card-title mb-3">🧑 Personal Information</h5>
      <div
        className="card-body rounded-3"
        style={{ backgroundColor: "rgba(249, 250, 251, 1)" }}
      >
        <div className="row g-3">
          <div className="col-md-6">
            <div className="d-flex flex-column">
              <p className="text-secondary fs-4">
                Date Of Birth
                <br />
                <span className="fw-bold text-dark">15 March 1992</span>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-column">
              <p className="text-secondary fs-4">
                Contact Number
                <br />
                <span className="fw-bold text-dark">+(91)9876543685</span>
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="d-flex flex-column">
              <p className="text-secondary fs-4">
                Gender
                <br />
                <span className="fw-bold text-dark">Female</span>
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="d-flex flex-column">
              <p className="text-secondary fs-4">
                Emale
                <br />
                <span className="fw-bold text-dark">@sarahan.Johnson</span>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-column">
              <p className="text-secondary fs-4">
                Marital Status
                <br />
                <span className="fw-bold text-dark">Married</span>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-column">
              <p className="text-secondary fs-4">
                Address
                <br />
                <span className="fw-bold text-dark">
                  123 Business Avenue, Suite 100, New York, NY 10001
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
