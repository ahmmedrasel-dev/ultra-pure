import React from "react";
import { FaCaretRight } from "react-icons/fa";

const SupplyItem = ({ item }) => {
  return (
    <div className="flex items-center py-2 px-4 border-gray-300 border rounded-lg hover:bg-gray-100 transition duration-300 ease-in-out">
      <FaCaretRight className="text-blue-500" />
      <span>{item}</span>
    </div>
  );
};

export default SupplyItem;
