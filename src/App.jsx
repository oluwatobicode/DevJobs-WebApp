/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetail";
import "./App.css";
import jobsData from "../Data/data.json";
import Navbar from "./components/Navbar/Navbar";

function App() {
  // let jobs = [];
  // jobs = jobsData;
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [jobs, setJob] = useState(jobsData || []);
  const [jobDesc, setJobDesc] = useState([]);
  const [fullTime, setfullTime] = useState(true);
  const [checkBox, setCheckBox] = useState("");

  function jobDescription(name) {
    setJobDesc(name);
  }

  function handleFilterBox(e, data) {
    if (data === "Full Time") {
      if (fullTime === true) {
        setCheckBox(data);
        console.log(data);
      }
      setfullTime(!true);
    }
  }

  function filterAllJobs() {
    console.log("got here");
    const filterdData = jobsData.filter(
      (job) =>
        job.position.toLowerCase().includes(search.toLowerCase()) &&
        job.location.toLowerCase().includes(location.toLowerCase()) &&
        job.contract.toLowerCase().includes(checkBox.toLowerCase())
    );
    setJob(filterdData);
  }

  function toggleDarkMode() {
    setDarkMode(!darkMode);
    console.log(darkMode);
    console.log("working");
    console.log(`${darkMode && "dark"}`);
  }

  //Senior Software Enginner

  return (
    <div className={`${darkMode && "dark"}`}>
      <Navbar toggleDarkMode={toggleDarkMode} />
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
                filterAllJobs={filterAllJobs}
              />
            }
          />
          <Route path="/Detail" element={<JobDetails jobDesc={jobDesc} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
