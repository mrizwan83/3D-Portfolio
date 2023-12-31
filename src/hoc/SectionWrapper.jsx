import { motion } from "framer-motion";

import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';
// higher order component to wrap all other components to apply same spacing 
// fn returning another fn
// use the ids to quickly move to the section and provide animation
const SectionWrapper = (Component, idName) =>
    function HOC() {
        return (
            // stagger container will animate each section
            // need to play around with viewport for optimization
            <motion.section variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                // The viewport prop takes two arguments: amount and once. 
                // The amount argument specifies the percentage of the viewport that the component needs to be in before it will be animated. 
                // The once argument specifies whether the component should only be animated once or not.
                viewport={{ once: true, amount: 0.1 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
                <span className="hash-span" id={idName}>&nbsp;</span>
                <Component />
            </motion.section>
        );
    };

export default SectionWrapper;
