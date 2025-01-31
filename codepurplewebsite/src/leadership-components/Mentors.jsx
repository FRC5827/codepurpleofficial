import PersonCard from "./PersonCard";

import Cattin from "../assets/mentors/Cattin.jpg";
import Gordon from "../assets/mentors/Gordon.jpg";
import Mike from "../assets/mentors/Mike.jpg";
import Nathan from "../assets/mentors/Nathan.jpg";
import Shai from "../assets/mentors/Shai.jpg";
import Russ from "../assets/mentors/Russ.jpg";
import Kris from "../assets/mentors/Kris.jpg";

function Mentors() {
    return (
        <div className="w-full h-auto bg-codePurple flex items-center flex-col">
            <h1 className="text-7xl font-kode font-bold my-6 text-white">Mentors</h1>
            <div className="w-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid gap-8 px-8 pb-8 max-w-[5000px]">
                <PersonCard image={Cattin} name={"Mr. Cattin"} title={"Club Director"} description={""} />
                <PersonCard image={Shai} name={"Shai"} title={"Mentor"} description={""} />
                <PersonCard image={Gordon} name={"Gordon"} title={"Mentor"} description={""} />
                <PersonCard image={Mike} name={"Mike"} title={"Mentor"} description={""} />
                <PersonCard image={Nathan} name={"Nathan"} title={"Mentor"} description={""} />
                <PersonCard image={Russ} name={"Russ"} title={"Mentor"} description={""} />
                <PersonCard image={Kris} name={"Kris"} title={"Mentor"} description={""} />
            </div>
        </div>
    );
}

export default Mentors;
