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
                <Route path="/codepurplewebsite" element={<Home />} />
                <Route path="/codepurplewebsite/home" element={<Home />} />
                <Route path="/codepurplewebsite/about" element={<About />} />
                <Route path="/codepurplewebsite/subteams" element={<Subteams />} />
                <Route path="/codepurplewebsite/leadership" element={<Leadership />} />
                <Route path="/codepurplewebsite/sponsors" element={<Sponsors />} />
                <Route path="/codepurplewebsite/contact" element={<Contact />} />
                <Route path="/codepurplewebsite/contributors" element={<Contributors />} />
                <Route path="*" element={<Unfinished />} />
            </Routes>
            <Footer />
        </Router>
    </div>
    );
}

export default App;
