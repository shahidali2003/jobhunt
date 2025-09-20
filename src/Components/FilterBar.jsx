import React, { useState } from "react";
import { FiSearch, FiFilter, FiCalendar } from "react-icons/fi";

const FilterBar = ({ onSearch, onFilterStatus, onSort }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleFilter = (e) => {
    const value = e.target.value;
    setStatusFilter(value);
    onFilterStatus(value);
  };

  const handleSort = (e) => {
    const value = e.target.value;
    setSortOrder(value);
    onSort(value);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-5 rounded-xl shadow-lg flex flex-col md:flex-row gap-5 items-center justify-between flex-wrap">
      
      {/* Search */}
      <div className="relative w-full md:w-1/3">
        <FiSearch className="absolute top-3 left-3 text-gray-400" />
        <input
          type="text"
          placeholder="🔍 Search company or role..."
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-300 px-10 py-2 rounded-lg w-full 
                     focus:outline-none focus:ring-2 focus:ring-indigo-400 
                     shadow-sm hover:border-indigo-400 transition duration-200"
        />
      </div>

      {/* Filter by Status */}
      <div className="relative w-full md:w-1/4">
        <FiFilter className="absolute top-3 left-3 text-gray-400" />
        <select
          value={statusFilter}
          onChange={handleFilter}
          className="border border-gray-300 px-10 py-2 rounded-lg w-full 
                     focus:outline-none focus:ring-2 focus:ring-indigo-400 
                     shadow-sm hover:border-indigo-400 transition duration-200 cursor-pointer"
        >
          <option value="">📂 All Status</option>
          <option value="Applied">✅ Applied</option>
          <option value="Interview">🎤 Interview</option>
          <option value="Offered">🎉 Offered</option>
          <option value="Rejected">❌ Rejected</option>
        </select>
      </div>

      {/* Sort by Date */}
      <div className="relative w-full md:w-1/4">
        <FiCalendar className="absolute top-3 left-3 text-gray-400" />
        <select
          value={sortOrder}
          onChange={handleSort}
          className="border border-gray-300 px-10 py-2 rounded-lg w-full 
                     focus:outline-none focus:ring-2 focus:ring-indigo-400 
                     shadow-sm hover:border-indigo-400 transition duration-200 cursor-pointer"
        >
          <option value="">📅 Sort by Date</option>
          <option value="asc">⬆️ Oldest First</option>
          <option value="desc">⬇️ Newest First</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
