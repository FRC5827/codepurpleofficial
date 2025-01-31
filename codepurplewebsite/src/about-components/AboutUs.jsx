import P24D4 from "../assets/galleryPhotos/districts-2024/P24D4.jpg";

function AboutUs() {
  return (
    <>
      <div className="relative h-[100vh] w-screen bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{ backgroundImage: `url(${P24D4})`, opacity: 0.2 }}
        >
          {" "}
        </div>
        <div className="relative w-full h-full flex flex-col items-center justify-center font-kode">
          <h1 className="text-white text-9xl text-center font-bold">
            {" "}
            About Us{" "}
          </h1>
          <h1 className="text-codePurple text-4xl text-center font-bold">5827</h1>
        </div>
      </div>

    </>
  );
}

export default AboutUs;
