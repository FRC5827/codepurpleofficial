import Marquee from "react-fast-marquee";

function WhatWeDo() {
  const scrollText = () => {
    document.querySelector(".subteamscroll").classList.add("hidden");
    document.querySelector(".subteammarquee").classList.remove("hidden");
  };

  const stopScrollText = () => {
    document.querySelector(".subteamscroll").classList.remove("hidden");
    document.querySelector(".subteammarquee").classList.add("hidden");
  };

  return (
    <div className="flex flex-row items-start justify-start w-full bg-codePurple">
      <div className="m-5 h-[50vh] w-[47vw] flex-shrink-0 rounded-lg mx-4 flex justify-center items-center text-white relative">
        <h1 className="font-kode font-bold text-white text-9xl text-center z-10">
          Our Subteams
        </h1>
      </div>
      <div className="m-5 h-[50vh] w-[47vw] flex-shrink-0 rounded-lg mx-4 flex flex-col justify-center items-center text-white text-xl relative border-white border-2">
        <p className="px-10 py-2 text-left relative z-10">
          5827 is split up into many different subteams which all play an equal
          part in the success of our team.
        </p>
        <p className="px-10 py-2 text-left relative z-10">
          Some of the subteams are...{" "}
          <li>Computer Assisted Design - designing our robot</li>{" "}
          <li>Electronics - wiring the robot</li>{" "}
          <li>Programming - coding the robot</li>
          <li>And many more!</li>
        </p>
        <div className="w-full h-auto flex justify-center">
          <a
            onMouseEnter={scrollText}
            onMouseLeave={stopScrollText}
            className="w-96 py-4 my-6 font-bold border-white border-4 rounded-full text-white hover:bg-white hover:text-codePurple hover:border-codePurple transition-all duration-300 overflow-hidden justify-center items-center flex"
            href="/subteams"
          >
            <p className="subteamscroll visible">Learn more about the subteams!</p>
            <div className="subteammarquee hidden w-full">
              <Marquee velocity={50} className="" autoFill direction="left">
                <p className="mx-2">Subteams</p>
              </Marquee>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
