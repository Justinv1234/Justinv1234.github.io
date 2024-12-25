import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar.tsx";
import Home from "./home/home.tsx";
import Projects from "./projects/projects.tsx";
import About from "./about/about.tsx";
import Contact from "./contact/contact.tsx";

export default function Main() {
  return (
    <Router>
      <div className="min-h-screen flex justify-center bg-[#202020] text-white">
        <article className="flex flex-col gap-5 w-[704px]">
          <section className="sticky top-0 h-20 backdrop-blur-sm bg-[#202020] bg-opacity-80 z-50">
            <Navbar />
          </section>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about-me" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <section className="copyright">
            <p className="text-center text-sm text-gray-500 m-10">
              &copy; {new Date().getFullYear()} Justin Veltri. All rights
              reserved.
            </p>
          </section>
        </article>
      </div>
    </Router>
  );
}
