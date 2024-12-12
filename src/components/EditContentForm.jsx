import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditContentForm = ({ id }) => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const navigate = useNavigate()

  // update data in database;
  const handleUpdateData = async (e) => {
    e.preventDefault();
    const button = e.target[2];

    button.disabled = true;
    button.innerHTML = "Updating...";

    try {
      const data = await fetch(`https://crud-api-mocha.vercel.app/crud/${id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!data.ok) {
        toast.error("Sorry! something went wront to update data");
        button.disabled = false;
        button.innerHTML = "Update Task";
      } else {
        toast.success("Data Updated Sucessfully");
        button.disabled = false;
        button.innerHTML = "Update Task";
        navigate("/")
      }
    } catch (error) {
      console.log(error.message);
      button.disabled = true;
      button.innerHTML = "Update Task";
    } finally {
      button.disabled = false;
      button.innerHTML = "Update Task";
    }
  };

  // get data fron database
  const getData = async () => {
    let data = await fetch(`https://crud-api-mocha.vercel.app/crud/${id}`);
    data = await data.json();

    const { title, description } = data.result;
    setTitle(title);
    setDescription(description);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full sm:w-[430px] bg-white px-2 py-2 pb-3 flex items-center justify-center flex-col gap-3 rounded-md shadow-lg">
      <div className="w-full flex items-center">
        <Link to={"/"}>
          <FaArrowLeft className="text-gray-400 hover:text-blue-600" />
        </Link>
      </div>
      <h1 className="text-xl uppercase font-bold text-blue-600">
        Update Topic
      </h1>
      <form
        onSubmit={handleUpdateData}
        className="w-full flex items-center flex-col gap-2"
      >
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="w-full bg-gray-100 px-2 py-3 outline-none rounded-md focus:bg-slate-50"
          type="text"
          placeholder="Title"
          required
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full bg-gray-100 px-2 py-3 outline-none rounded-md focus:bg-slate-50"
          type="text"
          placeholder="Description"
          required
        />
        <button
          type="submit"
          className="w-full sm:w-[120px] bg-blue-700 p-2 text-white font-bold rounded-md hover:bg-blue-600 mt-2"
        >
          Update Task
        </button>
      </form>
    </div>
  );
};

export default EditContentForm;
