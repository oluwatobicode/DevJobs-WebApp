/* eslint-disable react/prop-types */
function Footer({ company, apply, position }) {
  return (
    <footer className="mt-20 bg-white w-full justify-between dark:bg-[#19202D]">
      <div className="w-[850px] flex items-center m-auto pt-5 pb-5">
        <div className="flex flex-col gap-5">
          <h1 className="text-heading font-extrabold dark:text-[#ffff]">
            {position}
          </h1>
          <p className="text-body font-light dark:text-[#6E8098]">{company}</p>
        </div>

        <div className="ml-auto mr-5">
          <button className="w-[150px] h-[60px] bg-[#5964E0] rounded-lg">
            <a href={apply} target="blank" className="text-body text-white ">
              Apply Now
            </a>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
