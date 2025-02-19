import React from "react";

const LowStockAlert = ({ lowStockItems }) => {
  return (
    lowStockItems.length > 0 && (
      <div className="mt-4 alert alert-danger text-center">
        <h3>⚠ Low Stock Alerts</h3>
        <ul className="list-unstyled">
          {lowStockItems.map((item) => (
            <li key={item}>{item} is running low!</li>
          ))}
        </ul>
      </div>
    )
  );
};

export default LowStockAlert;
