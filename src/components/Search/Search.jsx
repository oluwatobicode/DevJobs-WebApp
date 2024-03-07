/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
const Search = ({
  search,
  setSearch,
  location,
  setLocation,
  handleFilterBox,
  fullTime,
  filterAllJobs,
}) => {
  return (
    <div className="relative">
      <div className="col-span-2 row-span-1 ">
        <div className=" bg-white  dark:bg-[#19202D]  flex flex-row items-center  w-[90%] h-20 absolute bottom-[-35px]  left-[6%] rounded-lg">
          <div className=" border-r-[#6E8098] dark:border-r-[#6E8098] border-r-[0.5px]  h-full flex-[1%] flex flex-row  items-center justify-center gap-5">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#5964e0" }}
            />
            <input
              type="text"
              value={search}
              placeholder="Filter by title, companies, expertise…"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="outline-none text-[20px] font-sans w-[80%] font-normal dark:bg-[#19202D] dark:text-[#ffff]"
            />
          </div>

          <div className="border-r-[#6E8098] dark:border-r-[#6E8098] border-r-[0.5px] h-full flex flex-row items-center justify-center gap-4  flex-[1%]">
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "#5964e0" }}
            />
            <input
              type="text"
              value={location}
              placeholder="Filter by location…"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              className="outline-none text-[20px] font-sans w-[80%] font-normal dark:bg-[#19202D] dark:text-[#ffff]"
            />
          </div>
          <div className="flex flex-row gap-4 flex-[1%] h-full items-center pl-5">
            <input
              type="checkbox"
              id="tickBox"
              value={fullTime}
              className="w-[24px] h-[24px] bg-slate-700"
              onChange={(e) => handleFilterBox(e, "Full Time")}
            />
            <label htmlFor="tickBox">
              <p className="font-bold text-[25px] dark:text-[#ffff]">
                Full Time Only
              </p>
            </label>

            <button
              onClick={filterAllJobs}
              className="bg-[#5964E0] w-[150px] h-[50px] rounded-lg text-white font-bold text-[26px]"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
