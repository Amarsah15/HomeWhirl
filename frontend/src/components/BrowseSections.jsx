import React, { useState } from "react";
import Image1 from "../assets/images/image1.jpg";
import Image2 from "../assets/images/image2.jpg";
import Image3 from "../assets/images/image3.jpg";
import Image4 from "../assets/images/image4.jpg";
import Image5 from "../assets/images/image5.jpg";
import Image6 from "../assets/images/image6.jpg";
import Image7 from "../assets/images/maid_cooking.jpg";
import Image8 from "../assets/images/laundry.jpg";
import Image9 from "../assets/images/waterservice.jpg";
import Image10 from "../assets/images/wifiservice.jpg";
import Image11 from "../assets/images/cleaningservice.jpg";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";

const BrowseSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: Image1,
      description: "Student Friendly PGs",
      exploreText: "Explore",
    },
    { image: Image2, description: "PG for Girls", exploreText: "Explore" },
    { image: Image3, description: "PG for Boys", exploreText: "Explore" },
    { image: Image4, description: "Hostel for Girls", exploreText: "Explore" },
    { image: Image5, description: "Hostel for Boys", exploreText: "Explore" },
    {
      image: Image6,
      description: "Hostel for Working Women",
      exploreText: "Explore",
    },
    { image: Image7, description: "Cooking Maid", exploreText: "Explore" },
    { image: Image8, description: "Laundry", exploreText: "Explore" },
    { image: Image9, description: "Water Service", exploreText: "Explore" },
    { image: Image10, description: "Wifi Service", exploreText: "Explore" },
    { image: Image11, description: "Cleaning Service", exploreText: "Explore" },
  ];

  const slidesToShow = 4;
  const totalSlides = slides.length;

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide + slidesToShow >= totalSlides ? 0 : prevSlide + slidesToShow
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - slidesToShow : prevSlide - slidesToShow
    );
  };

  return (
    <div className="py-16 bg-linear-to-r from-gray-200 via-gray-300 to-gray-400">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Find a PG & Hostel Away from Home
        </h2>
        <div className="relative flex items-center overflow-hidden">
          <button
            onClick={handlePrevSlide}
            className="absolute left-0 z-10 p-2 bg-gray-900 bg-opacity-50 text-white rounded-full ml-2 transition-all duration-300 hover:bg-opacity-70"
          >
            <FaArrowLeftLong className="h-6 w-6" />
          </button>
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="w-1/4 px-2 shrink-0 transition-transform duration-300 hover:scale-105"
              >
                <div className="rounded-lg shadow-md bg-white p-4">
                  <img
                    className="w-full h-48 object-cover rounded-lg"
                    src={slide.image}
                    alt={slide.description}
                  />
                  <div className="py-2 text-center text-black font-medium">
                    {slide.description}
                  </div>
                  <div className="flex items-center justify-center h-full">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">
                      {slide.exploreText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleNextSlide}
            className="absolute right-0 z-10 p-2 bg-gray-900 bg-opacity-50 text-white rounded-full mr-2 transition-all duration-300 hover:bg-opacity-70"
          >
            <FaArrowRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrowseSection;
