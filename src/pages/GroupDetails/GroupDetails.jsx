import React from "react";
import { useLoaderData, useParams } from "react-router";

const GroupDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const singlePeople = data.find((people) => people._id === id);

  if (!singlePeople) {
    return <p className="text-center text-red-500">Group not found!</p>;
  }

  const {
    groupName,
    category,
    description,
    imageUrl,
    maxMembers,
    meetingLocation,
    startDate,
    userEmail,
    userName,
  } = singlePeople;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4 bg-base-100 shadow-2xl rounded-xl ">
      <h2 className="text-3xl font-bold text-center mb-6 ">
        {" "}
        Group Name: <strong className="text-red-500">{groupName}</strong>{" "}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <img
            src={imageUrl}
            alt={groupName}
            className="w-full h-full object-cover rounded-lg shadow"
          />
        </div>

        <div className="space-y-3">
          <p>
            <span className="font-semibold">Category:</span> {category}
          </p>
          <p>
            <span className="font-semibold">Start Date:</span> {startDate}
          </p>
          <p>
            <span className="font-semibold">Location:</span> {meetingLocation}
          </p>
          <p>
            <span className="font-semibold">Max Members:</span> {maxMembers}
          </p>
          <p>
            <span className="font-semibold">Name:</span> {userName}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {userEmail}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Description:</h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>

      {/* Join Group Button */}
      <div className="mt-8 text-center">
        <button
          className="btn btn-success px-6 text-white text-lg rounded-full hover:scale-105 transition"
          onClick={() =>
            alert(`You have successfully joined the ${groupName} group!`)
          }
        >
          Join Group
        </button>
      </div>
    </div>
  );
};

export default GroupDetails;
