import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GetInvolved from "./pages/GetInvolved";
import Learn from "./pages/Learn";
import TakeAction from "./pages/TakeAction";
import ExploreResources from "./pages/ExploreResources";
import Donate from "./pages/Donate";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/get-involved" element={<GetInvolved />} />
                <Route path="/learn" element={<Learn />} />
                <Route path="/take-action" element={<TakeAction />} />
                <Route path="/explore-resources" element={<ExploreResources />} />
                <Route path="/donate" element={<Donate />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
