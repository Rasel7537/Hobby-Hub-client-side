

import React from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const AnotherGroupCard = () => {
  const groups = useLoaderData();

  return (
    <div className="p-5">
      <h2 className="text-3xl font-bold text-center mb-6">All Hobby Groups</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {groups.map((group) => (
          <div key={group._id} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src={group.imageUrl}
                alt={group.groupName}
                className="h-full w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl font-bold">{group.groupName}</h2>
              <p className="text-sm text-gray-500">{group.description.slice(0, 100)}...</p>
              <div className="text-sm mt-2">
                <p><strong>Category:</strong> {group.category}</p>
                <p><strong>Location:</strong> {group.meetingLocation}</p>
                <p><strong>Members:</strong> {group.maxMembers}</p>
              </div>
              <div className="card-actions justify-end mt-4">
                <Link to={`/addNewGroupDetails/${group._id}`}>
                  <button className="btn btn-primary btn-sm">See More</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnotherGroupCard;

