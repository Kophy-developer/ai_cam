import { IoCloseOutline } from "react-icons/io5";

const Label = ({ text, onClick }) => {
  return (
    <p className="border-blue-400 bg-blue-100 text-blue-400 hover:bg-blue-700 hover:text-white border border-1 rounded h-[2.5rem] flex gap-2 p-2 items-center justify-center text-[.9rem]">
      {text}{" "}
      {
        <IoCloseOutline
          onClick={onClick}
          className="cursor-pointer text-[1.3rem]"
        />
      }
    </p>
  );
};

export default Label;
