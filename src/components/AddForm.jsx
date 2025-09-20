import React, { useState } from "react";

const AddForm = ({ onAdd }) => {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Applied");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!company || !role || !date) {
      alert("Please fill all fields!");
      return;
    }
    onAdd({ id: Date.now(), company, role, date, status });
    setCompany(""); setRole(""); setDate(""); setStatus("Applied");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-xl mt-4 shadow-xl mb-6 max-w-3xl mx-auto border border-gray-200"
    >
      <h2 className="text-2xl font-bold mb-6 text-indigo-600">Add New Job Application</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="border border-gray-300 px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
        />

        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border border-gray-300 px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border border-gray-300 px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border border-gray-300 px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
        >
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offered">Offered</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      <button
        type="submit"
        className="mt-6 w-full md:w-auto bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 hover:shadow-lg transition transform hover:-translate-y-1"
      >
        Add Application
      </button>
    </form>
  );
};

export default AddForm;
