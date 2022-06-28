import * as React from "react";
import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import ReviewAll from "./components/ReviewAll/ReviewAll";
import Notfound from "./components/Notfound/Notfound";

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<ReviewAll />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
