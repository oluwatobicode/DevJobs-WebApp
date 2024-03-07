import List from "../List/List";

/* eslint-disable react/prop-types */
function JobsList({ job, jobDescription }) {
  return (
    <div className="bg-[#F4F6F8]">
      <div className="grid grid-cols-3 gap-5 items-center justify-center  pt-20 pb-20 pl-24 pr-24 ">
        {job.map((aJob, index) => (
          <List aJob={aJob} key={index} jobDescription={jobDescription} />
        ))}
      </div>
    </div>
  );
}

export default JobsList;
