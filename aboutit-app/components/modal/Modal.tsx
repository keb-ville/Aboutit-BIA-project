// components/Modal.tsx

import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render modal if it's not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-xl font-bold mb-4">
          THIS IS OUR FIRST PROTOTYPE 😀
        </h2>
        <p>
          We are a young company and this is our first-ever version of About it.
          We are keen to get your feedback, which you can give at any point by
          clicking the &apos;GIVE US YOUR FEEDBACK&apos; button on every page.
          Please consider letting us know what works, what doesn&apos;t, and
          what you&apos;d like to see in the coming versions!
        </p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

/*
Could we change it to
As an emerging company, this is our first version of About It. We’d love to hear your feedback! You can share your thoughts anytime by clicking the 'GIVE US YOUR FEEDBACK' button. Let us know what you love, what could be improved, and what you'd like to see in future versions!

OR

This is just the beginning for About It, and we’re excited to grow with your input! Your feedback is invaluable to us. Please click the 'GIVE US YOUR FEEDBACK' button to share what you love, what could be better, and what you'd like to see in future versions.

*/
export default Modal;
