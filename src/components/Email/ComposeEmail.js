import { useState } from "react";
import AppHeader from "../Routes/AppHeader";
import Button from "../atoms/Button";
import IconInput from "../atoms/IconInput";
import Input from "../atoms/Input";
import { IoMdCloudUpload } from "react-icons/io";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { CiImageOn } from "react-icons/ci";

const ComposeEmail = () => {
  const [attachments, setAttachments] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const fileNames = Array.from(files).map((file) => file.name);
    setAttachments(fileNames);
  };

  const deleteAttachmentHandler = () => {
    setAttachments([]);
  };

  return (
    <div className="h-full">
      <AppHeader page={"Compose Message"} />

      <div className="w-[40%] mx-auto mt-[2rem] flex flex-col shadow bg-gray-100">
        <div className="w-full border p-4 flex flex-col gap-2">
          <Input topic={"To"} />
          <Input topic={"CC"} />
          <Input topic={"BCC"} />
        </div>

        <div className="w-full border p-4 flex flex-col gap-2">
          <Input topic={"Subject"} />
          <Input topic={"Body"} editable={true} />
        </div>

        <div className="flex border p-6 ">
          <div className="flex-1 flex gap-1 flex-col cursor-pointer">
            <h3>Attachment</h3>
            <label
              htmlFor="fileInput"
              className="border rounded-3xl border-[2px] border-dashed border-gray-900 w-fit py-3 px-2 flex items-center justify center flex-col cursor-pointer"
            >
              <IoMdCloudUpload className="text-[2.8rem]" />
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="hidden"
                id="fileInput"
              />
              <span className="text-[.7rem]">Browse Files to upload</span>
            </label>
          </div>
          <div className="flex flex-1 flex-col gap-2 ">
            <div className="flex gap-2 text-[.9rem]">
              <label htmlFor="prority">Priority</label>
              <IconInput options={["Normal", "High"]} />
            </div>

            <div className="bg-blue-100 flex items-center gap-2 w-fit p-2 rounded-xl">
              <CiImageOn className="text-[2rem]" />
              <p>
                {attachments.length}{" "}
                {attachments.length === 1 ? "file" : "files"} selected
              </p>
              <RiDeleteBin5Fill
                className="text-[2rem] cursor-pointer"
                onClick={deleteAttachmentHandler}
              />
            </div>
            {attachments.length > 0 && (
              <ul className="h-[5rem] overflow-scroll">
                {attachments.map((attachment, index) => (
                  <li key={index}>{attachment}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="flex gap-2 px-5 py-3 items-center ">
          <Button text={"Send Email"} look={2} />
          <Button text={"Cancel"} />
        </div>
      </div>
    </div>
  );
};

export default ComposeEmail;
