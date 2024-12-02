import { useEffect, useState } from "react";
import MobileNavbar from "../components/MobileNavbar";
import Navbar from "../components/Navbar";

export default function NavbarLayout() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowSize.width <= 440;

  return (
    <>
      <section>
        <header className={`flex items-center fixed top-0 w-full h-[3.688rem] z-20 transition ease-in-out duration-300 ${scrolled ? "bg-defaultBlack" : "bg-transparent"}`}>
          <section className="flex items-center w-full justify-between px-4 lg:px-[7rem]">
            <p className="text-white font-bold">
              M<span className="text-lightBlue">rC</span>
            </p>
            {isMobile ? <MobileNavbar state={() => setIsOpen(!isOpen)} isBorder={isOpen} /> : <Navbar />}
          </section>
        </header>
        <nav className={`${isOpen ? null : "hidden"} flex flex-col py-5 fixed right-2 top-16 w-full max-w-[250px] z-20 text-white bg-defaultBlack shadow-lg shadow-black rounded-lg`}>
          <a href="#home" className="hover:text-lightBlue py-2 mx-8 active:text-white font-semibold transition ease-in-out duration-300">
            Home
          </a>
          <a href="#portfolio" className="hover:text-lightBlue py-2 mx-8 active:text-white font-semibold transition ease-in-out duration-300">
            Portfolio
          </a>
          <a href="#about" className="hover:text-lightBlue py-2 mx-8 active:text-white font-semibold transition ease-in-out duration-300">
            About
          </a>
          <a href="#skill" className="hover:text-lightBlue py-2 mx-8 active:text-white font-semibold transition ease-in-out duration-300">
            Skill
          </a>
          <a href="#contact" className="hover:text-lightBlue py-2 mx-8 active:text-white font-semibold transition ease-in-out duration-300">
            Contact
          </a>
        </nav>
      </section>
    </>
  );
}
