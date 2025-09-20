import React, { useState, useEffect } from "react";
import Header from "./components/Header"
import AddForm from "./components/AddForm";
import FilterBar from "./components/FilterBar";
import Stats from "./components/Stats";
import ApplicationCard from "./components/ApplicationCard";

const App = () => {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("applications")) || []
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    localStorage.setItem("applications", JSON.stringify(items));
  }, [items]);

  const clearAll = () => {
    if (window.confirm("Clear all applications?")) setItems([]);
  };

  const addApplication = (app) => setItems([app, ...items]);

  const handleDelete = (id) => {
    if (window.confirm("Delete this application?")) {
      setItems(items.filter((i) => i.id !== id));
    }
  };

  const handleUpdate = (updated) =>
    setItems(items.map((i) => (i.id === updated.id ? updated : i)));

  // ✅ Safe filtering & sorting
  const filteredItems = items
    .filter((i) => {
      const company = i.company?.toLowerCase() || "";
      const role = i.role?.toLowerCase() || "";
      return (
        (company.includes(searchTerm.toLowerCase()) ||
          role.includes(searchTerm.toLowerCase())) &&
        (statusFilter === "" || i.status === statusFilter)
      );
    })
    .sort((a, b) => {
      if (!sortOrder) return 0;
      const dateA = a.date ? new Date(a.date) : new Date(0);
      const dateB = b.date ? new Date(b.date) : new Date(0);
      if (sortOrder === "asc") return dateA - dateB;
      if (sortOrder === "desc") return dateB - dateA;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Header onClearAll={clearAll} />
      <AddForm onAdd={addApplication} />
      <Stats items={items} />
      <FilterBar
        onSearch={setSearchTerm}
        onFilterStatus={setStatusFilter}
        onSort={setSortOrder}
      />

      <div className="mt-6">
        {filteredItems.length === 0 ? (
          <p className="text-center text-gray-500">No applications found.</p>
        ) : (
          <ul>
            {filteredItems.map((item) => (
              <ApplicationCard
                key={item.id}
                item={item}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
