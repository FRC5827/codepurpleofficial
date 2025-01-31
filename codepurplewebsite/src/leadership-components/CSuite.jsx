import PersonCard from "./PersonCard";

import Felix from "../assets/leadership/Felix.jpg"
import Vallari from "../assets/leadership/Vallari.jpg"
import Bella from "../assets/leadership/Bella.jpg"
import Christopher from "../assets/leadership/Christopher.jpg"

function CSuite() {
    return (
        <div className="w-full h-auto bg-codePurple flex items-center flex-col mt-[-5px]">
            <h1 className="text-7xl font-kode font-bold my-6 text-white">C-Suite</h1>
            <div className="w-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid px-8 pb-8 max-w-[5000px]">
                <PersonCard image={Felix} name={"Felix Goodman"} title={"CEO"} description={""} />
                <PersonCard image={Vallari} name={"Vallari Tripathi"} title={"COO"} description={""} />
                <PersonCard image={Bella} name={"Bella Warmington"} title={"CTO"} description={""} />
                <PersonCard image={Christopher} name={"Christopher Chan"} title={"CSO"} description={""} />
            </div>
        </div>
    );
}

export default CSuite;
