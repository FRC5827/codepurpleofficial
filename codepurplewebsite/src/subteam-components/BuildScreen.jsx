import build from "../assets/subteamPhotos/build.png";
import build2 from "../assets/galleryPhotos/kickoff/IMG_4797.JPG";
import build3 from "../assets/galleryPhotos/kickoff/IMG_4864.JPG";

function BuildScreen() {
  return (
    <div className="w-full h-full bg-build flex flex-row items-center justify-center">
      <div className="w-1/2 h-full text-black flex flex-col items-start">
        <div className="w-full h-1/4 flex items-center justify-center">
          <h1 className="text-7xl font-bold text-center font-kode m-10"><u>Build Team</u></h1>
        </div>
        <div className="w-full h-1/2 flex flex-col m-2 px-10 justify-center">
          <p className="text-lg text-left m-3">Build team is responsible for the physical construction of the robot body. They work closely with the Design (CAD) team in order to produce the robot parts using various machines like the Bandsaw, Drill Press, CNC, and more.</p>
          <p className="text-lg text-left m-3">The build team mainly works in the wood and metal shops, where most of the machines are located. At the start of the year, new members are trained in basic shop safety, how to use the machines, and how to work together effectively to make robot parts.</p>
          <p className="text-lg text-left m-3">Initially, parts are made of wood for prototyping, then are moved to more concrete materials to be used in the robot. During the season, build team members work hard to deliver a sturdy product in the shortest amount of time possible.</p>
        </div>
        <div className="w-full h-1/4 mb-16 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl font-kode text-left m-5">Current Leadership:</h1>
          <h1 className="text-4xl font-kode text-left mx-5">Aimal Samir</h1>
        </div>
      </div>
      <div className="w-1/2 h-full text-white flex flex-col items-center justify-center">
        <div className="w-full h-1/2">
          <img src={build} alt="Large" className="w-full h-full object-cover border-t-0 border-r-0 border-white border-4" />
        </div>
        <div className="w-full h-1/2 flex">
          <img src={build2} alt="Small 1" className="w-1/2 h-full object-cover border-l-4 border-white" />
          <img src={build3} alt="Small 2" className="w-1/2 h-full object-cover border-l-4 border-white" />
        </div>
      </div>
    </div>
  );
}

export default BuildScreen;