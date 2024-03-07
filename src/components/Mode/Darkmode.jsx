/* eslint-disable react/prop-types */

function Darkmode({ toggleDarkMode }) {
  return (
    <button onClick={toggleDarkMode} className="bg-red-300">
      <h1>Dark Mode</h1>
    </button>
  );
}

export default Darkmode;
