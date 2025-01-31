import safety from "../assets/subteamPhotos/safety.png";
import safety2 from "../assets/galleryPhotos/kickoff/IMG_4867.JPG";
import safety3 from "../assets/galleryPhotos/kickoff/IMG_4861.JPG";

function SafetyScreen() {
  return (
    <div className="w-full h-full bg-safety flex flex-row items-center justify-center">
      <div className="w-1/2 h-full text-white flex flex-col items-start">
        <div className="w-full h-1/4 flex items-center justify-center">
          <h1 className="text-7xl font-bold text-center font-kode m-10"><u>Safety Team</u></h1>
        </div>
        <div className="w-full h-1/2 flex flex-col m-2 px-10 justify-center">
          <p className="text-lg text-left m-3">In our team, safety is a core value. At the beginning of the year, every member of the team undergoes "safety training" with written and physical tests to make sure they have the knowledge on how to be safe in the shop environments.</p>
          <p className="text-lg text-left m-3">During and off the seasons, students will be using a variety of hand tools and machines in the shop. They will be given a test on the bandsaw and drill press in order to make sure that every student is safe in the shop. Additionally, safety glasses have always been a requirement for those working with these machines.</p>
          <p className="text-lg text-left m-3">Each year, the team has a dedicated Safety Officer who is in charge of making sure every member on the team follows the safety guidelines. The safety officer is also in charge of documenting the rare injuries we have and carrying out the safety training at the start of the year.</p>
        </div>
        <div className="w-full h-1/4 flex flex-col justify-center items-center text-center">
          {/* <h1 className="text-4xl font-kode text-left m-5">Current Leadership:</h1>
          <h1 className="text-4xl font-kode text-left mx-5"></h1> */}
        </div>
      </div>
      <div className="w-1/2 h-full text-white flex flex-col items-center justify-center">
        <div className="w-full h-1/2">
          <img src={safety} alt="Large" className="w-full h-full object-cover border-t-0 border-r-0 border-white border-4" />
        </div>
        <div className="w-full h-1/2 flex">
          <img src={safety2} alt="Small 1" className="w-1/2 h-full object-cover border-l-4 border-white" />
          <img src={safety3} alt="Small 2" className="w-1/2 h-full object-cover border-l-4 border-white" />
        </div>
      </div>
    </div>
  );
}

export default SafetyScreen;