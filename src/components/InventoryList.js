import React from "react";

const InventoryList = ({ stock }) => {
  return (
    <div className="mt-4 card shadow p-4 bg-light">
      <h3 className="text-primary text-center">📋 Inventory Stock</h3>
      <ul className="list-group">
        {Object.entries(stock).map(([item, count]) => (
          <li key={item} className="list-group-item d-flex justify-content-between">
            <span>{item}</span>
            <span className="badge bg-info">{count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryList;
