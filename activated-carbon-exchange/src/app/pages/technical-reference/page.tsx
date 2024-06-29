import React from 'react';
import Link from 'next/link';

const categories = [
  {
    name: 'Performance Evaluation Metrics',
    terms: [
      { name: 'Apparent Density', link: 'performance-evaluation-metrics/apparent-density' },
      { name: 'Butane Activity', link: 'performance-evaluation-metrics/butane-activity' },
      { name: 'Carbon Tetrachloride Number', link: 'performance-evaluation-metrics/carbon-tetrachloride-number' },
      { name: 'Iodine Number', link: 'performance-evaluation-metrics/iodine-number' },
      { name: 'Mean Particle Diameter', link: 'performance-evaluation-metrics/mean-particle-diameter' },
      { name: 'Mesh Size Distribution', link: 'performance-evaluation-metrics/mesh-size-distribution' },
      { name: 'Surface Area (BET N2)', link: 'performance-evaluation-metrics/surface-area-bet-n2' },
    ],
  },
  {
    name: 'Physical and Chemical Properties',
    terms: [
      { name: 'Absorption Capacity', link: 'physical-and-chemical-properties/absorption-capacity' },
      { name: 'Absorption Kinetics', link: 'physical-and-chemical-properties/absorption-kinetics' },
      { name: 'Pore Size Distribution', link: 'physical-and-chemical-properties/pore-size-distribution' },
      { name: 'Surface Area', link: 'physical-and-chemical-properties/surface-area' },
      { name: 'Surface Chemistry', link: 'physical-and-chemical-properties/surface-chemistry' },
    ],
  },
  {
    name: 'Physical Forms of Activated Carbon',
    terms: [
      { name: 'Granular Activated Carbon', link: 'physical-forms-of-activated-carbon/granular-activated-carbon' },
      { name: 'Pelleted Activated Carbon', link: 'physical-forms-of-activated-carbon/pelleted-activated-carbon' },
      { name: 'Powdered Activated Carbon', link: 'physical-forms-of-activated-carbon/powdered-activated-carbon' },
    ],
  },
  {
    name: 'Precursor and Base Materials',
    terms: [
      { name: 'Coal-Based Carbon', link: 'precursor-and-base-materials/coal-based-carbon' },
      { name: 'Coconut Shell Carbon', link: 'precursor-and-base-materials/coconut-shell-carbon' },
      { name: 'Wood-Based Carbon', link: 'precursor-and-base-materials/wood-based-carbon' },
    ],
  },
  {
    name: 'Specialty Treatments',
    terms: [
      { name: 'Acid-Washed Carbon', link: 'specialty-treatments/acid-washed-carbon' },
      { name: 'Impregnated Carbon', link: 'specialty-treatments/impregnated-carbon' },
      { name: 'Water-Washed Carbon', link: 'specialty-treatments/water-washed-carbon' },
    ],
  },
];

const Page = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Technical Reference</h1>
      {categories.map(category => (
        <div key={category.name} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
          <ul className="list-disc list-inside">
            {category.terms.map(term => (
              <li key={term.link} className="mb-1">
                <Link href={`/technical-reference/${term.link}`}>
                  <span className="text-blue-600 hover:underline cursor-pointer">{term.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Page;
  