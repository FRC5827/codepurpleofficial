import P24D5 from "../assets/galleryPhotos/districts-2024/P24D5.jpg";

function History() {
  return (
    <div
      className="flex flex-row items-start justify-start w-full bg-codePurple"
      id="history"
    >
      <div className="m-5 h-[50vh] w-[47vw] mx-4 flex flex-col justify-center items-center text-xl text-white">
        <p className="px-10 py-2 text-left z-10">
          Our team was founded in 2016 and began as a small group of students
          working out of a 3rd floor shop space and classroom combination.
        </p>
        <p className="px-10 py-2 text-left z-10">
          Today, Code Purple has rapidly grown into a team of{" "}
          <span className="font-bold text-2xl">90+</span> students from several
          schools in the Lake Washington School District.
        </p>
        <p className="px-10 py-2 text-left z-10">
          We now work in three rooms: a metal lab, a wood lab, and a classroom -
          all thanks to the support and passing of local levies.
        </p>
        <p className="px-10 py-2 text-left z-10">
          We operate in these facilities with enthusiastic support from the
          school and district administration!
        </p>
      </div>
      <div className="m-5 h-[50vh] w-[47vw] flex-shrink-0 rounded-lg mx-4 flex flex-col justify-center items-center text-white text-xl relative">
        <img
          src={P24D5}
          alt="background"
          className="absolute top-0 left-0 h-full w-full object-cover opacity-50 rounded-lg border-white border-4"
        />
        <h1 className="font-kode font-bold text-white text-9xl text-center z-10">
          Our History
        </h1>
      </div>
    </div>
  );
}

export default History;
