/* eslint-disable react/prop-types */
import Navbar from "../components/Navbar/Navbar";
import JobsList from "../components/Jobs/JobsList";

const Jobs = ({ search, setSearch, location, setLocation, job, setJob }) => {
  return (
    <div>
      <Navbar
        search={search}
        setSearch={setSearch}
        location={location}
        setLocation={setLocation}
      />

      <JobsList job={job} setJob={setJob} />
    </div>
  );
};

export default Jobs;
