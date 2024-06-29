import React from 'react';
import Link from 'next/link';

const PerformanceEvaluationMetrics = () => {
  return (
    <div className="p-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-3xl font-bold mb-4 text-gray-900">Performance Evaluation Metrics</h1>
        <p className="text-justify text-lg mb-6 text-gray-700">
          Evaluating the performance of activated carbon involves several key metrics. Each metric provides insights into different aspects of activated carbon's capabilities and applications.
        </p>
        <ul className="space-y-6">
          <li className="border-b pb-4">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              <Link href="performance-evaluation-metrics/apparent-density" className="text-blue-600 hover:underline">
                Apparent Density
              </Link>
            </h2>
            <p className="text-gray-700">Measures the bulk density, indicating capacity and space requirements in various applications.</p>
          </li>
          <li className="border-b pb-4">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              <Link href="performance-evaluation-metrics/butane-activity" className="text-blue-600 hover:underline">
                Butane Activity
              </Link>
            </h2>
            <p className="text-gray-700">Indicates the capacity to adsorb butane gas, providing insights into effectiveness in gas phase applications.</p>
          </li>
          <li className="border-b pb-4">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              <Link href="performance-evaluation-metrics/carbon-tetrachloride-number" className="text-blue-600 hover:underline">
                Carbon Tetrachloride Number
              </Link>
            </h2>
            <p className="text-gray-700">Reflects pore volume, essential for understanding adsorption capacity for larger molecules.</p>
          </li>
          <li className="border-b pb-4">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              <Link href="performance-evaluation-metrics/iodine-number" className="text-blue-600 hover:underline">
                Iodine Number
              </Link>
            </h2>
            <p className="text-gray-700">Represents micropore content, a key indicator of adsorption capacity for smaller molecules.</p>
          </li>
          <li className="border-b pb-4">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              <Link href="performance-evaluation-metrics/mean-particle-diameter" className="text-blue-600 hover:underline">
                Mean Particle Diameter
              </Link>
            </h2>
            <p className="text-gray-700">Provides the average particle size, influencing flow and filtration characteristics.</p>
          </li>
          <li className="border-b pb-4">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              <Link href="performance-evaluation-metrics/mesh-size-distribution" className="text-blue-600 hover:underline">
                Mesh Size Distribution
              </Link>
            </h2>
            <p className="text-gray-700">Characterizes the range of particle sizes, affecting performance in filtration and adsorption applications.</p>
          </li>
          <li className="border-b pb-4">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              <Link href="performance-evaluation-metrics/surface-area-(bet-n2)" className="text-blue-600 hover:underline">
                Surface Area (BET N2)
              </Link>
            </h2>
            <p className="text-gray-700">Measures the total surface area of pores available for adsorption, crucial for assessing overall capacity.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PerformanceEvaluationMetrics;
