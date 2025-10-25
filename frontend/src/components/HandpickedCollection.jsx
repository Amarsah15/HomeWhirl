import React from "react";
import Image1 from "../assets/images/img1.png";
import Image2 from "../assets/images/pg-with-wifi.jpeg";
import Image3 from "../assets/images/meals_included.png";
import Image4 from "../assets/images/students.jpg";
import Image5 from "../assets/images/single_rooms.png";
import Image6 from "../assets/images/for_professionals.png";

const HandpickedCollection = () => {
  return (
    <section className="container mx-auto px-6 py-10">
      <div className="flex flex-col lg:flex-row items-center bg-white rounded-lg shadow-lg p-8 lg:p-10">
        {/* Text Section */}
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0 lg:pr-8 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-red-500 mb-4 leading-snug">
            Explore our <br />
            Handpicked Collections <br />
            of PG Homes
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-2">
            Discover a variety of PG homes tailored to your needs. Whether
            you're a student or a professional, find the perfect place that fits
            your lifestyle and budget.
          </p>
        </div>

        {/* Image Grid */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { img: Image1, title: "Budget Friendly" },
            { img: Image2, title: "WIFI Included" },
            { img: Image3, title: "Meals Included" },
            { img: Image4, title: "For Students" },
            { img: Image5, title: "Single Rooms" },
            { img: Image6, title: "For Professionals" },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-md overflow-hidden bg-gray-100 shadow-md hover:shadow-lg transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <p className="text-center font-bold text-red-500 mt-2 mb-3">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HandpickedCollection;
