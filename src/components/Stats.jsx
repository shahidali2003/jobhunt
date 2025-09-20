import React from "react";

const Stats = ({ items }) => {
  const appliedCount = items.filter((i) => i.status === "Applied").length;
  const interviewCount = items.filter((i) => i.status === "Interview").length;
  const offeredCount = items.filter((i) => i.status === "Offered").length;
  const rejectedCount = items.filter((i) => i.status === "Rejected").length;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
      <div className="bg-blue-500 text-white p-4 rounded-md shadow text-center">
        <p className="text-2xl font-bold">{appliedCount}</p>
        <p className="text-sm">Applied</p>
      </div>
      <div className="bg-yellow-500 text-white p-4 rounded-md shadow text-center">
        <p className="text-2xl font-bold">{interviewCount}</p>
        <p className="text-sm">Interview</p>
      </div>
      <div className="bg-green-500 text-white p-4 rounded-md shadow text-center">
        <p className="text-2xl font-bold">{offeredCount}</p>
        <p className="text-sm">Offered</p>
      </div>
      <div className="bg-red-500 text-white p-4 rounded-md shadow text-center">
        <p className="text-2xl font-bold">{rejectedCount}</p>
        <p className="text-sm">Rejected</p>
      </div>
    </div>
  );
};

export default Stats;
