
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Framer Motion import

const GroupCard = ({ people }) => {
  const {
    imageUrl,
    groupName,
    category,
    maxMembers,
    _id,
    meetingLocation,
  } = people;

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }} // ✅ Start from right
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="card bg-base-100 w-96 shadow-lg mt-8 mb-8 hover:scale-105 transition-transform duration-300">
        <figure className="px-10 pt-10">
          <img
            src={imageUrl}
            alt={groupName}
            className="rounded-xl shadow-2xl h-48 object-cover w-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-lg font-bold">
            Group Name:{" "}
            <span className="text-red-500">{groupName}</span>
          </h2>

          {/* ✅ Professionally styled category details */}
          <div className="flex flex-col gap-1 text-sm font-semibold mb-3">
            <p>
              Category:{" "}
              <span className="text-blue-600 font-medium">{category}</span>
            </p>
            <p>
              Max Members:{" "}
              <span className="text-green-600 font-medium">{maxMembers}</span>
            </p>
            <p>
              Location:{" "}
              <span className="text-gray-600 font-medium">{meetingLocation}</span>
            </p>
          </div>

          <div className="card-actions">
            <Link to={`/addNewGroupDetails/${_id}`}>
              <button className="btn btn-primary">See More</button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GroupCard;






