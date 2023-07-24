import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from '../styles';


const TechLogo = ({ icon, altname }) => {
  return (
    <motion.img
      src={icon}
      alt={altname}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="w-20 h-20" // Adjust size as needed
    />
  );
};

const Tech = () => {
  return (
    <section>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Skills</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>
      <div
        className="mt-4 w-full flex flex-row justify-center overflow-hidden max-w-7xl"
      >
        <motion.div
          variants={fadeIn("down", "spring", 0.1, 3)}
          className="w-full flex flex-wrap justify-evenly items-center gap-3 p-3"
        >
          {technologies.map((technology) => (
            <TechLogo key={technology.name} icon={technology.icon} altname={technology.name} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
