import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateGroup = () => {
  const {
    _id,
    groupName,
    category,
    description,
    meetingLocation,
    maxMembers,
    startDate,
    imageUrl,
    userName,
    userEmail,
  } = useLoaderData();

  //updated  from data  function
  const handleUpdatePeople = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedGroup = Object.fromEntries(formData.entries());
    console.log(updatedGroup);

    //send updated group to the DB
    fetch(`http://localhost:3000/peoples/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedGroup),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Update has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
        <div className="max-w-2xl w-full mx-auto">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">
              Update Hobby Group
            </h1>
            <form onSubmit={handleUpdatePeople}>
              {/* Group Name */}
              <div className="mb-4">
                <label htmlFor="groupName" className="block text-gray-700 mb-2">
                  Group Name
                </label>
                <input
                  type="text"
                  id="groupName"
                  name="groupName"
                  defaultValue={groupName}
                  placeholder="Enter group name"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              {/* Hobby Category */}
              <div className="mb-4">
                <label htmlFor="category" className="block text-gray-700 mb-2">
                  Hobby Category
                </label>
                <select
                  defaultValue={category}
                  id="category"
                  name="category"
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="Drawing & Painting">Drawing & Painting</option>
                  <option value="Photography">Photography</option>
                  <option value="Video Gaming">Video Gaming</option>
                  <option value="Fishing">Fishing</option>
                  <option value="Running">Running</option>
                  <option value="Cooking">Cooking</option>
                  <option value="Reading">Reading</option>
                  <option value="Writing">Writing</option>
                </select>
              </div>
              {/* Description */}
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 mb-2"
                >
                  Description
                </label>
                <textarea
                  defaultValue={description}
                  id="description"
                  name="description"
                  rows="4"
                  placeholder="Enter group description"
                  className="w-full p-2 border border-gray-300 rounded"
                ></textarea>
              </div>
              {/* Meeting Location */}
              <div className="mb-4">
                <label htmlFor="location" className="block text-gray-700 mb-2">
                  Meeting Location
                </label>
                <input
                  defaultValue={meetingLocation}
                  type="text"
                  id="location"
                  name="meetingLocation"
                  placeholder="Enter meeting location"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              {/* Max Members */}
              <div className="mb-4">
                <label
                  htmlFor="maxMembers"
                  className="block text-gray-700 mb-2"
                >
                  Max Members
                </label>
                <input
                  defaultValue={maxMembers}
                  type="number"
                  id="maxMembers"
                  name="maxMembers"
                  placeholder="Enter max members"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              {/* Start Date */}
              <div className="mb-4">
                <label htmlFor="startDate" className="block text-gray-700 mb-2">
                  Start Date
                </label>
                <input
                  defaultValue={startDate}
                  type="date"
                  id="startDate"
                  name="startDate"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              {/* Image URL */}
              <div className="mb-4">
                <label htmlFor="imageUrl" className="block text-gray-700 mb-2">
                  Image URL
                </label>
                <input
                  defaultValue={imageUrl}
                  type="url"
                  id="imageUrl"
                  name="imageUrl"
                  placeholder="Enter image URL"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              {/* User Name  */}
              <div className="mb-4">
                <label htmlFor="userName" className="block text-gray-700 mb-2">
                  User Name
                </label>
                <input
                  defaultValue={userName}
                  type="text"
                  id="userName"
                  name="userName"
                  placeholder="MD.Rohan islam "
                  className="w-full p-2 border border-gray-300 rounded bg-gray-200"
                  required
                  readOnly
                />
              </div>
              {/* User Email  */}
              <div className="mb-4">
                <label htmlFor="userEmail" className="block text-gray-700 mb-2">
                  User Email
                </label>
                <input
                  defaultValue={userEmail}
                  type="email"
                  id="userEmail"
                  name="userEmail"
                  placeholder="rohan@gmail.com"
                  className="w-full p-2 border border-gray-300 rounded bg-gray-200"
                  required
                  readOnly
                />
              </div>
              {/* Create Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateGroup;
