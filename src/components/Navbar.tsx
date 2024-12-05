export default function Navbar() {
  return (
    <nav>
      <ul className="flex text-white lg:gap-[5.188rem] md:gap-[3rem]">
        <li>
          <a href="#home" className="hover:text-lightBlue active:text-white font-semibold transition ease-in-out duration-300">
            Home
          </a>
        </li>
        <li>
          <a href="#portfolio" className="hover:text-lightBlue active:text-white font-semibold transition ease-in-out duration-300">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-lightBlue active:text-white font-semibold transition ease-in-out duration-300">
            About
          </a>
        </li>
        <li>
          <a href="#skill" className="hover:text-lightBlue active:text-white font-semibold transition ease-in-out duration-300">
            Skill
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-lightBlue active:text-white font-semibold transition ease-in-out duration-300">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
