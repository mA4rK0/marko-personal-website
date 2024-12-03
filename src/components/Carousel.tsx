import { Img } from "react-image";
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
  const isTablet = windowSize.width >= 768 && windowSize.width < 1024;

  useEffect(() => {
    AOS.init();
    setIsAOSInitialized(true);
  }, []);

  if (!isAOSInitialized) {
    return null;
  }

  return (
    <>
      <section className="flex flex-col">
        <div className="mx-auto my-11">
          <h2 className="text-lightBlue text-2xl font-bold">{title}</h2>
        </div>
        {isMobile ? (
          <div className="carousel rounded-box w-80 mx-auto">
            {projects.map((project: Project) => (
              <div className="carousel-item w-full" key={project.id}>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <div className="flex flex-col w-full">
                    <figure className="max-h-[22rem]">
                      <Img src={project.image} alt={project.alt} width={400} height={400} />
                    </figure>
                    <div className="bg-lightBlue text-navyBlue py-8 px-8">
                      <p className="text-xl font-semibold pb-1">{project.name}</p>
                      <p>{project.description}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="carousel carousel-center rounded-box max-w-[81.5rem] mx-auto">
            {projects.map((project: Project) => (
              <div className="carousel-item mx-4" key={project.id}>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <div className="card bg-base-100 w-96 shadow-xl hover:shadow-lightBlue transition ease-in-out duration-300">
                    <figure className="max-h-[26rem]">
                      <Img src={project.image} alt={project.alt} width={400} height={400} />
                    </figure>
                    <div className="card-body bg-lightBlue text-navyBlue">
                      <h2 className="card-title">{project.name}</h2>
                      <p>{project.description}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};
export default ProjectCarousel;
