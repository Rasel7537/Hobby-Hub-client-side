
import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { motion } from "framer-motion"; // ✅ শুধু এটুকু অ্যাড

const MyGroups = () => {
  const myGroup = useLoaderData();
  const navigate = useNavigate();

  const handleUpdate = (id) => {
    navigate(`/updateGroup/${id}`);
  };

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-ten-server-site-brown.vercel.app/peoples/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your group has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <motion.div
      className="p-5"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-center mb-6">My Groups</h2>
      <div className="overflow-x-auto rounded shadow-2xl">
        <table className="table w-full border border-gray-300 rounded">
          <thead className="bg-base-200">
            <tr>
              <th>Image</th>
              <th>Group Name</th>
              <th>Category</th>
              <th>Location</th>
              <th>Members</th>
              <th>Start Date</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myGroup.map((group) => (
              <motion.tr
                key={group._id}
                className="hover"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <td>
                  <img
                    src={group.imageUrl}
                    alt={group.groupName}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td>{group.groupName}</td>
                <td>{group.category}</td>
                <td>{group.meetingLocation}</td>
                <td>{group.maxMembers}</td>
                <td>{group.startDate}</td>
                <td>{group.userName}</td>
                <td>{group.userEmail}</td>
                <td className="flex gap-4 mt-4">
                  <button
                    onClick={() => handleUpdate(group._id)}
                    className="btn btn-sm btn-outline btn-primary"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(group._id)}
                    className="btn btn-sm btn-outline btn-primary"
                  >
                    Delete
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default MyGroups;
