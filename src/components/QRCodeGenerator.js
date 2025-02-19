import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRCodeGenerator = ({ qrValue }) => {
  return (
    qrValue && (
      <div className="d-flex justify-content-center mt-4">
        <QRCodeCanvas value={qrValue} size={180} />
      </div>
    )
  );
};

export default QRCodeGenerator;
