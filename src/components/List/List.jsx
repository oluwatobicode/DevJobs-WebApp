/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
function List({ aJob, jobDescription }) {
  const logoBackgroundColor = aJob.logoBackground;

  return (
    <Link
      to="/Detail"
      onClick={() => {
        jobDescription(aJob);
      }}
    >
      <div className="bg-white dark:bg-[#19202D] col-span-1 md:col-span-2 lg:col-span-3 flex items-center  justify-start h-[250px] w-full md:w-auto lg:w-auto rounded-md relative mb-10 pl-5">
        <div
          className={`bg-[${logoBackgroundColor}]  w-[50px]   h-[50px] absolute top-[-10%] flex items-center justify-center rounded-lg`}
        >
          <img src={aJob.logo} alt={aJob.company} />
        </div>

        <div className="m-5 flex flex-col gap-3">
          <div className="flex flex-row gap-5 text-body text-[#6E8098]">
            <li className="list-none">{aJob.postedAt}</li>
            <li>{aJob.contract}</li>
          </div>
          <div className="">
            <h1 className="text-[20px] lg:text-heading font-bold  font-sans dark:text-[#FFFFFF]">
              {aJob.position}
            </h1>
          </div>
          <div className="text-[18px] text-[#6E8098]">
            <p>{aJob.company}</p>
          </div>
          <div className="text-[16px] text-[#5964E0]">
            <p>{aJob.location}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default List;
