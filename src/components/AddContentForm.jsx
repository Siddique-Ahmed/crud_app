import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const AddContentForm = () => {
  return (
    <div className="w-full sm:w-[430px] bg-white px-2 py-2 pb-3 flex items-center justify-center flex-col gap-3 rounded-md shadow-lg">
      <div className="w-full flex items-center">
        <Link to={"/"}>
          <FaArrowLeft className="text-gray-400 hover:text-blue-600" />
        </Link>
      </div>
      <h1 className="text-xl uppercase font-bold text-blue-600">Add Topic</h1>
      <form className="w-full flex items-center flex-col gap-2">
        <input className="w-full bg-gray-100 px-2 py-3 outline-none rounded-md focus:bg-slate-50" type="text" placeholder="Title" required />
        <input className="w-full bg-gray-100 px-2 py-3 outline-none rounded-md focus:bg-slate-50" type="text" placeholder="Description" required />
        <button className="w-full sm:w-[90px] bg-blue-700 p-2 text-white font-bold rounded-md hover:bg-blue-600 mt-2">Add Task</button>
      </form>
    </div>
  );
};

export default AddContentForm;
