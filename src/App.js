import * as React from "react";
import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home/Home';
import ReviewAll from "./components/ReviewAll/ReviewAll";
import Notfound from "./components/Notfound/Notfound";
import Dashboard from "./components/Dashboard/Dashboard";
import Blogs from "./components/Blogs/Blogs";

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reviews" element={<ReviewAll />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
