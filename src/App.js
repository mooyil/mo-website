import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/skills" element={<About/>}/>
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
