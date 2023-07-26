import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-tertiary rounded-[20px] border-[#11154d] border-2`}>
      <div
        className={` bg-[#0b6b83] rounded-2xl ${styles.padding} min-h-[300px] `}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-slate-400`}>More Information</p>
          <h2 className={styles.sectionHeadText}>Mohammad H. Rizwan</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        <motion.div
          variants={fadeIn("", "spring", 0, 0.75)}
          className='bg-[#042831] p-10 rounded-3xl xs:w-[320px] w-full'
        >
          <p className='text-white font-black text-[36px]'>Resume</p>

          <div className='mt-1'>
            <p className='text-white tracking-wider text-[18px]'>Download and view my resume, or visit Google Docs link.</p>

            <div className='mt-7 flex justify-between items-center gap-1'>
              <div className='flex-1 flex flex-col'>
                <p className='text-white font-medium text-[16px]'>
                  <span className='blue-text-gradient'>@</span> Download
                </p>

                <p className='text-white font-medium text-[16px]'>
                  <span className='blue-text-gradient'>@</span> Google Link
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("", "spring", 0.5, 0.75)}
          className='bg-[#042831] p-10 rounded-3xl xs:w-[320px] w-full'
        >
          <p className='text-white font-black text-[36px]'>Contact</p>

          <div className='mt-1'>
            <p className='text-white tracking-wider text-[18px]'>My contact Information, incase you don't want to use the form below.</p>

            <div className='mt-7 flex justify-between items-center gap-1'>
              <div className='flex-1 flex flex-col'>
                <p className='text-white font-medium text-[16px]'>
                  <span className='blue-text-gradient'>Phone: &nbsp;</span> 1-347-463-8824
                </p>

                <p className='text-white font-medium text-[14px]'>
                  <span className='blue-text-gradient'>Email: &nbsp;</span> mhrizwandev@gmail.com
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("", "spring", 1, 0.75)}
          className='bg-[#042831] p-10 rounded-3xl xs:w-[320px] w-full'
        >
          <p className='text-white font-black text-[36px]'>Connections</p>

          <div className='mt-1'>
            <p className='text-white tracking-wider text-[16px]'>Connect with me and checkout my github portfolio.</p>

            <div className='mt-7 flex justify-between items-center gap-1'>
              <div className='flex-1 flex flex-col'>
                <p className='text-white font-medium text-[16px]'>
                  <span className='blue-text-gradient'>@</span> Download
                </p>

                <p className='text-white font-medium text-[16px]'>
                  <span className='blue-text-gradient'>@</span> Google Link
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");