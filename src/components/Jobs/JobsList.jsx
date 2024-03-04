import List from "../List/List";

/* eslint-disable react/prop-types */
function JobsList({ job }) {
  return (
    <div className="flex flex-row flex-wrap items-center ml-[5rem] mt-[10rem] gap-10">
      {job.map((aJob, index) => (
        <List aJob={aJob} key={index} />
      ))}
    </div>
  );
}

export default JobsList;
