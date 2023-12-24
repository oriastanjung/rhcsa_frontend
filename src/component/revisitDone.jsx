import React from "react";
import { Link } from "react-router-dom";

function RevisitDone({ onChange, name,data , link, nameLink, isLarge}) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className="my-3">
      {/* {console.log(data)} */}
      <input
        type="radio"
        id={`${name}_revisit`}
        name={name}
        value={"revisit"}
        checked={data === "revisit"}
        onChange={handleChange}
      />
      <label className="ml-2" htmlFor={`${name}_revisit`}>
        Revisit
      </label>

      <input
        type="radio"
        id={`${name}_Done`}
        name={name}
        value={"done"}
        checked={data === "done"}
        onChange={handleChange}
        className="ml-4"
      />
      <label className="ml-2" htmlFor={`${name}_Done`}>
        Done
      </label>
      <label className={`ml-5 ${isLarge ? "text-xl font-bold" : ""} text-blue-700 underline`}> 
        <Link to={link}>{nameLink}</Link>
      </label>
    </div>
  );
}

export default RevisitDone;
