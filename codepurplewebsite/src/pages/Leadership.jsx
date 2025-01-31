import LeadershipTitle from "../leadership-components/LeadershipTitle";
import CSuite from "../leadership-components/CSuite";
import Mentors from "../leadership-components/Mentors";
import Leads from "../leadership-components/Leads";
import Wave from "../leadership-components/Wave";

function Leadership() {
    return (
        <div className="w-screen h-auto overflow-x-hidden">
            <LeadershipTitle />
            <Wave />
            <CSuite />
            <Leads />
            <Mentors />
        </div>
    );
}

export default Leadership;