import { useState, useEffect } from "react";
import { FaTimes } from 'react-icons/fa';

import BuildScreen from "./BuildScreen.jsx";
import CodeScreen from "./CodeScreen.jsx";
import DesignScreen from "./DesignScreen.jsx";
import SafetyScreen from "./SafetyScreen.jsx";
import ElectronicsScreen from "./ElectronicsScreen.jsx";
import DriveScreen from "./DriveScreen.jsx";
import FinanceScreen from "./FinanceScreen.jsx";
import MarketingScreen from "./MarketingScreen.jsx";
import StrategyScreen from "./StrategyScreen.jsx";

function SubteamSelector() {
  const [showButton, setShowButton] = useState(false);
  const [somethingChosen, setSomethingChosen] = useState(false);
  const [fadeInClose, setFadeInClose] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const [showBuildScreen, setShowBuildScreen] = useState(false);
  const [showCodeScreen, setShowCodeScreen] = useState(false);
  const [showDesignScreen, setShowDesignScreen] = useState(false);
  const [showSafetyScreen, setShowSafetyScreen] = useState(false);
  const [showElectronicsScreen, setShowElectronicsScreen] = useState(false);
  const [showMarketingScreen, setShowMarketingScreen] = useState(false);
  const [showDriveScreen, setShowDriveScreen] = useState(false);
  const [showFinanceScreen, setShowFinanceScreen] = useState(false);
  const [showStrategyScreen, setShowStrategyScreen] = useState(false);


  const thechosenone = (thing) => {
    if (somethingChosen === false) {
      setTimeout(() => {
        setShowButton(true);
      }, 500);
      if (!document.querySelector(`.${thing}`).classList.contains("chosen")) {
        document
          .querySelector(`.${thing}`)
          .classList.add("chosen", "z-10", "scale-[3000%]");

        document
          .querySelector(`.${thing}-text`)
          .classList.add("opacity-0", "chosen-text");
      }
      setSomethingChosen(true);

      if (thing === "build") setShowBuildScreen(true);
      if (thing === "code") setShowCodeScreen(true);
      if (thing === "design") setShowDesignScreen(true);
      if (thing === "safety") setShowSafetyScreen(true);
      if (thing === "electronics") setShowElectronicsScreen(true);
      if (thing === "marketing") setShowMarketingScreen(true);
      if (thing === "drive") setShowDriveScreen(true);
      if (thing === "finance") setShowFinanceScreen(true);
      if (thing === "strategy") setShowStrategyScreen(true);
      else return;
    }
  };

  const notthechosenone = () => {
    setShowButton(false);
    const element = document.querySelector(".chosen");
    if (element) {
      element.classList.remove("chosen", "scale-[3000%]");
      setTimeout(() => {
        element.classList.remove("z-10");
        document.querySelector(`.chosen-text`).classList.add("opacity-100");
        document
          .querySelector(`.chosen-text`)
          .classList.remove("opacity-0", "chosen-text");
      }, 1000);
    }
    setFadeOut(true);
    setTimeout(() => {
      setSomethingChosen(false);
      setShowBuildScreen(false);
      setShowCodeScreen(false);
      setShowDesignScreen(false);
      setShowSafetyScreen(false);
      setShowElectronicsScreen(false);
      setShowMarketingScreen(false);
      setShowDriveScreen(false);
      setShowFinanceScreen(false);
      setShowStrategyScreen(false);
      setFadeOut(false);
    }, 1000);
  };

  useEffect(() => {
    if (showButton) {
      setTimeout(() => {
        setFadeInClose(true);
      }, 0);
    } else {
      setFadeInClose(false);
    }
  }, [showButton]);

  return (
    <div className="h-auto w-full flex justify-center items-center bg-white relative overflow-hidden">
      <div className="w-full max-w-5xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid gap-8 p-8">
        <div
          onMouseDown={() => thechosenone("build")}
          className="build cursor-pointer aspect-square h-64 bg-build rounded-xl drop-shadow-2xl hover:scale-110 transition-all duration-1000 flex items-center justify-center"
        >
          <p className="build-text text-white font-bold font-kode text-5xl transition-all duration-1000">
            Build
          </p>
        </div>
        <div
          onMouseDown={() => thechosenone("code")}
          className="code cursor-pointer aspect-square h-64 bg-code rounded-xl drop-shadow-2xl hover:scale-110 transition-all duration-1000 flex items-center justify-center"
        >
          <p className="code-text text-white font-bold font-kode text-5xl transition-all duration-1000">
            Code
          </p>
        </div>
        <div
          onMouseDown={() => thechosenone("design")}
          className="design cursor-pointer aspect-square h-64 bg-design rounded-xl drop-shadow-2xl hover:scale-110 transition-all duration-1000 flex items-center justify-center"
        >
          <p className="design-text text-white font-bold font-kode text-5xl transition-all duration-1000">
            Design
          </p>
        </div>
        <div
          onMouseDown={() => thechosenone("safety")}
          className="safety cursor-pointer aspect-square h-64 bg-safety rounded-xl drop-shadow-2xl hover:scale-110 transition-all duration-1000 flex items-center justify-center"
        >
          <p className="safety-text text-white font-bold font-kode text-5xl transition-all duration-1000">
            Safety
          </p>
        </div>
        <div
          onMouseDown={() => thechosenone("electronics")}
          className="electronics cursor-pointer aspect-square h-64 bg-electronics rounded-xl drop-shadow-2xl hover:scale-110 transition-all duration-1000 flex items-center justify-center"
        >
          <p className="electronics-text text-white font-bold font-kode text-4xl transition-all duration-1000">
            Electronics
          </p>
        </div>
        <div
          onMouseDown={() => thechosenone("drive")}
          className="drive cursor-pointer aspect-square h-64 bg-drive rounded-xl drop-shadow-2xl hover:scale-110 transition-all duration-1000 flex items-center justify-center"
        >
          <p className="drive-text text-white font-bold font-kode text-5xl transition-all duration-1000">
            Drive
          </p>
        </div>
        <div
          onMouseDown={() => thechosenone("marketing")}
          className="marketing cursor-pointer aspect-square h-64 bg-marketing rounded-xl drop-shadow-2xl hover:scale-110 transition-all duration-1000 flex items-center justify-center"
        >
          <p className="marketing-text text-white font-bold font-kode text-4xl transition-all duration-1000">
            Marketing
          </p>
        </div>
        <div
          onMouseDown={() => thechosenone("finance")}
          className="finance cursor-pointer aspect-square h-64 bg-finance rounded-xl drop-shadow-2xl hover:scale-110 transition-all duration-1000 flex items-center justify-center"
        >
          <p className="finance-text text-white font-bold font-kode text-5xl transition-all duration-1000">
            Finance
          </p>
        </div>
        <div
          onMouseDown={() => thechosenone("strategy")}
          className="strategy cursor-pointer aspect-square h-64 bg-strategy rounded-xl drop-shadow-2xl hover:scale-110 transition-all duration-1000 flex items-center justify-center"
        >
          <p className="strategy-text text-white font-bold font-kode text-5xl transition-all duration-1000">
            Strategy
          </p>
        </div>

      </div>
      {showButton && (
        <div
          onMouseDown={() => notthechosenone()}
          className="{`w-auto h-auto flex z-50 absolute top-[1.2rem] left-0 px-6 close transition-opacity duration-500 ${fadeInClose ? 'opacity-100' : 'opacity-0'}`}"
        >
          <a
            className="w-auto aspect-square py-4 my-6 font-bold border-white border-4 rounded-full text-white transition-all duration-300 overflow-hidden justify-center items-center flex hover:rotate-180"
          >
            <p className="closescroll visible"><FaTimes className="text-2xl" /></p>
          </a>
        </div>
      )}
      {showBuildScreen && (
        <div
          className={`absolute inset-0 z-20 flex justify-center items-center ${fadeOut ? "fade-out" : "floatin"
            }`}
        >
          <BuildScreen />
        </div>
      )}
      {showCodeScreen && (
        <div
          className={`absolute inset-0 z-20 flex justify-center items-center ${fadeOut ? "fade-out" : "floatin"
            }`}
        >
          <CodeScreen />
        </div>
      )}
      {showDesignScreen && (
        <div
          className={`absolute inset-0 z-20 flex justify-center items-center ${fadeOut ? "fade-out" : "floatin"
            }`}
        >
          <DesignScreen />
        </div>
      )}
      {showSafetyScreen && (
        <div
          className={`absolute inset-0 z-20 flex justify-center items-center ${fadeOut ? "fade-out" : "floatin"
            }`}
        >
          <SafetyScreen />
        </div>
      )}
      {showElectronicsScreen && (
        <div
          className={`absolute inset-0 z-20 flex justify-center items-center ${fadeOut ? "fade-out" : "floatin"
            }`}
        >
          <ElectronicsScreen />
        </div>
      )}
      {showDriveScreen && (
        <div
          className={`absolute inset-0 z-20 flex justify-center items-center ${fadeOut ? "fade-out" : "floatin"
            }`}
        >
          <DriveScreen />
        </div>
      )}
      {showMarketingScreen && (
        <div
          className={`absolute inset-0 z-20 flex justify-center items-center ${fadeOut ? "fade-out" : "floatin"
            }`}
        >
          <MarketingScreen />
        </div>
      )}
      {showFinanceScreen && (
        <div
          className={`absolute inset-0 z-20 flex justify-center items-center ${fadeOut ? "fade-out" : "floatin"
            }`}
        >
          <FinanceScreen />
        </div>
      )}
      {showStrategyScreen && (
        <div
          className={`absolute inset-0 z-20 flex justify-center items-center ${fadeOut ? "fade-out" : "floatin"
            }`}
        >
          <StrategyScreen />
        </div>
      )}
    </div>
  );
}

export default SubteamSelector;
