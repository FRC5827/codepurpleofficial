import Logo from "../assets/5827_logo.jpg";
import { useState, useRef, useEffect } from "react";

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState({
    scrollTop: 0,
    scrollLeft: 0,
  });

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const scrollLeft = window.scrollX;
    setScrollPosition({ scrollTop, scrollLeft });

    if (scrollTop > 500) {
      document
        .querySelector(".bg-codePurple")
        .classList.remove("bg-opacity-50");
      document
        .querySelector(".bg-codePurple")
        .classList.remove("hover:bg-opacity-80");
    } else {
      document.querySelector(".bg-codePurple").classList.add("bg-opacity-50");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-[70%] h-16 bg-codePurple fixed mt-8 bg-opacity-50 rounded-2xl flex flex-row items-center z-50 ml-[10px] hover:bg-opacity-80 transition duration-300 border-white border-4 drop-shadow-2xl">
      <img
        src={Logo}
        alt="CodePurple"
        className="absolute left-[-10px] h-24 rounded-full cursor-pointer hover:scale-110 transition-all duration-300"
        onClick={() => window.location.replace("/home")}
      />
      <div className="w-full flex flex-row gap-8 justify-start ml-24">
        <a
          href="/home"
          className="text-white font-kode font-extrabold text-xl relative group"
        >
          Code Purple
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </a>
      </div>
      <div className="w-full flex flex-row gap-8 justify-end m-8">
        <a href="/home" className="text-white font-kode relative group">
          Home
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </a>
        <a href="/about" className="text-white font-kode relative group">
          About
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </a>
        <a href="/subteams" className="text-white font-kode relative group">
          Subteams
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </a>
        <a href="/leadership" className="text-white font-kode relative group">
          Leadership
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </a>
        <a href="/contact" className="text-white font-kode relative group">
          Contact
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </a>
      </div>
      <a href="https://github.com/TejasDoesStuff/CodePurple" target="_blank" className="w-[10%] mr-6 hover:scale-110 transition-all duration-300">
        <svg
          viewBox="0 0 192 192"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="12"
              d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265"
            ></path>
          </g>
        </svg>
      </a>
    </div>
  );
}

export default Navbar;
