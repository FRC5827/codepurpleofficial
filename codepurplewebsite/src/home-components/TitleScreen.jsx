import CodePurple from "../assets/CodePurple.jpg";

function TitleScreen() {
  return (
    <div className="h-screen w-screen bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${CodePurple})`, opacity: 0.2 }}
      />
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="font-kode font-bold">
          <h1 className="text-white text-9xl text-center">
            Code <span className="text-[#7E44CE]">Purple</span>
          </h1>
          <h1 className="text-white text-4xl text-center">5827</h1>
        </div>
      </div>
    </div>
  );
}

export default TitleScreen;
