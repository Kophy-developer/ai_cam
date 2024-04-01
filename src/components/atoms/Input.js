import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Input = ({ topic, textLimit, editable }) => {
  const [value, setValue] = useState("");
  return (
    <div
      className={`w-full flex flex-col md:flex-row gap-3 ${
        !editable && !textLimit ? "md:items-center " : ""
      }`}
    >
      <label htmlFor={`${topic}-email`}>{topic}</label>
      {!textLimit && !editable && (
        <input
          type="text"
          id={`${topic}-email`}
          className="border border-gray-500 flex-1 h-[2.7rem] rounded-xl p-2 outline-none bg-white"
        />
      )}

      {textLimit && (
        <textarea
          type="text"
          id={`${topic}-email`}
          className="border border-gray-500 flex-1 h-[2.7rem] rounded-xl p-2 h-[15rem] outline-none bg-white"
        />
      )}

      {editable && (
        <ReactQuill
          theme="snow"
          onChange={setValue}
          value={value}
          className="rounded-xl w-full border border-gray-700 h-[18rem] text-editor flex flex-col bg-white"
        />
      )}
    </div>
  );
};

export default Input;
