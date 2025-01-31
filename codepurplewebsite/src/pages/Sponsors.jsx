import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 10, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};


import React from "react";
import Boeing from "../assets/sponsors/Boeing-logo.png";
import Chipotle from "../assets/sponsors/Chipotle-logo.png";
import FIRSTWA from "../assets/sponsors/FIRSTWA-logo.png";
import Lego from "../assets/sponsors/Lego-logo.png";
import LWHS from "../assets/sponsors/LWHS-logo.png";
import Microsoft from "../assets/sponsors/Microsoft-logo.png";
import Mod from "../assets/sponsors/Mod-logo.png";
import OSPI from "../assets/sponsors/OSPI-logo.png";
import PACCAR from "../assets/sponsors/PACCAR-logo.png";
import Qualcomm from "../assets/sponsors/Qualcomm-logo.png";
import TresHermanos from "../assets/sponsors/TresHermanos-logo.png";

const sponsors = [
  { name: "Microsoft", logo: Microsoft, url: "https://microsoft.com" },
  { name: "OSPI", logo: OSPI, url: "https://ospi.k12.wa.us/" },
  { name: "Boeing", logo: Boeing, url: "https://boeing.com" },
  {
    name: "FIRST Robotics Washington",
    logo: FIRSTWA,
    url: "https://firstwa.org/",
  },
  { name: "MOD Pizza", logo: Mod, url: "https://modpizza.com" },
  { name: "PACCAR", logo: PACCAR, url: "https://www.paccar.com/" },
  { name: "Qualcomm", logo: Qualcomm, url: "https://qualcomm.com" },
  {
    name: "The Lego Foundation",
    logo: Lego,
    url: "https://learningthroughplay.com/about-us/the-lego-foundation",
  },
  { name: "Chipotle", logo: Chipotle, url: "https://chipotle.com" },
  {
    name: "Tres Hermanos",
    logo: TresHermanos,
    url: "https://thetreshermanos.com/index.html",
  },
  {
    name: "Lake Washington High School",
    logo: LWHS,
    url: "https://lwhs.lwsd.org",
  },
];

function Sponsors() {
  return (
    <div className="w-screen h-auto overflow-x-hidden flex flex-col">
      <div className="w-full h-80 bg-codePurple items-center justify-center pt-16 flex flex-col">
        <h1 className="text-9xl font-kode text-center text-white font-bold">
          Sponsors
        </h1>
      </div>
      <div className="h-auto w-full flex justify-center text-left bg-codePurple">
        <div className="w-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid px-8 pb-8 gap-8 max-w-[5000px]">
          <Tilt options={defaultOptions}>
            <div onClick={() => window.open("https://microsoft.com")}
            className="cursor-pointer w-64 h-96 bg-white rounded-2xl flex flex-col justify-center items-center shadow-2xl transition-all p-6">
              <div className="h-4/5 w-full flex items-center justify-center">
                <img
                  src={Microsoft}
                  alt="Microsoft"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="h-1/5 w-full flex items-center justify-center">
                <a
                  href="https://microsoft.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-black font-kode text-center font-bold text-2xl"
                >
                  Microsoft
                </a>
              </div>
            </div>
          </Tilt>
          <Tilt options={defaultOptions}>
            <div onClick={() => window.open("https://ospi.k12.wa.us")} 
            className="cursor-pointer w-64 h-96 bg-white rounded-2xl flex flex-col justify-center items-center shadow-2xl transition-all p-6">
              <div className="h-4/5 w-full flex items-center justify-center">
                <img
                  src={OSPI}
                  alt="OSPI"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="h-1/5 w-full flex items-center justify-center">
                <a
                  href="https://ospi.k12.wa.us/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-black font-kode text-center font-bold text-2xl"
                >
                  OSPI
                </a>
              </div>
            </div>
          </Tilt>
          <Tilt options={defaultOptions}>
            <div onClick={() => window.open("https://boeing.com")} 
            className="cursor-pointer w-64 h-96 bg-white rounded-2xl flex flex-col justify-center items-center shadow-2xl transition-all p-6">
              <div className="h-4/5 w-full flex items-center justify-center">
                <img
                  src={Boeing}
                  alt="Boeing"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="h-1/5 w-full flex items-center justify-center">
                <a
                  href="https://boeing.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-black font-kode text-center font-bold text-2xl"
                >
                  Boeing
                </a>
              </div>
            </div>
          </Tilt>
          <Tilt options={defaultOptions}>
            <div onClick={() => window.open("https://firstwa.org")} 
            className="cursor-pointer w-64 h-96 bg-white rounded-2xl flex flex-col justify-center items-center shadow-2xl transition-all p-6">
              <div className="h-4/5 w-full flex items-center justify-center">
                <img
                  src={FIRSTWA}
                  alt="FIRSTWA"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="h-1/5 w-full flex items-center justify-center">
                <a
                  href="https://firstwa.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-black font-kode text-center font-bold text-2xl"
                >
                  FIRST Robotics Washington
                </a>
              </div>
            </div>
          </Tilt>
          <Tilt options={defaultOptions}>
            <div onClick={() => window.open("https://modpizza.com")} 
            className="cursor-pointer w-64 h-96 bg-white rounded-2xl flex flex-col justify-center items-center shadow-2xl transition-all p-6">
              <div className="h-4/5 w-full flex items-center justify-center">
                <img
                  src={Mod}
                  alt="Mod"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="h-1/5 w-full flex items-center justify-center">
                <a
                  href="https://modpizza.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-black font-kode text-center font-bold text-2xl"
                >
                  MOD Pizza
                </a>
              </div>
            </div>
          </Tilt>
          <Tilt options={defaultOptions}>
            <div onClick={() => window.open("https://www.paccar.com")} 
            className="cursor-pointer w-64 h-96 bg-white rounded-2xl flex flex-col justify-center items-center shadow-2xl transition-all p-6">
              <div className="h-4/5 w-full flex items-center justify-center">
                <img
                  src={PACCAR}
                  alt="PACCAR"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="h-1/5 w-full flex items-center justify-center">
                <a
                  href="https://www.paccar.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-black font-kode text-center font-bold text-2xl"
                >
                  PACCAR
                </a>
              </div>
            </div>
          </Tilt>
          <Tilt options={defaultOptions}>
            <div onClick={() => window.open("https://qualcomm.com")} 
            className="cursor-pointer w-64 h-96 bg-white rounded-2xl flex flex-col justify-center items-center shadow-2xl transition-all p-6">
              <div className="h-4/5 w-full flex items-center justify-center">
                <img
                  src={Qualcomm}
                  alt="Qualcomm"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="h-1/5 w-full flex items-center justify-center">
                <a
                  href="https://qualcomm.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-black font-kode text-center font-bold text-2xl"
                >
                  Qualcomm
                </a>
              </div>
            </div>
          </Tilt>
          <Tilt options={defaultOptions}>
            <div onClick={() => window.open("https://learningthroughplay.com/about-us/the-lego-foundation")} 
            className="cursor-pointer w-64 h-96 bg-white rounded-2xl flex flex-col justify-center items-center shadow-2xl transition-all p-6">
              <div className="h-4/5 w-full flex items-center justify-center">
                <img
                  src={Lego}
                  alt="Lego"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="h-1/5 w-full flex items-center justify-center">
                <a
                  href="https://learningthroughplay.com/about-us/the-lego-foundation"
                  target="_blank"
                  rel="noreferrer"
                  className="text-black font-kode text-center font-bold text-2xl"
                >
                  The Lego Foundation
                </a>
              </div>
            </div>
          </Tilt>
          <Tilt options={defaultOptions}>
            <div onClick={() => window.open("https://chipotle.com")} 
            className="pointer-cursor w-64 h-96 bg-white rounded-2xl flex flex-col justify-center items-center shadow-2xl transition-all p-6">
              <div className="h-4/5 w-full flex items-center justify-center">
                <img
                  src={Chipotle}
                  alt="Chipotle"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="h-1/5 w-full flex items-center justify-center">
                <a
                  href="https://chipotle.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-black font-kode text-center font-bold text-2xl"
                >
                  Chipotle
                </a>
              </div>
            </div>
          </Tilt>
          <Tilt options={defaultOptions}>
            <div onClick={() => window.open("https://thetreshermanos.com/index.html")}
            className="cursor-pointer w-64 h-96 bg-white rounded-2xl flex flex-col justify-center items-center shadow-2xl transition-all p-6">
              <div className="h-4/5 w-full flex items-center justify-center">
                <img
                  src={TresHermanos}
                  alt="Tres Hermanos"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="h-1/5 w-full flex items-center justify-center">
                <a
                  href="https://thetreshermanos.com/index.html"
                  target="_blank"
                  rel="noreferrer"
                  className="text-black font-kode text-center font-bold text-2xl"
                >
                  Tres Hermanos Mexican Restaraunt
                </a>
              </div>
            </div>
          </Tilt>
          <Tilt options={defaultOptions}>
            <div onClick={() => window.open("https://lwhs.lwsd.org")} 
            className="cursor-pointer w-64 h-96 bg-white rounded-2xl flex flex-col justify-center items-center shadow-2xl transition-all p-6">
              <div className="h-4/5 w-full flex items-center justify-center">
                <img
                  src={LWHS}
                  alt="LWHS"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="h-1/5 w-full flex items-center justify-center">
                <a
                  href="https://lwhs.lwsd.org"
                  target="_blank"
                  rel="noreferrer"
                  className="text-black font-kode text-center font-bold text-2xl"
                >
                  Lake Washington High School
                </a>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
