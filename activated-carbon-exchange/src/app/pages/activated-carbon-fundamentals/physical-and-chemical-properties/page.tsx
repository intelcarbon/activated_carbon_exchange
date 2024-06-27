import React from 'react';
import Link from 'next/link';

const PhysicalAndChemicalProperties = () => {
  return (
    <div className="p-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-3xl font-bold mb-4 text-gray-900">Physical and Chemical Properties</h1>
        <p className="text-justify text-lg mb-6 text-gray-700">
          The physical and chemical properties of activated carbon are critical for understanding its performance in various applications. Each property provides unique insights into the material's capabilities and potential uses.
        </p>
        <ul className="space-y-6">
          <li className="border-b pb-4">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              <Link href="physical-and-chemical-properties/absorption-capacity" className="text-blue-600 hover:underline">
                Absorption Capacity
              </Link>
            </h2>
            <p className="text-gray-700">Indicates the amount of a substance that activated carbon can adsorb, crucial for its effectiveness in purification and filtration processes.</p>
          </li>
          <li className="border-b pb-4">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              <Link href="physical-and-chemical-properties/absorption-kinetics" className="text-blue-600 hover:underline">
                Absorption Kinetics
              </Link>
            </h2>
            <p className="text-gray-700">Describes the rate at which activated carbon adsorbs substances, impacting the efficiency of filtration and purification systems.</p>
          </li>
          <li className="border-b pb-4">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              <Link href="physical-and-chemical-properties/pore-size-distribution" className="text-blue-600 hover:underline">
                Pore Size Distribution
              </Link>
            </h2>
            <p className="text-gray-700">Provides insights into the range of pore sizes within the activated carbon, affecting its adsorption capacity and suitability for various applications.</p>
          </li>
          <li className="border-b pb-4">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              <Link href="physical-and-chemical-properties/surface-area" className="text-blue-600 hover:underline">
                Surface Area
              </Link>
            </h2>
            <p className="text-gray-700">Measures the total surface area available for adsorption, a key indicator of the material's effectiveness in various applications.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PhysicalAndChemicalProperties;
