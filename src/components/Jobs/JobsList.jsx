import List from "../List/List";

/* eslint-disable react/prop-types */
function JobsList({ job, jobDescription }) {
  return (
    <div className="bg-[#F4F6F8] dark:bg-[#121721]">
      <div className="gap-5 grid grid-cols-1 justify-items-center items-center pt-20  md:grid md:grid-cols-2 md:justify-items-center md:items-center lg:grid lg:grid-cols-3 lg:justify-center lg:items-center lg:pt-20 lg:pb-20 lg:pl-24 lg:pr-24 ">
        {job.map((aJob, index) => (
          <List aJob={aJob} key={index} jobDescription={jobDescription} />
        ))}
      </div>
    </div>
  );
}

export default JobsList;
