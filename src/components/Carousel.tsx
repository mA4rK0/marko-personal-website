import Img from "react-image";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  alt: string;
  url: string;
}

interface ProjectCarouselProps {
  title: string;
  projects: Project[];
}

const ProjectCarousel = ({ title, projects }: ProjectCarouselProps) => {
  const [isAOSInitialized, setIsAOSInitialized] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

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

  useEffect(() => {
    AOS.init();
    setIsAOSInitialized(true);
  }, []);

  if (!isAOSInitialized) {
    return null;
  }

  return <></>;
};
