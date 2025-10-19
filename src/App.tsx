import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";

function App() {
  return (
    <div className=" min-h-[100vh] bg-background  text-foreground">
      <div className="fixed">
        <img
          src="lines.png"
          className="z-[1] opacity-45 h-[100vh] w-[100vw] object-cover"
        />
      </div>


      <div>
        <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        </BrowserRouter>

      </div>

    </div>
  );
}

export default App;
