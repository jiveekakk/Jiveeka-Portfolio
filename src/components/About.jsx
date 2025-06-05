import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";



const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className={`${styles.padding} max-w-7xl mx-auto flex flex-col relative z-0`}>
      
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={`font-starwars ${styles.sectionHeadText}`}>About me.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 0.1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
        Much like a young Padawan emerging from the Jedi Temple,
        I’ve been sharpening my skills in software development through my BSc in IT
        studies and hands-on internship experiences. 
        My training has equipped me with the foundational knowledge and real-world 
        exposure to navigate the galaxy of modern tech. My journey into the world of technology began with a spark—my
        first line of code. It was as if I had just discovered my connection
        to the Force. Since then, I've been driven by a passion to use technology
        not just as a tool, but as a way to bring balance—solving real problems
        with creative and impactful solutions.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-1'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
