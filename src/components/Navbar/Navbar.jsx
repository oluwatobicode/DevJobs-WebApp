/* eslint-disable react/prop-types */
import Darkmode from "../Mode/Darkmode";

function Navbar({ toggleDarkMode }) {
  return (
    <div className="header w-full h-100vh grid grid-cols-2 bg-[#F4F6F8] dark:bg-[#121721]">
      <nav className="col-span-2">
        <div className="flex flex-row p-20 items-center">
          <div className="ml-5">
            <img src="public/assets/desktop/logo.svg" alt="devJobs logo" />
          </div>

          <div className="ml-auto">
            <Darkmode toggleDarkMode={toggleDarkMode} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
