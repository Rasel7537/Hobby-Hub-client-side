
import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import { motion } from "framer-motion";

const AnotherGroupCard = () => {
  const groups = useLoaderData();

  return (
    <div className="p-5">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">All Hobby Groups</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-items-center">
        {groups.map((group, index) => (
          <motion.div
            key={group._id}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 + index * 0.1, ease: "easeOut" }}
            className="card bg-base-100 w-full md:w-80 lg:w-96 shadow-lg hover:scale-105 hover:bg-blue-100 transition-transform duration-300 rounded-xl"
          >
            <figure className="px-6 pt-6">
              <img
                src={group.imageUrl}
                alt={group.groupName}
                onError={(e) => (e.target.src = "/fallback.png")}
                className="rounded-xl shadow-xl h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h5 className="card-title text-lg font-bold text-red-500">{group.groupName}</h5>
              <p className="text-gray-700 text-sm mt-3 mb-4 line-clamp-4">
                {group.description}
              </p>
              <Link to={`/addNewGroupDetails/${group._id}`} className="w-full">
                <button className="btn btn-primary w-full bg-blue-500 border-0">See More</button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnotherGroupCard;
