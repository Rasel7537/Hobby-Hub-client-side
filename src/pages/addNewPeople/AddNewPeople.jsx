
import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const AddNewPeople = () => {
  const { user } = useContext(AuthContext);

  const handleAddPeople = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newPeople = Object.fromEntries(formData.entries());

   
    newPeople.userName = user.displayName;
    newPeople.userEmail = user.email;

    //send people data to the DB
    fetch("https://assignment-ten-server-site-brown.vercel.app/peoples", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPeople),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "New member added Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          // form.reset()
        }
      });
  };

  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
        <div className="max-w-2xl w-full mx-auto">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">
              Create Hobby Group
            </h1>
            <form onSubmit={handleAddPeople}>
              {/* Group Name */}
              <div className="mb-4">
                <label htmlFor="groupName" className="block text-gray-700 mb-2">
                  Group Name
                </label>
                <input
                  type="text"
                  id="groupName"
                  name="groupName"
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
                  type="url"
                  id="imageUrl"
                  name="imageUrl"
                  placeholder="Enter image URL"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              {/* User Name */}
              <div className="mb-4">
                <label htmlFor="userName" className="block text-gray-700 mb-2">
                  User Name
                </label>
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  value={user?.displayName || ""}
                  className="w-full p-2 border border-gray-300 rounded bg-gray-200"
                  readOnly
                />
              </div>
              {/* User Email */}
              <div className="mb-4">
                <label htmlFor="userEmail" className="block text-gray-700 mb-2">
                  User Email
                </label>
                <input
                  type="email"
                  id="userEmail"
                  name="userEmail"
                  value={user?.email || ""}
                  className="w-full p-2 border border-gray-300 rounded bg-gray-200"
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

export default AddNewPeople;

