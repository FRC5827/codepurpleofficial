function StrategyScreen() {
  return (
    <div className="w-full h-full bg-strategy flex flex-row items-center justify-center">
      <div className="w-1/2 h-full text-black flex flex-col items-start">
        <div className="w-full h-1/4 flex items-center justify-center">
          <h1 className="text-7xl font-bold text-center font-kode m-10"><u>Strategy Team</u></h1>
        </div>
        <div className="w-full h-1/2 flex flex-col m-2 px-10 justify-center">
          <p className="text-lg text-left m-3">During each match, the strategy that a team uses is crucial to them winning or not. The strategy team works hards during and in-between matches to analyze past match data and determine the best strategy to use. Clever strategies and tactics allow the team to utilize the robot to the fullest and score high amounts of point in the most efficient way possible.</p>
          <p className="text-lg text-left m-3">During competitions, many teams "scout" other team's robots to find their weaknesses and strengths. This data helps us in the alliance selection process, and allows us to generate efficient strategies. Scouting during the competition is crucial to understanding the teams that we go against, and each member contributes to the effort in collecting data on other teams.</p>
          <p className="text-lg text-left m-3">During a match, there is always a co-driver who is filled in on the strategy that the strategy team creates. The communication between the driver and co-driver is how the strategies that this subteam makes are played effectively in each match.</p>
        </div>
        <div className="w-full h-1/4 mb-16 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl font-kode text-left m-5">Current Leadership:</h1>
          <h1 className="text-3xl font-kode text-left mx-5">Christopher Chan, Naythan Saldanha</h1>
        </div>
      </div>
    </div>
  );
}

export default StrategyScreen;