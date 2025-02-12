import React, { useEffect, useState } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setShouldRender(true);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setShouldRender(false);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-xl font-bold mb-4">
          THIS IS OUR FIRST PROTOTYPE 😀
        </h2>
        <p>
          We are a young company and this is our first-ever version of About It.
          We are keen to get your feedback, which you can give at any point by
          clicking the &apos;Give Feedback&apos; button on every page. Please
          consider letting us know what works, what doesn&apos;t, and what
          you&apos;d like to see in the coming versions!
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

export default Modal;
