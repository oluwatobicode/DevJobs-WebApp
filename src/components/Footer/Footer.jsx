/* eslint-disable react/prop-types */
function Footer({ company, apply, position }) {
  return (
    <footer className="mt-20 bg-white w-full justify-between">
      <div className="w-[850px] flex items-center m-auto pt-5 pb-5">
        <div className="flex flex-col gap-5">
          <h1 className="text-heading font-extrabold">{position}</h1>
          <p className="text-body font-light">{company}</p>
        </div>

        <div className="ml-auto mr-5">
          <button className="w-[150px] h-[60px] bg-[#5964E0] rounded-lg">
            <a href={apply} target="_blank" className="text-body text-white ">
              Apply Now
            </a>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
