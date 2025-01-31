function Wave() {
  return (
    <div className="h-auto w-screen mt-[-23vh] z-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="bg-"
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0%" stop-color="#310056" />
            <stop offset="60%" stop-color="#7E44CE" />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient)"
          fillOpacity="1"
          d="M0,96L60,117.3C120,139,240,181,360,165.3C480,149,600,75,720,69.3C840,64,960,128,1080,138.7C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Wave;