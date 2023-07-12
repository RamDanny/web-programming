import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from "./components/Home"
import Comm from "./components/Comm"
import Call from "./components/Call"
import Imp from "./components/Imp"
import Work from "./components/Work"
import Reg from "./components/Reg"
import Contact from "./components/Contact"
import Feedback from "./components/Feedback"

function App() {
    return (
        <Router>
            <Routes>
                {/*instead of <Route path="/"><Home /></Route>*/}
                <Route path="/" element={<Home />} />
                <Route path="/comm" element={<Comm />} />
                <Route path="/call" element={<Call />} />
                <Route path="/imp" element={<Imp />} />
                <Route path="/work" element={<Work />} />
                <Route path="/reg" element={<Reg />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/feedback" element={<Feedback />} />
            </Routes>
        </Router>
    );
}

export default App;