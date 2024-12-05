import { Img } from "react-image";
import skills from "../collections/skill.json";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Skill {
  id: number;
  name: string;
  image: string;
  alt: string;
}

const SkillCards = () => {
  const [isAOSInitialized, setIsAOSInitialized] = useState(false);

  useEffect(() => {
    AOS.init();
    setIsAOSInitialized(true);
  }, []);

  if (!isAOSInitialized) {
    return null;
  }

  return (
    <>
      <section className="flex flex-wrap justify-center gap-x-40 gap-y-14" data-aos="fade-up" data-aos-duration="1000">
        {skills.map((skill: Skill) => (
          <section key={skill.id} className="rounded-lg shadow-lg hover:shadow-xl hover:shadow-navyBlue shadow-navyBlue transition ease-in-out duration-300 w-[17.125rem] h-[12.938rem] ">
            <figure className="bg-white h-[9.063rem] flex justify-center rounded-t-lg ">
              <Img src={skill.image} alt={skill.alt} width={150} height={150} />
            </figure>
            <section className="bg-navyBlue flex justify-center items-center h-[3.875rem] rounded-b-lg ">
              <p className="text-white font-medium text-4xl ">{skill.name}</p>
            </section>
          </section>
        ))}
      </section>
    </>
  );
};

export default SkillCards;
