import { useState } from "react";
import Header from "./components/Header";
import Personal from "./components/Personal";
import SalaryDetails from "./components/SalaryDetails";
import JobInformation from "./components/JobInformation";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      className="w-100 d-flex justify-content-center"
      style={{ backgroundColor: "aliceblue" }}
    >
      <div className="w-75 p-4">
      <div className="card shadow ">
        <div className="card-body p-0">
          <Header />
          <div className="p-4">
            <Personal />
            <JobInformation />
            <SalaryDetails />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
