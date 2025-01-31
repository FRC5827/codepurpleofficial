import temp from "../assets/galleryPhotos/districts-2024/P24D7.jpg";
import electronics from "../assets/subteamPhotos/electronics.png";
import electronics2 from "../assets/subteamPhotos/electronics2.png";


function ElectronicsScreen() {
  return (
    <div className="w-full h-full bg-electronics flex flex-row items-center justify-center">
      <div className="w-1/2 h-full text-white flex flex-col items-start">
        <div className="w-full h-1/4 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-center font-kode m-10"><u>Electronics Team</u></h1>
        </div>
        <div className="w-full h-1/2 flex flex-col m-2 px-10 justify-center">
          <p className="text-lg text-left m-3">The Electronics team is responsible for all the wiring in the robot. Wiring the robot can be a stressful and time-inducing task, so new electronic team members are trained with hands-on wiring projects in the pre-season.</p>
          <p className="text-lg text-left m-3">As soon as the build team is done with the main chasis and structure of the robot, the electronics team takes over, placing all the electronic components in their respective slots and wiring them all together.</p>
          <p className="text-lg text-left m-3">During the competition, the electronics team is hard at work making sure that none of the wires got knocked out of place in-between matches. It only takes one misplaced or knocked-out wire for the robot to stop functioning. This is why the hard work of the electronics team during competitions is crucial to the team overall.</p>
        </div>
        <div className="w-full h-1/4 mb-16 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl font-kode text-left m-5">Current Leadership:</h1>
          <h1 className="text-4xl font-kode text-left mx-5">Matthew Warmington</h1>
        </div>
      </div>
      <div className="w-1/2 h-full text-white flex flex-col items-center justify-center">
        <div className="w-full h-1/2">
          <img src={electronics} alt="Large" className="w-full h-full object-cover border-t-0 border-r-0 border-white border-4" />
        </div>
        <div className="w-full h-1/2 flex">
          <img src={electronics2} alt="Small 1" className="w-full h-full object-cover border-l-4 border-b-0 border-white" />
        </div>
      </div>
    </div>
  );
}

export default ElectronicsScreen;