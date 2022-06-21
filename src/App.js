import * as React from "react";
import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App ">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
