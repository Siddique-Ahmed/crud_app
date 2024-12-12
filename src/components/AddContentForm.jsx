import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddContentForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate()

  const handleSubmitData = async (e) => {
    const button = e.target[2];
    (button.disabled = true), (button.innerHTML = "Loading...");
    try {
      e.preventDefault();
      const data = await fetch("https://crud-api-mocha.vercel.app/crud", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!data.ok) {
        toast.error("data Submited Failed!");
        (button.innerHTML = "Add Task"), (button.disabled = false);
      } else {
        toast.success("Data Added Successfully!");
        (button.innerHTML = "Add Task"), (button.disabled = false);
        setTitle("");
        setDescription("");
        navigate("/")
      }
    } catch (error) {
      console.log(error.message);
      (button.innerHTML = "Add Task"), (button.disabled = false);
      setTitle("");
      setDescription("");
    } finally {
      (button.innerHTML = "Add Task"), (button.disabled = false);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="w-full sm:w-[430px] bg-white px-2 py-2 pb-3 flex items-center justify-center flex-col gap-3 rounded-md shadow-lg">
      <div className="w-full flex items-center">
        <Link to={"/"}>
          <FaArrowLeft className="text-gray-400 hover:text-blue-600" />
        </Link>
      </div>
      <h1 className="text-xl uppercase font-bold text-blue-600">Add Topic</h1>
      <form
        onSubmit={handleSubmitData}
        className="w-full flex items-center flex-col gap-2"
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-gray-100 px-2 py-3 outline-none rounded-md focus:bg-slate-50"
          type="text"
          placeholder="Title"
          required
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full bg-gray-100 px-2 py-3 outline-none rounded-md focus:bg-slate-50"
          type="text"
          placeholder="Description"
          required
        />
        <button
          type="submit"
          className="w-full sm:w-[90px] bg-blue-700 p-2 text-white font-bold rounded-md hover:bg-blue-600 mt-2"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddContentForm;
