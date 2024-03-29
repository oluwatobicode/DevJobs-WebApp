import Footer from "../components/Footer/Footer";

/* eslint-disable react/prop-types */
const JobDetail = ({ jobDesc }) => {
  const {
    website,
    apply,
    description,
    requirements,
    role,
    company,
    logo,
    logoBackground,
    contract,
    postedAt,
    position,
    location,
  } = jobDesc;
  console.log(role);

  return (
    <div className="bg-[#F4F6F8] dark:bg-[#121721] ">
      <div>
        <div className="flex items-center m-auto max-w-[850px] bg-[white] dark:bg-[#19202D] rounded-md relative bottom-20 right-0">
          <div
            className={`w-[150px] h-[150px] flex items-center justify-center bg-[${logoBackground}]  rounded-bl-lg`}
          >
            <img src={logo} alt={company} className="w-[75px]" />
          </div>
          <div className="ml-5">
            <h1 className="text-heading text-3xl font-bold  font-sans dark:text-[#ffff]">
              {company}
            </h1>
            <p className="text-[16px] text-[#6E8098]">{website}</p>
          </div>
          <div className="ml-auto mr-4">
            <button className="bg-[#b3b9f3] dark:bg-[#6E8098]  rounded-lg w-[150px] h-[50px]">
              <a
                href={website}
                target="blank"
                className="text-[#5964E0] dark:text-[#ffff] text-[16px] font-bold"
              >
                Company Site
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="bg-white dark:bg-[#19202D] flex flex-col justify-center w-[850px] m-auto gap-5 p-10">
        {/* top */}
        <div className="flex flex-row items-center gap-10">
          <div className="flex flex-col">
            <div className="text-body flex gap-5 text-[#6E8098]">
              <li className="list-none">{postedAt}</li>
              <li>{contract}</li>
            </div>

            <h1 className="text-heading font-extrabold dark:text-[#FFFFFF]">
              {position}
            </h1>
            <p className="text-[16px] text-[#5964E0]"> {location}</p>
          </div>
          <div className="ml-auto mr-5">
            <button className="w-[150px] h-[60px] rounded-lg bg-[#5964E0]">
              <a href={apply} target="blank" className="text-white text-body">
                Apply Now
              </a>
            </button>
          </div>
        </div>

        {/* 1st part */}
        <div className="">
          <p className="text-[#6E8098] dark:text-[#9DAEC2] text-body  font-light">
            {description}
          </p>
        </div>

        {/* Requirements */}
        <div className="">
          <div className="">
            <h1 className="font-extrabold text-heading dark:text-[#FFFFFF]">
              Requirements
            </h1>
            <p className="text-body text-[#6E8098] dark:text-[#9DAEC2]  font-light">
              {requirements.content}
            </p>
          </div>

          <div className="text-body">
            {requirements.items.map((item, index) => (
              <ol key={index} className="list-disc">
                <li className="text-[#6E8098] dark:text-[#9DAEC2] font-light ">
                  {item}
                </li>
              </ol>
            ))}
          </div>
        </div>

        {/* what you will do */}
        <div className="">
          <div className="">
            <h1 className="font-extrabold text-heading dark:text-[#FFFFFF]">
              Role
            </h1>
            <p className="text-body text-[#6E8098] dark:text-[#9DAEC2] font-light">
              {role.content}
            </p>
          </div>
          <div className="text-body">
            {role.items.map((rol, index) => (
              <ol key={index}>
                <li className="text-[#6E8098] dark:text-[#9DAEC2] font-light text-left">
                  <span className="text-[#5964E0] font-bold mr-5">
                    {index + 1}
                  </span>
                  {rol}
                </li>
              </ol>
            ))}
          </div>
        </div>
      </div>

      <Footer company={company} apply={apply} position={position} />
    </div>
  );
};

export default JobDetail;
