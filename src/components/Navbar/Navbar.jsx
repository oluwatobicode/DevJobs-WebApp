import Darkmode from "../Mode/Darkmode";

function Navbar() {
  return (
    <div className="header w-full h-100vh grid grid-cols-2 ">
      <nav className="col-span-2">
        <div className="flex flex-row p-20 items-center">
          <div className="ml-5">
            <img src="public/assets/desktop/logo.svg" alt="devJobs logo" />
          </div>

          <div className="ml-auto">
            <Darkmode />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
