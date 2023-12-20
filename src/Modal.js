import React from 'react';
import './Modal.css'; // Import your modal CSS

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
