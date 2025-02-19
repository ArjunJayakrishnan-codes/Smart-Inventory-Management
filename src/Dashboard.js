import React, { useState } from "react";
import QRCodeGenerator from "./components/QRCodeGenerator";
import InventoryList from "./components/InventoryList";
import LowStockAlert from "./components/LowStockAlert";
import { FaQrcode, FaPlusCircle } from "react-icons/fa"; // Icons for buttons

function Dashboard() {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [qrValue, setQrValue] = useState("");
  const [stock, setStock] = useState({});
  const [lowStockItems, setLowStockItems] = useState([]);

  const generateQR = () => {
    if (product.trim() !== "") {
      setQrValue(`${window.location.origin}/product/${encodeURIComponent(product)}`);
    }
  };

  const addToInventory = () => {
    if (product.trim() !== "" && quantity > 0) {
      setStock((prev) => {
        const updatedStock = { ...prev, [product]: (prev[product] || 0) + quantity };
        checkLowStock(updatedStock);
        return updatedStock;
      });
      setProduct("");
      setQuantity(1);
    }
  };

  const checkLowStock = (updatedStock) => {
    const lowStock = Object.entries(updatedStock)
      .filter(([_, count]) => count < 5)
      .map(([item]) => item);
    setLowStockItems(lowStock);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 bg-light">
        <h2 className="text-center text-primary mb-4">📦 Smart Inventory System</h2>

        <div className="mb-3">
          <input
            type="text"
            placeholder="Enter product name"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            className="form-control"
          />
        </div>

        <div className="d-flex justify-content-between">
          <button onClick={generateQR} disabled={!product.trim()} className="btn btn-primary">
            <FaQrcode className="me-2" /> Generate QR
          </button>
          <button onClick={addToInventory} disabled={!product.trim()} className="btn btn-success">
            <FaPlusCircle className="me-2" /> Add to Inventory
          </button>
        </div>
      </div>

      {qrValue && (
        <div className="card shadow mt-4 p-4 text-center bg-white">
          <h3 className="text-success">QR Code for {product}</h3>
          <QRCodeGenerator qrValue={qrValue} />
        </div>
      )}

      <InventoryList stock={stock} />
      <LowStockAlert lowStockItems={lowStockItems} />
    </div>
  );
}

export default Dashboard;
