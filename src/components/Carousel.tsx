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
      <section className="flex flex-col ">
        <div className="mx-auto my-11 ">
          <h2 className="text-lightBlue text-2xl font-bold" data-aos="fade-up" data-aos-duration="1000">
            {title}
          </h2>
        </div>
        {isMobile ? (
          <div className="carousel rounded-box w-80 mx-auto" data-aos="fade-up" data-aos-duration="1000">
            {projects.map((project: Project) => (
              <div className="carousel-item w-full " key={project.id}>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <div className="flex flex-col w-full h-full">
                    <figure className="w-full h-[22rem] overflow-hidden flex items-stretch justify-center">
                      <Img src={project.image} alt={project.alt} className="object-cover" width={400} height={400} />
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
          <div className="carousel carousel-center rounded-box max-w-2xl mx-auto" data-aos="fade-up" data-aos-duration="1000">
            {projects.map((project: Project) => (
              <div className="carousel-item" key={project.id}>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <div className="card bg-base-100 w-96 mx-4">
                    <figure className="h-[26rem] overflow-hidden flex items-stretch bg-black justify-center">
                      <Img src={project.image} alt={project.alt} width={400} height={400} className="object-cover" />
                    </figure>
                    <div className="card-body bg-lightBlue text-navyBlue ">
                      <h2 className="card-title ">{project.name}</h2>
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
