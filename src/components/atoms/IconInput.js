import { useState } from "react";

const IconInput = ({ icon, placeholder, type, options }) => {
  const [input, setInput] = useState("");

  const handleShowIcon = (e) => {
    setInput(e.target.value);
  };

  if (options) {
    return (
      <div className="border border-1 border-gray-500 bg-gray-100 text-gray-500 rounded h-[2.5rem] flex gap-2 p-2 items-center justify-center">
        <select className="flex-1 h-full border-none outline-none w-fit bg-gray-100 text-[.9rem]">
          {options.map((el) => (
            <option key={el}>{el}</option>
          ))}
        </select>
      </div>
    );
  }

  if (type === "date") {
    return (
      <div className="border border-1 border-gray-500 bg-gray-100 text-gray-500 rounded h-[2.5rem] w-fit flex gap-2 p-2 items-center justify-center text-[.9rem]">
        <label for="startDate">From:</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          min="2020-01-01"
          max="2024-12-31"
          className="flex-1 h-full border-none outline-none p-1 w-fit bg-gray-100"
        />

        <label for="endDate">To:</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          min="2020-01-01"
          max="2024-12-31"
          className="flex-1 h-full border-none outline-none p-1 w-fit bg-gray-100"
        ></input>
      </div>
    );
  }
  return (
    <div className="border border-1 border-gray-500 bg-gray-100 text-gray-500 rounded h-[2.5rem] w-fit flex gap-2 p-2 items-center justify-center text-[.9rem]">
      {icon}
      <input
        value={input}
        onChange={handleShowIcon}
        type={type}
        placeholder={placeholder}
        className="flex-1 h-full border-none outline-none p-1 w-fit bg-gray-100"
      />
    </div>
  );
};

export default IconInput;
