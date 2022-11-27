import React from "react";

const User = ({ user, handleDelete, handelUserVerify }) => {
  const { photoUrl, name, role, email, _id, verify } = user;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photoUrl} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{role}</div>
          </div>
        </div>
      </td>
      <td>{email}</td>
      <td>
        {role === "Admin" ? (
          <button
            className="bg-blue-700  text-white py-1 px-2 rounded-lg"
            disabled
          >
            Admin
          </button>
        ) : role === "Seller" ? (
          <button
            onClick={() => handelUserVerify(_id)}
            className="bg-blue-700  text-white py-1 px-2 rounded-lg"
          >
            {verify === "true" ? "verified" : "Verify"}
          </button>
        ) : (
          <p> ---- </p>
        )}

        {/* {role === "Admin" ? (
          <button
            className="bg-blue-700  text-white py-1 px-2 rounded-lg"
            disabled
          >
            Admin
          </button>
        ) : role === "Buyer" ? (
          <p>---</p>
        ) : (
              
            role === "Seller" && verify === "true" ? <p>bbb</p>: <p>ooooo</p>
          
        )} */}
      </td>
      <th>
        {role === "Admin" ? (
          <button
            className="bg-red-700  text-white py-1 px-2 rounded-lg"
            disabled
          >
            Admin
          </button>
        ) : (
          <button
            onClick={() => handleDelete(_id)}
            className="bg-red-700  text-white py-1 px-2 rounded-lg"
          >
            Delete
          </button>
        )}
      </th>
    </tr>
  );
};

export default User;
