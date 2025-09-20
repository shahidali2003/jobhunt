import React, { useState } from "react";
import EditForm from "./EditForm";

const ApplicationCard = ({ item, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="bg-white p-5 rounded-xl shadow-md mb-4 flex flex-col md:flex-row md:justify-between md:items-center hover:shadow-lg transition-shadow duration-300">
      
      {/* Application Info */}
      <div className="flex flex-col md:flex-row md:gap-6 w-full">
        <h3 className="font-bold text-lg text-indigo-700">{item.company}</h3>
        <p className="text-gray-600">{item.role}</p>
        <p className="text-gray-500">{new Date(item.date).toLocaleDateString()}</p>
        <p className={`font-medium px-2 py-1 rounded-md 
          ${item.status === "Applied" ? "bg-blue-100 text-blue-700" :
            item.status === "Interview" ? "bg-yellow-100 text-yellow-800" :
            item.status === "Offered" ? "bg-green-100 text-green-700" :
            "bg-red-100 text-red-700"}`}>
          {item.status}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-3 md:mt-0">
        <button
          onClick={() => setIsEditing(true)}
          className="bg-indigo-500 text-white px-4 py-1 rounded-lg hover:bg-indigo-600 transition"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(item.id)}
          className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>

      {/* Edit modal */}
      {isEditing && (
        <EditForm
          item={item}
          onSave={onUpdate}
          onClose={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default ApplicationCard;
