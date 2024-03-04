/* eslint-disable react/prop-types */
function List({ aJob }) {
  const { logoBackground } = aJob;
  console.log(`bg-[${logoBackground}]`);
  return (
    <div className="bg-white col-span-1 rounded-md relative mb-10">
      <div
        className={`bg-[${logoBackground}]   w-[50px] h-[50px] absolute top-[-10%] flex items-center justify-center rounded-lg`}
      >
        <img src={aJob.logo} alt={aJob.company} />
      </div>

      <div className="m-5">
        <div className="flex flex-row">
          <li>{aJob.postedAt}</li>
          <li>{aJob.contract}</li>
        </div>
        <div className="text-xl">{aJob.position}</div>
        <div className="text-[18px]">{aJob.company}</div>
        <div className="text-[16px] text-[#5964E0]">{aJob.location}</div>
      </div>
    </div>
  );
}

export default List;
