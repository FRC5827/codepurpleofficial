import "./index.css"

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Navbar from "./global-components/Navbar";
import Footer from "./global-components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Unfinished from "./pages/Unfinished";
import Subteams from "./pages/Subteams";
import Contact from "./pages/Contact";
import Leadership from "./pages/Leadership";
import Sponsors from "./pages/Sponsors";
import Contributors from "./pages/Contributors";

function App() {
    return (
    <div className="w-screen flex flex-col items-center overflow-x-hidden">
        <Router>
            <Navbar />
            <Routes>
                <Route path="/codepurpleofficial" element={<Home />} />
                <Route path="/codepurpleofficial/home" element={<Home />} />
                <Route path="/codepurpleofficial/about" element={<About />} />
                <Route path="/codepurpleofficial/subteams" element={<Subteams />} />
                <Route path="/codepurpleofficial/leadership" element={<Leadership />} />
                <Route path="/codepurpleofficial/sponsors" element={<Sponsors />} />
                <Route path="/codepurpleofficial/contact" element={<Contact />} />
                <Route path="/codepurpleofficial/contributors" element={<Contributors />} />
                <Route path="/codepurpleofficial/*" element={<Unfinished />} />
            </Routes>
            <Footer />
        </Router>
    </div>
    );
}

export default App;
