import List from "../List/List";

/* eslint-disable react/prop-types */
function JobsList({ job }) {
  return (
    <div className="bg-[#F4F6F8]">
      <div className="grid grid-cols-3 gap-5 items-center justify-center pt-20 pb-20 pl-14 pr-14">
        {job.map((aJob, index) => (
          <List aJob={aJob} key={index} />
        ))}
      </div>
    </div>
  );
}

export default JobsList;
