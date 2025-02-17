import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SalaryDetails = () => {
  return (
    <div className="mb-4">
      <h5 className="card-title mb-3 ">💰 Salary & Payroll Details</h5>
      <div
        className="card-body rounded-3 "
        style={{ backgroundColor: "rgba(249, 250, 251, 1)" }}
      >
        <div className="row g-3">
          <div className="col-md-6">
            <div className="d-flex flex-column">
              <p className="text-secondary fs-4">
                Annual CTC
                <br />
                <span className="fw-bold text-dark">$ 120,000</span>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-column">
              <p className="text-secondary fs-4">
                PF Number
                <br />
                <span className="fw-bold text-dark">PF-2025-789456</span>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-column">
              <p className="text-secondary fs-4">
                Bank Account
                <br />
                <span className="fw-bold text-dark">XXXX-XXXX-1234</span>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-column">
              <p className="text-secondary fs-4">
                Tax ID (PAN)
                <br />
                <span className="fw-bold text-dark">ABCDE1234F</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryDetails;
