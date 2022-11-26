import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../AuthProvider/AuthProvider";

const BookingModal = ({ modalData }) => {
  console.log(modalData);
  const { name, resalePrice, shopLocation } = modalData;

  const { user } = useContext(AuthContext);
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    // const price = form.price.value;
    const name = form.name.value;
    const location = form.location.value;

    const buying = {
      productName: name,
      resalePrice,
      email,
      phone,
      username,
      location,
    };
    fetch("http://localhost:5000/addProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(buying),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("ADD ODERS");
          form.reset();
        } else {
          toast.error("ADD AGIN");
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="oders-modal" className="modal-toggle" />

      <div className="modal">
        <div className="modal-box text-gray-700 relative">
          <label
            htmlFor="oders-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              name="username"
              type="text"
              defaultValue={user?.displayName}
              disabled
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              className="input w-full input-bordered"
            />
            <input
              name="name"
              type="text"
              defaultValue={name}
              disabled
              className="input w-full input-bordered"
            />
            <input
              name="price"
              type="text"
              defaultValue={resalePrice}
              disabled
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="Meeting Location"
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
