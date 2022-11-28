import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../AuthProvider/AuthProvider";

const ReportModal = ({ reportModalData, setReportModalData }) => {
  // console.log(reportModalData);
  const { name, _id } = reportModalData;

  const { user } = useContext(AuthContext);

  const handleReport = (e) => {
    e.preventDefault();
    const form = e.target;
    const reportmessage = form.reportmessage.value;

    const report = {
      productName: name,
      reportmessage,
      reporter: user?.email,
      reportProductId: _id,
    };
    fetch("https://classic-server-razibul-islam.vercel.app/addReport", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(report),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Report Sent");
          form.reset();
          setReportModalData(null);
        } else {
          toast.error("ADD AGIN");
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="report-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative text-black">
          <label
            htmlFor="report-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Report to Admin</h3>
          <form onSubmit={handleReport}>
            <div>
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                name="username"
                type="text"
                defaultValue={name}
                disabled
                className="input w-full input-bordered"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Message Here</span>
              </label>
              <textarea
                type="tel"
                name="reportmessage"
                rows={3}
                className="w-full px-4 resize-none py-3 border rounded-md dark:border-gray-700  dark:text-gray-700 focus:dark:border-violet-400 "
              ></textarea>
            </div>
            <input
              className="btn bg-[#ffbd59] border-none w-full mt-2"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
