
import React from "react";
import { useLoaderData, useNavigate } from "react-router"; 
import Swal from "sweetalert2";

const MyGroups = () => {
  const myGroup = useLoaderData();
  const navigate = useNavigate(); 

  // Update handler
  const handleUpdate = (id) => {
    navigate(`/updateGroup/${id}`);
  };

  // delete function (unchanged)
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
    <div className="p-5">
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
              <tr key={group._id} className="hover">
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
                {/* <td>{group.userName || "N/A"}</td>
                <td>{group.userEmail || "N/A"}</td> */}
                <td>{group.userName }</td>
                <td>{group.userEmail }</td>
                <td className="flex gap-4 mt-4">
                  {/*  Navigate to update route */}
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyGroups;
