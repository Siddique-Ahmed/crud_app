import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContentCard = () => {
  return (
    <>
      <div className="w-full sm:w-[290px] bg-white px-4 py-3 shadow-md rounded-md flex flex-col gap-3">
        <div className="w-full flex items-center justify-between flex-col">
          <h1 className="text-2xl font-bold uppercase text-blue-600">Title</h1>
          <p className="font-medium text-gray-400 text-wrap text">
            Description is most like a multi telented graphically entertainment
            of karachi of pakistan dfa alsdkfja asdalkn asdfasoi asdoi adgakl
            afgidln
          </p>
        </div>
        <div className="w-full flex items-center justify-evenly p-2 gap-2 flex-wrap">
          <button className="w-[90px] rounded-md hover:bg-red-600 bg-red-500 p-2 flex items-center justify-center text-white">
            <FaTrash />
          </button>
          <Link to={"edit/:id"}>
            <button className="w-[90px] rounded-md hover:bg-green-600 bg-green-500 p-2 flex items-center justify-center text-white">
              <FaEdit />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContentCard;
