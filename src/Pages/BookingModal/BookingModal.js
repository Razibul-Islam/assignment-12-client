import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../AuthProvider/AuthProvider";

const BookingModal = ({ modalData, setModalData }) => {
  // console.log(modalData);
  const { name, resalePrice, image, _id } = modalData;

  const { user } = useContext(AuthContext);
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const name = form.name.value;
    const location = form.location.value;

    const buying = {
      productName: name,
      resalePrice,
      email,
      phone,
      username,
      location,
      productImage: image,
      productId: _id,
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(buying),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Order sent please Pay now for confirm your Order");
          form.reset();
          setModalData(null);
        } else  {
          toast.error(data.message);
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="buy-modal" className="modal-toggle" />

      <div className="modal">
        <div className="modal-box text-gray-700 relative">
          <label
            htmlFor="buy-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Buy Now</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <div>
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                name="username"
                type="text"
                defaultValue={user?.displayName}
                disabled
                className="input w-full input-bordered"
              />
            </div>
            <div className="mt-2">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <input
                name="email"
                type="email"
                defaultValue={user?.email}
                disabled
                className="input w-full input-bordered"
              />
            </div>
            <div className="mt-2">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                name="name"
                type="text"
                defaultValue={name}
                disabled
                className="input w-full input-bordered"
              />
            </div>
            <div className="mt-2">
              <label className="label">
                <span className="label-text">Product Price</span>
              </label>
              <input
                name="price"
                type="text"
                defaultValue={resalePrice}
                disabled
                className="input w-full input-bordered"
              />
            </div>
            <div className="mt-2">
              <label className="label">
                <span className="label-text">Where You want to meet?</span>
              </label>
              <input
                name="location"
                type="text"
                placeholder="Meeting Location"
                className="input w-full input-bordered"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Your Phone Number</span>
              </label>
              <input
                name="phone"
                type="text"
                pattern="[0-9]+"
                placeholder="Phone Number"
                className="input w-full input-bordered"
                required
              />
            </div>
            <br />
            <input
              className="btn bg-[#ffbd59] border-none w-full"
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
