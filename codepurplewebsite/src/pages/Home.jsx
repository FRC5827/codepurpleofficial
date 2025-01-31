import TitleScreen from '../home-components/TitleScreen';
import Wave from '../home-components/Wave';
import WhoWeAre from '../home-components/WhoWeAre';
import Gallery from '../home-components/Gallery';
import Sponsors from '../home-components/Sponsors';

function Home() {
    return <div className="w-screen flex flex-col items-center">
        <TitleScreen />
        <Wave />
        <WhoWeAre />
        <Gallery />
        <Sponsors />
    </div>;
}

export default Home;
