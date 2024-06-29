import React from 'react';
import Link from 'next/link';

const PrecursorAndBaseMaterials = () => {
  return (
    <div className="p-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-3xl font-bold mb-4 text-gray-900">Precursor and Base Materials</h1>
        <p className="text-justify text-lg mb-6 text-gray-700">
          The precursor and base materials used in the production of activated carbon significantly influence its properties and performance. Different materials offer unique characteristics suitable for various applications.
        </p>
        <ul className="space-y-6">
          <li className="border-b pb-4">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              <Link href="precursor-and-base-materials/coal-based-carbon" className="text-blue-600 hover:underline">
                Coal-Based Carbon
              </Link>
            </h2>
            <p className="text-gray-700">Coal-based activated carbon is known for its high density and mechanical strength, making it suitable for a wide range of applications including water and air purification.</p>
          </li>
          <li className="border-b pb-4">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              <Link href="precursor-and-base-materials/coconut-shell-carbon" className="text-blue-600 hover:underline">
                Coconut Shell Carbon
              </Link>
            </h2>
            <p className="text-gray-700">Coconut shell activated carbon offers a high surface area and microporous structure, ideal for applications requiring high adsorption capacity such as air purification and gold recovery.</p>
          </li>
          <li className="border-b pb-4">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              <Link href="precursor-and-base-materials/wood-based-carbon" className="text-blue-600 hover:underline">
                Wood-Based Carbon
              </Link>
            </h2>
            <p className="text-gray-700">Wood-based activated carbon has a large pore volume and is effective for decolorization and purification in liquid phase applications.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PrecursorAndBaseMaterials;
