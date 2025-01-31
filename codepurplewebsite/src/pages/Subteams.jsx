import SubteamsTitle from "../subteam-components/SubteamsTitle";
import SubteamSelector from "../subteam-components/SubteamSelector";
import Wave from "../subteam-components/Wave";

function Subteams() {
  return <div className="w-screen flex flex-col items-center">
      <SubteamsTitle />
      <Wave />
      <SubteamSelector />
    </div>
}

export default Subteams;
