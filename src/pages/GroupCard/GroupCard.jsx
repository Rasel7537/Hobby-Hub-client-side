import React from "react";
import { Link } from "react-router";

const GroupCard = ({ people }) => {
 

  const {
    imageUrl,
    groupName,
    category,
    description,
    maxMembers,
    _id,
    meetingLocation,
  } = people;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-lg mt-8 mb-8">
        <figure className="px-10 pt-10">
          <img src={imageUrl} alt="Shoes" className="rounded-xl shadow-2xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            Group Name: <strong className="text-red-500">{groupName}</strong>{" "}
          </h2>
          <div className="flex gap-2">
            <p className="font-bold">
              {" "}
              Category : <strong className="text-orange-400">
                {category}
              </strong>{" "}
            </p>
            <p className="font-bold">
              {" "}
              MaxMembers :{" "}
              <strong className="text-orange-400">{maxMembers}</strong>{" "}
            </p>
            <p className="font-bold">
              {" "}
              Location :{" "}
              <strong className="text-orange-400">
                {meetingLocation}
              </strong>{" "}
            </p>
          </div>

          <p>{description}</p>
          <div className="card-actions">
            <Link to={`/addNewGroupDetails/${_id}`}>
              <button className="btn btn-primary">See More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
