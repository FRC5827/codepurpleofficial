import SponsorMarquee from './SponsorMarquee';
function Sponsors() {
  return (
    <div className="h-auto w-full bg-codePurple">
      <div className="mx-24 my-16">
        <div className="relative flex flex-row justify-start items-center gap-10">
          <div className="border-white border-8 rounded-full w-full h-0 absolute right-[-30%]"></div>
          <h1 className="font-kode font-extrabold text-7xl z-10 text-white">
            <a href="/sponsors">Sponsors</a>
          </h1>
        </div>
        <div className="m-10">
          <SponsorMarquee />
        </div>
      </div>
    </div>
  );
}

export default Sponsors;