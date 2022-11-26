import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Loader from "../../../Loader/Loader";

const AllUser = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/user`);
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this order"
    );
    if (proceed) {
      fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount > 0) {
            // toast.error("Success Fully Deleted");
            toast.error("delete Successfully", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            refetch();
          }
        });
    }
  };

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Verify</th>
            <th>Delete User</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={user.photoUrl}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user.name}</div>
                    <div className="text-sm opacity-50">{user.role}</div>
                  </div>
                </div>
              </td>
              <td>{user.email}</td>
              <td>
                {user.role === "Admin" ? (
                  <button className="bg-blue-700  text-white py-1 px-2 rounded-lg">
                    Admin
                  </button>
                ) : (
                  <button className="bg-blue-700  text-white py-1 px-2 rounded-lg">
                    Verify
                  </button>
                )}
              </td>
              <th>
                {user.role === "Admin" ? (
                  <button
                    className="bg-red-700  text-white py-1 px-2 rounded-lg"
                    disabled
                  >
                    Admin
                  </button>
                ) : (
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="bg-red-700  text-white py-1 px-2 rounded-lg"
                  >
                    Delete
                  </button>
                )}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUser;
