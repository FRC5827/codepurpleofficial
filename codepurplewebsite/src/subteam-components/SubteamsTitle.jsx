import subteams from "../assets/subteamPhotos/subteams.png";

function SubteamsTitle() {
  return (
    <>
      <div className="relative h-screen w-full bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{ backgroundImage: `url(${subteams})`, opacity: 0.2 }}
        ></div>
        <div className="relative w-full h-full flex flex-col items-center justify-center font-kode">
          <h1 className="text-white text-9xl text-center font-bold">
            Subteams
          </h1>
          <h1 className="text-codePurple font-bold text-4xl text-center">
            5827
          </h1>
        </div>
      </div>
    </>
  );
}

export default SubteamsTitle;
