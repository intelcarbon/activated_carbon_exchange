import React from 'react';
import Link from 'next/link';

const PhysicalFormsOfActivatedCarbon = () => {
  return (
    <div className="p-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-3xl font-bold mb-4 text-gray-900">Physical Forms of Activated Carbon</h1>
        <p className="text-justify text-lg mb-6 text-gray-700">
          Activated carbon comes in various physical forms, each tailored for specific applications and performance characteristics. Understanding these forms helps in selecting the right type of activated carbon for your needs.
        </p>
        <ul className="space-y-6">
          <li className="border-b pb-4">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              <Link href="physical-forms-of-activated-carbon/granular-activated-carbon" className="text-blue-600 hover:underline">
                Granular Activated Carbon
              </Link>
            </h2>
            <p className="text-gray-700">Granular activated carbon (GAC) has a relatively large particle size, making it suitable for applications such as water treatment and air purification.</p>
          </li>
          <li className="border-b pb-4">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              <Link href="physical-forms-of-activated-carbon/pelleted-activated-carbon" className="text-blue-600 hover:underline">
                Pelleted Activated Carbon
              </Link>
            </h2>
            <p className="text-gray-700">Pelleted activated carbon (PAC) is formed into cylindrical pellets, providing a low-pressure drop and high mechanical strength, ideal for gas phase applications.</p>
          </li>
          <li className="border-b pb-4">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              <Link href="physical-forms-of-activated-carbon/powdered-activated-carbon" className="text-blue-600 hover:underline">
                Powdered Activated Carbon
              </Link>
            </h2>
            <p className="text-gray-700">Powdered activated carbon (PAC) consists of fine particles, offering a high surface area and quick adsorption kinetics, suitable for liquid phase applications.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PhysicalFormsOfActivatedCarbon;
