import React from 'react';
import Link from 'next/link';

const ActivatedCarbonFundamentals = () => {
  return (
    <div className="p-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-4xl font-bold mb-8 text-gray-900">Activated Carbon Fundamentals</h1>
        <p className="text-justify text-lg mb-12 text-gray-700">
          Welcome to the Activated Carbon Fundamentals section. Here, you'll find comprehensive information on the various aspects of activated carbon, its production, properties, and applications. Each section is designed to provide detailed insights into specific areas, ensuring you have the knowledge needed to make informed decisions about activated carbon.
        </p>
        <ul className="space-y-8">
          <li className="border-b pb-6">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
              <Link href="activation-techniques" className="text-blue-600 hover:underline">
                Activation Techniques
              </Link>
            </h2>
            <p className="text-gray-700">Learn about the different methods used to activate carbon, enhancing its adsorption properties and increasing its surface area. This section covers physical and chemical activation processes in detail.</p>
          </li>
          <li className="border-b pb-6">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
              <Link href="activated-carbon-fundamentals/performance-evaluation-metrics" className="text-blue-600 hover:underline">
                Performance Evaluation Metrics
              </Link>
            </h2>
            <p className="text-gray-700">Explore the key metrics used to evaluate the performance of activated carbon. Understand how properties like apparent density, butane activity, and iodine number impact its effectiveness.</p>
          </li>
          <li className="border-b pb-6">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
              <Link href="activated-carbon-fundamentals/physical-and-chemical-properties" className="text-blue-600 hover:underline">
                Physical and Chemical Properties
              </Link>
            </h2>
            <p className="text-gray-700">Delve into the physical and chemical properties of activated carbon, including absorption capacity, kinetics, pore size distribution, and surface area. These properties determine its suitability for various applications.</p>
          </li>
          <li className="border-b pb-6">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
              <Link href="activated-carbon-fundamentals/physical-forms-of-activated-carbon" className="text-blue-600 hover:underline">
                Physical Forms of Activated Carbon
              </Link>
            </h2>
            <p className="text-gray-700">Understand the different physical forms of activated carbon, such as granular, pelleted, and powdered forms. Each form has specific applications and performance characteristics.</p>
          </li>
          <li className="border-b pb-6">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
              <Link href="activated-carbon-fundamentals/precursor-and-base-materials" className="text-blue-600 hover:underline">
                Precursor and Base Materials
              </Link>
            </h2>
            <p className="text-gray-700">Learn about the various precursor and base materials used to produce activated carbon, including coal, coconut shell, and wood. Each material imparts unique properties to the final product.</p>
          </li>
          <li className="pb-6">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
              <Link href="activated-carbon-fundamentals/specialty-treatments" className="text-blue-600 hover:underline">
                Specialty Treatments
              </Link>
            </h2>
            <p className="text-gray-700">Discover the specialty treatments applied to activated carbon to enhance its performance for specific applications. This includes acid-washed, impregnated, and water-washed carbon.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ActivatedCarbonFundamentals;
