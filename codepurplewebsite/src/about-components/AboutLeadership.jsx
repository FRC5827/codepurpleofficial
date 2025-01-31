import Marquee from "react-fast-marquee";

import P24D7 from "../assets/galleryPhotos/districts-2024/P24D7.jpg";

function AboutLeadership() {
  const scrollText = () => {
    document.querySelector(".leadershipscroll").classList.add("hidden");
    document.querySelector(".leadershipmarquee").classList.remove("hidden");
  };

  const stopScrollText = () => {
    document.querySelector(".leadershipscroll").classList.remove("hidden");
    document.querySelector(".leadershipmarquee").classList.add("hidden");
  };
  return (
    <div className="flex flex-row items-start justify-start w-full py-4">
      <div className="m-10 h-[50vh] w-[47vw] flex-shrink-0 rounded-lg mx-4 flex justify-center items-center relative">
        <img
          src={P24D7}
          alt="background"
          className="object-center object-cover rounded-lg border-codePurple border-4"
        />
      </div>
      <div className="m-5 h-[50vh] w-[47vw] flex-shrink-0 rounded-lg mx-4 flex flex-col justify-center items-center text-xl relative">
        <div className="">
          <h1 className="font-kode font-bold m-2 px-10 py-2 text-center relative z-10 text-5xl text-codePurple">
            Leaders and Mentors
          </h1>
          <div className="text-lg border-codePurple border-2 rounded-lg flex flex-col justify-center items-center">
            <p className="px-10 py-2 text-left relative">
              Building a cohesive team and robot would not be possible without
              the Student Leaders and Mentors who are part of our team.
            </p>
            <p className="px-10 py-2 text-left relative">
              Student Leads are selected by a panel of past leads and mentors in
              order to bring together all the individual subteams into one
              larger team.
            </p>
            <p className="px-10 py-2 text-left relative">
              Additionally, we have many mentors (volunteers, parents, etc.) who
              are as equally interested in Robotics as the students and are
              integral to the coordination and structure of our team.
            </p>
            <div className="w-full h-auto flex justify-center">
              <a
                onMouseEnter={scrollText}
                onMouseLeave={stopScrollText}
                className="w-96 py-4 my-6 font-bold text-xl border-codePurple border-4 rounded-full text-codePurple hover:bg-codePurple hover:text-white hover:border-white transition-all duration-300 overflow-hidden justify-center items-center flex"
                href="/leadership"
              >
                <p className="leadershipscroll visible">
                  Learn more about our leadership!
                </p>
                <div className="leadershipmarquee hidden w-full">
                  <Marquee velocity={50} className="" autoFill direction="left">
                    <p className="mx-2">Leadership</p>
                  </Marquee>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutLeadership;
