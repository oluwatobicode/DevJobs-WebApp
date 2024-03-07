/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetail";
import "./App.css";
import jobsData from "../Data/data.json";
import Navbar from "./components/Navbar/Navbar";

function App() {
  let jobs = [];
  jobs = jobsData;

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [job, setJob] = useState([]);
  const [jobDesc, setJobDesc] = useState([]);
  const [fullTime, setfullTime] = useState(true);
  const [checkBox, setCheckBox] = useState("");

  function jobDescription(name) {
    setJobDesc(name);
  }

  function handleFilterBox(data) {
    if (data === "Full Time") {
      if (fullTime === true) {
        setCheckBox(data);
        console.log(data);
      }
      setfullTime(!true);
    }
  }

  jobs = jobsData.filter(
    (job) =>
      job.position.toLowerCase().includes(search.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase()) &&
      job.contract.toLowerCase().includes(checkBox.toLowerCase())
  );

  //Senior Software Enginner

  return (
    <h1 className="text-3xl font-bold  font-sans ">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <Jobs
                search={search}
                setSearch={setSearch}
                location={location}
                setLocation={setLocation}
                job={jobs}
                setJob={setJob}
                jobDescription={jobDescription}
                handleFilterBox={handleFilterBox}
                fullTime={fullTime}
              />
            }
          />
          <Route path="/Detail" element={<JobDetails jobDesc={jobDesc} />} />
        </Routes>
      </BrowserRouter>
    </h1>
  );
}

export default App;
