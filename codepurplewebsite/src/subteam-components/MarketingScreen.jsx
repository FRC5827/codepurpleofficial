function MarketingScreen() {
  return (
    <div className="w-full h-full bg-marketing flex flex-row items-center justify-center">
      <div className="w-1/2 h-full text-white flex flex-col items-start">
        <div className="w-full h-1/4 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-center font-kode m-10"><u>Marketing Team</u></h1>
        </div>
        <div className="w-full h-1/2 flex flex-col m-2 px-10 justify-center">
          <p className="text-lg text-left m-3">The Marketing team handles a variety of tasks many would not associate with robotics. In addition to the technical and drive subteams, the Marketing team is crucial for others to recognize and acknowledge our achievements. </p>
          <p className="text-lg text-left m-3">Each year, our team comes up with new and innovative designs to represent us at competition. The marketing team involves itself with graphic designs to produce recognizable and iconic logos which represent our team. They then put said logos onto a variety of team merch, like shirts, hoodies, stickers, pins, etc.</p>
          <p className="text-lg text-left m-3">Additionally, the marketing team handles awards, manages social media accounts (follow us!), and plans all the outreach events for our team. These include enrichment events at elementry and middle schools, volunteering opportunities to raise money, etc.</p>
        </div>
        <div className="w-full h-1/4 mb-16 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl font-kode text-left m-5">Current Leadership:</h1>
          <h1 className="text-4xl font-kode text-left mx-5">Emi Elman</h1>
        </div>
      </div>
    </div>
  );
}

export default MarketingScreen;