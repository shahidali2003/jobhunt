import React, { useState, useEffect } from "react";

const EditForm = ({ item, onSave, onClose }) => {
  const [company, setCompany] = useState(item.company);
  const [role, setRole] = useState(item.role);
  const [date, setDate] = useState(item.date);
  const [status, setStatus] = useState(item.status);

  useEffect(() => {
    setCompany(item.company);
    setRole(item.role);
    setDate(item.date);
    setStatus(item.status);
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!company || !role || !date) {
      alert("Please fill all fields!");
      return;
    }
    onSave({ ...item, company, role, date, status });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-md shadow-lg w-11/12 max-w-md"
      >
        <h2 className="text-xl font-semibold mb-4">Edit Application</h2>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="border px-3 py-2 rounded-md w-full"
            placeholder="Company Name"
          />
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="border px-3 py-2 rounded-md w-full"
            placeholder="Role"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border px-3 py-2 rounded-md w-full"
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border px-3 py-2 rounded-md w-full"
          >
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Offered">Offered</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;

