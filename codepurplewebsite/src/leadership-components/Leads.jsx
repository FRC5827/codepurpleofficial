import PersonCard from "./PersonCard";

import Matthew from "../assets/leadership/Matthew.jpg";
import Aimal from "../assets/leadership/Aimal.png";
import Logan from "../assets/leadership/Logan.jpg";
import Omkar from "../assets/leadership/Omkar.jpg";
import Jayden from "../assets/leadership/Jayden.jpg";
import Rohan from "../assets/leadership/Rohan.jpg";
import Emi from "../assets/leadership/Emi.jpg";
import Jerry from "../assets/leadership/Jerry.jpg";
import Naythan from "../assets/leadership/Naythan.jpg";

function Leads() {
    return (
        <div className="w-full h-auto bg-white flex items-center flex-col">
            <h1 className="text-7xl font-kode font-bold my-6 text-codePurple">Leads</h1>
            <div className="w-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid px-8 pb-8 max-w-[5000px]">
                <PersonCard image={Matthew} name={"Matthew Warmington"} title={"Electronics Lead"} description={""} variant="codePurple" text="white" />
                <PersonCard image={Aimal} name={"Aimal Samir"} title={"Build Lead"} description={""} variant="codePurple" text="white" />
                <PersonCard image={Logan} name={"Logan Schmidt"} title={"Design Lead"} description={""} variant="codePurple" text="white" />
                <PersonCard image={Omkar} name={"Omkar Page"} title={"Code Lead"} description={""} variant="codePurple" text="white" />
                <PersonCard image={Jayden} name={"Jayden Hong"} title={"Code Lead"} description={""} variant="codePurple" text="white" />
                <PersonCard image={Rohan} name={"Rohan Chilukuri"} title={"Finance Lead"} description={""} variant="codePurple" text="white" />
                <PersonCard image={Emi} name={"Emi Elman"} title={"Marketing Lead"} description={""} variant="codePurple" text="white" />
                <PersonCard image={Jerry} name={"Jerry Guo"} title={"Drive Lead"} description={""} variant="codePurple" text="white" />
                <PersonCard image={Naythan} name={"Naythan Saldanha"} title={"Scouting Lead"} description={""} variant="codePurple" text="white" />
            </div>
        </div>
    );
}

export default Leads;
