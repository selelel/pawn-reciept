import { Routes, Route } from "react-router-dom";
import Hero from "./pages/HeroPage";
import Nav from "./pages/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <div className="bg-green_ fixed top-0 right-0 left-0 z-10 p-1 border-b border-green-900 ">
        {/* <p className="text-center text-sm text-white ">
          Website is on Development
        </p> */}
        <Nav />
      </div>
      <Routes>
        <Route path="" element={<Hero />}></Route>
        <Route path="/pawn-reciept" element={<Hero />}></Route>
        <Route path="/pawn-reciept/about" element={<About />}></Route>
        <Route path="/pawn-reciept/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
