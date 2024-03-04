import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetail";
import "./App.css";
import jobsData from "../Data/data.json";

function App() {
  const jobs = jobsData;
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [job, setJob] = useState(jobs);

  return (
    <h1 className="text-3xl font-bold  font-sans ">
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
                job={job}
                setJob={setJob}
              />
            }
          />
          <Route path="/Detail" element={<JobDetails />} />
        </Routes>
      </BrowserRouter>
    </h1>
  );
}

export default App;
