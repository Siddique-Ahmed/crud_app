import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ContentCard = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleted, setIsDeleted] = useState(false);

  async function getDataFromBackend() {
    let data = await fetch("https://crud-api-mocha.vercel.app/crud");
    data = await data.json();
    const fetchData = data.result;
    setTasks(fetchData);
    setIsLoading(false);
  }

  useEffect(() => {
    getDataFromBackend();
  }, []);

  const handleDelete = async (id) => {
    const deleteData = await fetch(
      `https://crud-api-mocha.vercel.app/crud/${id}`,
      {
        method: "DELETE",
      }
    );

    setIsDeleted(true);
    if (!deleteData.ok) {
      toast.error("something went wrong to delete");
      setIsDeleted(false);
    } else {
      toast.success("deleted Successfully");
      getDataFromBackend();
      setIsDeleted(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="w-full sm:w-[290px] bg-white px-4 py-3 shadow-md rounded-md flex flex-col gap-3 animate-pulse">
          <div className="w-full flex items-center justify-between flex-col gap-2">
            <div className="h-6 w-3/4 bg-gray-300 rounded-md"></div>
            <div className="h-4 w-full bg-gray-300 rounded-md"></div>
            <div className="h-4 w-full bg-gray-300 rounded-md"></div>
          </div>
          <div className="w-full flex items-center justify-evenly p-2 gap-2 flex-wrap">
            <div className="w-[90px] h-[40px] bg-gray-300 rounded-md"></div>
            <div className="w-[90px] h-[40px] bg-gray-300 rounded-md"></div>
          </div>
        </div>
      ) : (
        tasks.map((data) => {
          return (
            <div
              key={data._id}
              className="w-full sm:w-[290px] bg-white px-4 py-3 shadow-md rounded-md flex flex-col gap-3"
            >
              <div className="w-full flex items-center justify-between flex-col">
                <h1 className="text-2xl font-bold uppercase text-blue-600">
                  {data.title}
                </h1>
                <p className="font-medium text-gray-400 text-wrap text">
                  {data.description}
                </p>
              </div>
              <div className="w-full flex items-center justify-evenly p-2 gap-2 flex-wrap">
                <button
                  onClick={() => handleDelete(data._id)}
                  className="w-[90px] rounded-md hover:bg-red-600 bg-red-500 p-2 flex items-center justify-center text-white"
                >
                  {isDeleted ? "Loading..." : <FaTrash />}
                </button>
                <Link to={`edit/${data._id}`}>
                  <button className="w-[90px] rounded-md hover:bg-green-600 bg-green-500 p-2 flex items-center justify-center text-white">
                    <FaEdit />
                  </button>
                </Link>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default ContentCard;
