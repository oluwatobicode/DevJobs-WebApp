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
  filterAllJobs,
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
        filterAllJobs={filterAllJobs}
      />
      <JobsList job={job} setJob={setJob} jobDescription={jobDescription} />
    </div>
  );
};

export default Jobs;
