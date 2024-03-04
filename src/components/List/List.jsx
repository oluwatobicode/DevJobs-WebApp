/* eslint-disable react/prop-types */
function List({ aJob }) {
  return (
    <div className="bg-red-100">
      <div className="">
        <ul>
          <li>{aJob.postedAt}</li>
          <li>{aJob.contract}</li>
        </ul>
      </div>
      <div className="">{aJob.position}</div>
      <div className="">{aJob.company}</div>
      <div className="">{aJob.location}</div>
    </div>
  );
}

export default List;
