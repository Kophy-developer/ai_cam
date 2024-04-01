import { Fragment, useState } from "react";
import AppHeader from "../Routes/AppHeader";

const CreateEmail = () => {
  const [activeContent, setActiveContent] = useState("New");

  const SwitchBtn = ({ type }) => {
    return (
      <p
        className={`${
          activeContent === type
            ? "border-b-[3px] border-b-black"
            : "border-transparent"
        }`}
        onClick={() => setActiveContent(type)}
      >
        {type}
      </p>
    );
  };

  return (
    <div className="h-full ">
      <AppHeader page={"Email and Message"} />

      <div className="flex h-full p-4 gap-3 bg-gray-100">
        <div className="flex flex-col w-[34rem] justify-between">
          <form
            className="flex flex-col px-[1rem] py-[2rem] w-full gap-[2rem] h-fit shadow rounded-xl bg-white"
            action="submit"
          >
            <div className="flex flex-col">
              <label>Language</label>
              <select className="outline-none h-[2.5rem] rounded p-2 bg-gray-200">
                <option>English</option>
                <option>French</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label>Key Points</label>
              <textarea className="bg-gray-200 shadow border-none p-2 outline-none h-[20rem] rounded" />
            </div>

            <div className="flex gap-4 w-full justify-between">
              <div className="flex flex-col flex-1 ">
                <label>Creativity</label>
                <select className="outline-none h-[2.5rem] rounded p-2 bg-gray-200">
                  <option>Default</option>
                  <option>Optimal</option>
                </select>
              </div>
              <div className="flex flex-col flex-1">
                <label>Tone</label>
                <select className="outline-none h-[2.5rem] rounded p-2 bg-gray-200">
                  <option>Optimal</option>
                  <option>Default</option>
                </select>
              </div>
            </div>

            <button className="w-full bg-blue-900 text-white rounded h-[2.5rem]">
              Generate
            </button>
          </form>

          <div className="text-center">
            <p>Getting low quality results?</p>
            <p>Change the creativity or write a better detail</p>
          </div>
        </div>
        <div className="flex flex-col flex-1 px-[1rem] gap-3">
          <div className="shadow rounded-xl bg-white p-[1rem] flex gap-4 [&>*]:cursor-pointer">
            <SwitchBtn type="New" />
            <SwitchBtn type="History" />
          </div>
          <div className="flex-1 shadow rounded-xl bg-white border p-4 ">
            {activeContent === "New" && (
              <Fragment>
                <p className="">Subject: New</p>
                <p className="">
                  This is the main packages depending on the variable offers
                </p>
              </Fragment>
            )}
            {activeContent === "History" && (
              <Fragment>
                <p className="">Subject: History</p>
                <p className="">
                  This is the main packages depending on the variable offers
                </p>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmail;
