function DriveScreen() {
  return (
    <div className="w-full h-full bg-drive flex flex-row items-center justify-center">
      <div className="w-1/2 h-full text-white flex flex-col items-start">
        <div className="w-full h-1/4 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-center font-kode m-10"><u>Drive Team</u></h1>
        </div>
        <div className="w-full h-1/2 flex flex-col m-2 px-10 justify-center">
          <p className="text-lg text-left m-3">The Drive Team is the backbone of the team. During competitions, they are responsible for carrying out the team's hard work onto the field and winning us games. When we are not in competitions, they are hard at work practicing and perfecting their skills.</p>
          <p className="text-lg text-left m-3">Even when the robot is incomplete in the build season, the drive team is hard at work, practicing tough manuevers in the limited space that we have. Despite not being directly involved in the technical sections of the robot, the drive team is crucial to the intial design and final output of the robot.</p>
          <p className="text-lg text-left m-3">On the field during competitions, the drive team consists of a "field crew" which includes the driver, co-driver, and other on-field members to assist with match rotation. The driver and the co-driver work together to strategize in real time and plan out the most efficient methods for winning matches.</p>
        </div>
        <div className="w-full h-1/4 mb-16 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl font-kode text-left m-5">Current Leadership:</h1>
          <h1 className="text-3xl font-kode text-left mx-5">Jerry Guo, Natalya Leahy (Driver)</h1>
        </div>
      </div>
    </div>
  );
}

export default DriveScreen;