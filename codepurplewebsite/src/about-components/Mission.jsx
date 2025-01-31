import P24D6 from '../assets/galleryPhotos/districts-2024/P24D6.jpg';

function Mission() {
    return (
        <div className="flex flex-row items-start justify-start w-full">
            <div className="m-5 h-[50vh] w-[47vw] flex-shrink-0 rounded-lg mx-4 flex justify-center items-center relative">
                <img src={P24D6} alt="background" className="absolute top-0 left-0 h-full w-full object-cover rounded-lg border-codePurple border-4" />
            </div>
            <div className="m-5 h-[50vh] w-[47vw] flex-shrink-0 rounded-lg mx-4 flex flex-col justify-center items-center text-xl relative">
                <div className="">
                    <h1 className="font-kode font-bold px-10 py-2 text-center relative z-10 text-7xl text-codePurple">Our Mission</h1>
                    <div className="text-lg border-codePurple border-2 rounded-lg mt-2">
                        <p className="px-10 py-2 text-left relative">Team 5827 strives to provide equitable opportunities in STEM to students of all ages.</p>
                        <p className="px-10 py-2 text-left relative">By introducing FIRST to students, we raise their experience and caliber in subjects of STEM.</p>
                        <p className="px-10 py-2 text-left relative">Using the skills they learned by being part of FIRST and our team, we hope that students persue their passions in STEM past high school.</p>
                        <p className="px-10 py-2 text-left relative">This is all done using the FIRST principles of Gracious Professionalism and providing a safe and welcoming enviornment to all.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission;