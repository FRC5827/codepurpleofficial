function Unfinished() {
    const waveText = "construction!".split("").map((char, index) => (
        <span key={index} style={{ animationDelay: `${index * 0.1}s` }} className="wave">
            {char}
        </span>
    ));

    return <div className="w-screen h-screen flex flex-col items-center justify-center">
        <h1 className="text-9xl tear">😅</h1>
        <h1 className="text-6xl font-kode font-bold text-black m-10"> This page is under {waveText}</h1>
        <h1 className="text-3xl font-cooper gradient-scroll">Come back later :)</h1>
    </div>;
}

export default Unfinished;