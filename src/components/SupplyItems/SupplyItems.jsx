import React from "react";
import SupplyItem from "./SupplyItem";

const SupplyItems = () => {
  const items = [
    "Water Treatment Plant & Equipment",
    "All Types of MS & SS Tank",
    "FRP Vessel, Multiport Valve",
    "Various Types of Industrial Pump",
    "Resin (Cation, Anion & Mixed bed)",
    "Manganese Di-Oxide, Manganese Zeolite",
    "Activated Carbon, Anthracite",
    "All Types of Sand, Gravels & Pebbles",
    "RO Membrane, Cartridge Filter",
    "Different Types of Water Test Kid",
    "Cooling Tower & Accessories",
    "Chemical (ETP, Boiler, Cooling Tower)",
    "Boiler De-Scaling Chemical",
    "Heat Exchanger Gasket & Plate",
    "RO Antiscalant & Engine Coolant",
    "Construction Chemical",
    "Sodium Chloride (Common Salt/Table Salt)",
    "Food Ingredients, Food Colors",
    "Food Flavours, Food Chemicals",
    "Convey Chain Lubricant",
    "Consultancy Service",
  ];
  return (
    <div className="grid grid-cols-1 gap-2 p-4">
      <h2 className="text-2xl font-bold text-center mb-4 text-blue-700">
        Our Manufacturing & Supply Items
      </h2>
      <div className="grid grid-cols-3 gap-2 p-4">
        {items.map((item, index) => (
          <SupplyItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SupplyItems;
