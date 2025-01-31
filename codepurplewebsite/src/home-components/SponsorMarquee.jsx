import Marquee from "react-fast-marquee";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

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

function SponsorMarquee() {
  return (
    <div className="flex space-y-2 flex-col text-center mb-14">
      <Marquee
        pauseOnHover
        autoFill
        direction="left"
      >
        <Tilt options={defaultOptions}>
          <div
            onClick={() => window.open("https://microsoft.com")}
            className="bg-white h-64 w-64 m-1 rounded-xl flex justify-center space-x-5 p-4 font-bold text-2xl cursor-pointer text-white max-h-64 max-w-64 hover: transition-all duration-300 overflow-y-visible"
          >
            <img src={Microsoft} alt="Microsoft" className="object-contain" />
          </div>
        </Tilt>
        <Tilt options={defaultOptions}>
          <div
            onClick={() => window.open("https://ospi.k12.wa.us/")}
            className="bg-white h-64 w-64 m-1 rounded-xl flex justify-center space-x-5 p-4 font-bold text-2xl cursor-pointer text-white max-h-64 max-w-64 hover:shadow-2xl"
          >
            <img src={OSPI} alt="OSPI" className="object-contain" />
          </div>
        </Tilt>
        <Tilt options={defaultOptions}>
          <div
            onClick={() => window.open("https://boeing.com")}
            className="bg-white h-64 w-64 m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-white max-h-64 max-w-64 hover:drop-shadow-2xl"
          >
            <img src={Boeing} alt="Boeing" className="object-contain" />
          </div>
        </Tilt>
        <Tilt options={defaultOptions}>
          <div
            onClick={() => window.open("https://firstwa.org/")}
            className="bg-white h-64 w-64 m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-white max-h-64 max-w-64"
          >
            <img
              src={FIRSTWA}
              alt="First Robotics Washington"
              className="object-contain"
            />
          </div>
        </Tilt>
        <Tilt options={defaultOptions}>
          <div
            onClick={() => window.open("https://modpizza.com")}
            className="bg-white h-64 w-64 m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-white max-h-64 max-w-64"
          >
            <img src={Mod} alt="MOD Pizza" className="object-contain" />
          </div>
        </Tilt>
      </Marquee>
      <Marquee pauseOnHover autoFill direction="right">
        <Tilt options={defaultOptions}>
          <div
            onClick={() => window.open("https://www.paccar.com/")}
            className="bg-white h-64 w-64 m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-white max-h-64 max-w-64"
          >
            <img src={PACCAR} alt="Paccar" className="object-contain" />
          </div>
        </Tilt>
        <Tilt options={defaultOptions}>
          <div
            onClick={() => window.open("https://qualcomm.com")}
            className="bg-white h-64 w-64 m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-white max-h-64 max-w-64"
          >
            <img src={Qualcomm} alt="Qualcomm" className="object-contain" />
          </div>
        </Tilt>
        <Tilt options={defaultOptions}>
          <div
            onClick={() =>
              window.open(
                "https://learningthroughplay.com/about-us/the-lego-foundation"
              )
            }
            className="bg-white h-64 w-64 m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-white max-h-64 max-w-64"
          >
            <img
              src={Lego}
              alt="The Lego Foundation"
              className="object-contain"
            />
          </div>
        </Tilt>
        <Tilt options={defaultOptions}>
          <div
            onClick={() => window.open("https://chipotle.com")}
            className="bg-white h-64 w-64 m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-white max-h-64 max-w-64"
          >
            <img
              src={Chipotle}
              alt="Chipotle Mexican Grill"
              className="object-contain"
            />
          </div>
        </Tilt>
        <Tilt options={defaultOptions}>
          <div
            onClick={() =>
              window.open("https://thetreshermanos.com/index.html")
            }
            className="bg-white h-64 w-64 m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-white max-h-64 max-w-64"
          >
            <img
              src={TresHermanos}
              alt="Tres Hermanos Mexican Restaurant"
              className="object-contain"
            />
          </div>
        </Tilt>
        <Tilt options={defaultOptions}>
          <div
            onClick={() => window.open("https://lwhs.lwsd.org")}
            className="bg-white h-64 w-64 m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-white max-h-64 max-w-64"
          >
            <img
              src={LWHS}
              alt="Lake Washington High School"
              className="object-contain"
            />
          </div>
        </Tilt>
      </Marquee>
    </div>
  );
}

export default SponsorMarquee;
