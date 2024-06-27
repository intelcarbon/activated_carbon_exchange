import React from 'react';
import Link from 'next/link';

const SpecialtyTreatments = () => {
  return (
    <div className="p-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-3xl font-bold mb-4 text-gray-900">Specialty Treatments</h1>
        <p className="text-justify text-lg mb-6 text-gray-700">
          Specialty treatments of activated carbon enhance its properties and make it suitable for specific applications. These treatments modify the physical and chemical characteristics of activated carbon to meet specialized needs.
        </p>
        <ul className="space-y-6">
          <li className="border-b pb-4">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              <Link href="specialty-treatments/acid-washed-carbon" className="text-blue-600 hover:underline">
                Acid Washed Carbon
              </Link>
            </h2>
            <p className="text-gray-700">Acid washed carbon is treated to remove impurities, enhancing its performance in applications requiring high purity levels.</p>
          </li>
          <li className="border-b pb-4">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              <Link href="specialty-treatments/impregnated-carbon" className="text-blue-600 hover:underline">
                Impregnated Carbon
              </Link>
            </h2>
            <p className="text-gray-700">Impregnated carbon is infused with chemicals to enhance its adsorption capacity for specific contaminants, making it suitable for industrial and environmental applications.</p>
          </li>
          <li className="border-b pb-4">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              <Link href="specialty-treatments/water-washed-carbon" className="text-blue-600 hover:underline">
                Water Washed Carbon
              </Link>
            </h2>
            <p className="text-gray-700">Water washed carbon undergoes a treatment process to remove soluble ash, making it ideal for applications in the food and beverage industry.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SpecialtyTreatments;
