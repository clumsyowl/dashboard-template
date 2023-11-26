import React from "react";
import Content from "../components/Content.jsx";

// This contains the Dashboard page content.
function HomePage() {
  return (
    <div className="flex flex-col flex-wrap sm:flex-row">
      {/* Stat Block 1 */}
      <div className="mb-6 w-full md:mb-0 md:w-4/12 md:px-2">
        <div className="rounded-2xl bg-white p-4 shadow-lg">
          <p className="mb-4 text-xl font-medium text-gray-800">Entreprise</p>
          <p className="text-3xl font-bold text-gray-900">
            $0
            <span className="text-sm text-gray-300">/ month</span>
          </p>
          <p className="mt-4 text-xs  text-gray-600">
            For most businesses that want to optimize web queries.
          </p>
        </div>
      </div>
      {/* Stat Block 2 */}
      <div className="mb-6 w-full md:mb-0 md:w-4/12 md:px-2">
        <div className="rounded-2xl bg-white p-4 shadow-lg">
          <p className="mb-4 text-xl font-medium text-gray-800">Entreprise</p>
          <p className="text-3xl font-bold text-gray-900">
            $0
            <span className="text-sm text-gray-300">/ month</span>
          </p>
          <p className="mt-4 text-xs  text-gray-600">
            For most businesses that want to optimize web queries.
          </p>
        </div>
      </div>
      {/* Stat Block 3 */}
      <div className="mb-6 w-full md:mb-0 md:w-4/12 md:px-2">
        <div className="rounded-2xl bg-white p-4 shadow-lg">
          <p className="mb-4 text-xl font-medium text-gray-800">Entreprise</p>
          <p className="text-3xl font-bold text-gray-900">
            $0
            <span className="text-sm text-gray-300">/ month</span>
          </p>
          <p className="mt-4 text-xs  text-gray-600">
            For most businesses that want to optimize web queries.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
