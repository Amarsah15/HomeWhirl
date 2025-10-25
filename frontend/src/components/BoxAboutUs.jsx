import React from "react";
import building from "../assets/images/verified-20k-list.svg";
import monthly from "../assets/images/unique-monthly-users.svg";
import data from "../assets/images/data-30-point.svg";

const BoxAboutUs = () => {
  return (
    <section className="bg-[#f5f5f5] shadow-md rounded-lg p-8 m-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center">
          <img
            src={building}
            alt="Icon showing verified listings"
            className="w-24 h-24 mb-4"
          />
          <h2 className="text-xl font-bold mb-2">20K+ Verified Listings</h2>
          <p className="text-gray-700">
            Choose from thousands of 100% genuine PG homes. <br />
            Single room or shared, we have got it all.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center">
          <img
            src={monthly}
            alt="Icon showing unique monthly users"
            className="w-24 h-24 mb-4"
          />
          <h2 className="text-xl font-bold mb-2">
            75,000+ Unique Monthly Users
          </h2>
          <p className="text-gray-700">
            Trust us to find the right tenant for you. <br />
            We reach where most platforms don’t.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center">
          <img
            src={data}
            alt="Icon showing data points per PG"
            className="w-24 h-24 mb-4"
          />
          <h2 className="text-xl font-bold mb-2">300+ Data Points Per PG</h2>
          <p className="text-gray-700">
            We make it easier for you to select a PG with <br />
            the highest data accuracy in the industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BoxAboutUs;
