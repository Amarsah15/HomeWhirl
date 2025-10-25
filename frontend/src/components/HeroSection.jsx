import React from "react";

function HeroSection() {
  const handleSearch = (e) => {
    e.preventDefault();
    // You can later integrate search logic here
    console.log("Search triggered");
  };

  return (
    <section className="relative w-full h-[520px] bg-home-banner bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center">
        <h1 className="text-white xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-semibold p-2 rounded-sm">
          Discover Your New Home
        </h1>

        <form onSubmit={handleSearch} className="mt-6">
          <div className="flex justify-center gap-2 flex-wrap">
            <label htmlFor="search" className="sr-only">
              Search by location
            </label>
            <input
              id="search"
              type="text"
              className="border border-gray-400 bg-white w-72 md:w-96 p-2 rounded-md text-lg"
              placeholder="Search by location"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white text-lg rounded-md font-semibold hover:bg-blue-600 transition-colors"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default HeroSection;
