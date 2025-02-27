import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/home/index";
import Plasma from "./pages/plasma/index";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/plasma" element={<Plasma />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
