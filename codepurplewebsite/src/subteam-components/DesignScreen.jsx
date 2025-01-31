import cad from "../assets/subteamPhotos/cad.png";
import cad2 from "../assets/subteamPhotos/cad2.png";
import cad3 from "../assets/galleryPhotos/kickoff/IMG_4817.JPG"

function DesignScreen() {
  return (
    <div className="w-full h-full bg-design flex flex-row items-center justify-center">
      <div className="w-1/2 h-full text-white flex flex-col items-start">
        <div className="w-full h-1/4 flex items-center justify-center">
          <h1 className="text-7xl font-bold text-center font-kode m-10"><u>Design Team</u></h1>
        </div>
        <div className="w-full h-1/2 flex flex-col m-2 px-10 justify-center">
          <p className="text-lg text-left m-3">The Design, or CAD (Computer Assisted Design) Team is responsible for the first steps of making the robot each season. Before any of the robot can be built, the Design team must finalize a design which will be optimal for the current season game. They work together with the strategy team to figure out which components of the robot will be the most optimal in competitions for the season.</p>
          <p className="text-lg text-left m-3">After the design is finalized, the Design team uses Autodesk Fusion 360 to produce a virtual 3d model of the robot following all the required spefications for the current season.</p>
          <p className="text-lg text-left m-3">The design put together by the Design team will act as the base on which many other subteams will plan their actions for the rest of the season. Once the design is finalized, the Design team will work with the Build team in order to create the physical robot parts from the 3d model.</p>

        </div>
        <div className="w-full h-1/4 mb-16 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl font-kode text-left m-5">Current Leadership:</h1>
          <h1 className="text-4xl font-kode text-left mx-5">Logan Schmidt</h1>
        </div>
      </div>
      <div className="w-1/2 h-full text-white flex flex-col items-center justify-center">
        <div className="w-full h-1/2">
          <img src={cad2} alt="Large" className="w-full h-full object-cover border-t-0 border-r-0 border-white border-4" />
        </div>
        <div className="w-full h-1/2 flex">
          <img src={cad} alt="Small 1" className="w-1/2 h-full object-cover border-l-4 border-white" />
          <img src={cad3} alt="Small 2" className="w-1/2 h-full object-cover border-l-4 border-white" />
        </div>
      </div>
    </div>
  );
}

export default DesignScreen;