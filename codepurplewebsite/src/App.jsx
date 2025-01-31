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
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/subteams" element={<Subteams />} />
                <Route path="/leadership" element={<Leadership />} />
                <Route path="/sponsors" element={<Sponsors />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/contributors" element={<Contributors />} />
                <Route path="*" element={<Unfinished />} />
            </Routes>
            <Footer />
        </Router>
    </div>
    );
}

export default App;
