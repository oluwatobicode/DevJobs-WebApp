/* eslint-disable react/prop-types */

import JobsList from "../components/Jobs/JobsList";
import Search from "../components/Search/Search";

const Jobs = ({
  search,
  setSearch,
  location,
  setLocation,
  job,
  setJob,
  jobDescription,
  handleFilterBox,
  fullTime,
}) => {
  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        location={location}
        setLocation={setLocation}
        handleFilterBox={handleFilterBox}
        fullTime={fullTime}
      />
      <JobsList job={job} setJob={setJob} jobDescription={jobDescription} />
    </div>
  );
};

export default Jobs;
