import code1 from "../assets/galleryPhotos/kickoff/IMG_4856.JPG";
import code2 from "../assets/galleryPhotos/kickoff/IMG_4774.JPG";
import code3 from "../assets/galleryPhotos/kickoff/IMG_4859.JPG";

function CodeScreen() {
  return (
    <div className="w-full h-full bg-code flex flex-row items-center justify-center">
      <div className="w-1/2 h-full text-white flex flex-col items-start">
        <div className="w-full h-1/4 flex items-center justify-center">
          <h1 className="text-7xl font-bold text-center font-kode m-10"><u>Code Team</u></h1>
        </div>
        <div className="w-full h-1/2 flex flex-col m-2 px-10 justify-center">
          <p className="text-lg text-left m-3">Code team is responsible for all of the commands and actions the robot does on the field. Programming the robot is a very time consuming and arduous process which requires multiple levels of testing. Each season, the programming team works hard to make sure that each line of code is refined to a competition standard.</p>
          <p className="text-lg text-left m-3">Since programming is a long process and takes many hours of testing, training new members is crucial to the mission of code team. Thankfully, the team is blessed with many <span className="font-bold text-xl hover:bg-white hover:p-1 hover:text-codePurple transition-all duration-500 underline underline-offset-2"><a href="/leadership">mentors</a></span> from software companies who assist in the training of new code team members in the Java language and WPILib library. Additionally, the code team has put together a website where new members can learn the basics of robot programming: <span className="font-bold text-xl hover:bg-white hover:p-1 hover:text-codePurple transition-all duration-500 underline underline-offset-2"><a href="https://frc5827.github.io/wpiliblearning/">WPILIB Learning Website</a></span></p>
        </div>
        <div className="w-full h-1/4 mb-16 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl font-kode text-left m-5">Current Leadership:</h1>
          <h1 className="text-4xl font-kode text-left mx-5">Omkar Page, Jayden Hong</h1>
        </div>
      </div>
      <div className="w-1/2 h-full text-white flex flex-col items-center justify-center">
        <div className="w-full h-1/2">
          <img src={code1} alt="Large" className="w-full h-full object-cover border-t-0 border-r-0 border-white border-4" />
        </div>
        <div className="w-full h-1/2 flex">
          <img src={code2} alt="Small 1" className="w-1/2 h-full object-cover border-l-4 border-white" />
          <img src={code3} alt="Small 2" className="w-1/2 h-full object-cover border-l-4 border-white" />
        </div>
      </div>
    </div>
  );
}

export default CodeScreen;