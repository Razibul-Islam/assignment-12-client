import React from "react";

const User = ({ user, handleDelete }) => {
  const { photoUrl, name, role, email, _id } = user;
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
                  <button className="bg-blue-700  text-white py-1 px-2 rounded-lg" disabled>
            Admin
          </button>
        ) : (
          <button className="bg-blue-700  text-white py-1 px-2 rounded-lg">
            Verify
          </button>
        )}
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
