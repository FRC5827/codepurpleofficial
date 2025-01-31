import React, { useRef } from "react";
import './NoScrollBar.css';

// girls gen 2024
import P24GG2 from '../assets/galleryPhotos/girlsgen-2024/P24GG2.jpg';
import P24GG5 from '../assets/galleryPhotos/girlsgen-2024/P24GG5.jpg';

// bordie 2024
import P24BB3 from '../assets/galleryPhotos/bordieblast-2024/P24BB3.jpg';
import P24BB4 from '../assets/galleryPhotos/bordieblast-2024/P24BB4.jpg';
import P24BB5 from '../assets/galleryPhotos/bordieblast-2024/P24BB5.jpg';

function Gallery() {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleRedirect = () => {
    window.location.href = "/*";
  };

  return (
    <div className="h-[80vh] w-full bg-white">
      <div className="mx-24 mt-16">
        <div className="relative flex flex-row justify-end items-center gap-10">
          <div className="border-codePurple border-8 rounded-full w-full h-0 absolute left-[-30%]"></div>
          <h1 className="font-kode font-extrabold text-7xl z-10 text-black">
            Gallery
          </h1>
        </div>
      </div>

      <div className="relative overflow-hidden h-[60vh] mx-8">
        <div
          ref={scrollRef}
          className="flex flex-row gap-4 overflow-x-scroll scroll-smooth scrollbar-hide whitespace-nowrap h-full items-center"
        >
          {[P24GG2, P24GG5, P24BB3, P24BB4, P24BB5].map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="h-[50vh] w-[30vw] object-cover flex-shrink-0 rounded-lg mx-4"
            />
          ))}
          <div
            onClick={handleRedirect}
            className="h-[50vh] w-[30vw] flex-shrink-0 rounded-lg mx-4 bg-gray-300 flex items-center justify-center cursor-pointer hover:bg-codePurple hover:text-white transition-all duration-300"
          >
            <span className="text-xl font-bold ">Click To View All Pictures</span>
          </div>
        </div>

        <button
          onClick={() => handleScroll("left")}
          className="absolute top-1/2 left-8 transform -translate-y-full bg-white px-2 py-1 rounded-full shadow-md"
        >
          ←
        </button>

        <button
          onClick={() => handleScroll("right")}
          className="absolute top-1/2 right-8 transform -translate-y-full bg-white px-2 py-1 rounded-full shadow-md"
        >
          →
        </button>
      </div>
    </div>
  );
}

export default Gallery;