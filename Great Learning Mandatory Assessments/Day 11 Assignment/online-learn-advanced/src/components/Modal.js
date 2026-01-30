import React from "react";
import ReactDOM from "react-dom";

export default function Modal({ show, onClose }) {
  if (!show) return null;

  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div className="modal-content">
        <h3>This is a Portal Modal</h3>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body
  );
}
