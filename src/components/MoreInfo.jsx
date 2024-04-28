import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { linkedInSvg, githubSvg, portfolioSvg, resumePDF, resumeSvg, phoneSvg, emailSvg, gDriveSvg } from "../assets";
const MoreInfo = () => {
  return (
    <div className={`mt-12 bg-tertiary rounded-[20px]`}>
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
          <p className='text-white font-black sm:text-[36px] text-[26px]'>Resume</p>

          <div className='mt-1'>
            <p className='text-white tracking-wider sm:text-[18px] text-[14px]'>Download and view my resume, or visit Google Docs link.</p>

            <div className='mt-7 flex justify-evenly items-center gap-1'>
              <div className="flex flex-col justify-center mt-2 gap-2 ">
                {/* <a
                  href={resumePDF}
                  download
                  className="gap-1 rounded-full border border-black bg-[#0a5e74] py-1.5 px-5 text-black transition-all hover:bg-[#0f829e] hover:text-white text-center text-sm flex items-center justify-center hover:scale-110"
                >
                  <img
                    src={resumeSvg}
                    alt="Resume Logo"
                    width={15}
                    height={15}
                    className="object-contain"
                  />
                  Download Resume
                </a> */}

                <a
                  href="https://docs.google.com/document/d/1hslrwYGvKjxQ8HfrmsJ3-4oztxW0Nb60zqWbXgD_6-A/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-1 rounded-full border border-black bg-[#0a5e74] py-1.5 px-5 text-black transition-all hover:bg-[#0f829e] hover:text-white text-center text-sm flex items-center justify-center hover:scale-110"
                >
                  <img
                    src={gDriveSvg}
                    alt="Google Drive Logo"
                    width={15}
                    height={15}
                    className="object-contain "
                  />
                  Visit Google Docs
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("", "spring", 0.5, 0.75)}
          className='bg-[#042831] p-10 rounded-3xl xs:w-[320px] w-full'
        >
          <p className='text-white font-black sm:text-[36px] text-[26px]'>Contact</p>

          <div className='mt-1'>
            <p className='text-white tracking-wider sm:text-[18px] text-[14px]'>My contact Information, Phone and Email</p>

            <div className='mt-7 flex justify-evenly items-center gap-1'>
              <div className="flex flex-col justify-center mt-2 gap-2 ">
                {/* <a
                  href='tel:+1phone'
                  className="gap-1 rounded-full border border-black bg-[#0a5e74] py-1.5 px-5 text-black transition-all hover:bg-[#0f829e] hover:text-white text-center text-sm flex items-center justify-center hover:scale-110"
                >

                  <img
                    src={phoneSvg}
                    alt="Phone Logo"
                    width={15}
                    height={15}
                    className="object-contain"
                  />
                  <label>Phone:</label>
                  1-phone
                </a> */}

                <a
                  href='mailto:rizzywebworks@gmail.com'
                  className="gap-1 rounded-full border border-black bg-[#0a5e74] py-1.5 px-5 text-black transition-all hover:bg-[#0f829e] hover:text-white text-center text-sm flex items-center justify-center hover:scale-110"
                >
                  <img
                    src={emailSvg}
                    alt="Email Logo"
                    width={15}
                    height={15}
                    className="object-contain "
                  />
                  rizzywebworks@gmail.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("", "spring", 1, 0.75)}
          className='bg-[#042831] p-10 rounded-3xl xs:w-[320px] w-full'
        >
          <p className='text-white font-black sm:text-[36px] text-[26px]'>Connections</p>

          <div className='mt-1'>
            <p className='text-white tracking-wider sm:text-[18px] text-[14px]'>Connect with me on LinkedIn and checkout my Github portfolio.</p>



            <div className='mt-7 flex justify-evenly items-center gap-1'>
              <div className="flex flex-col justify-center mt-2 gap-2 ">
                <a
                  href="https://www.linkedin.com/in/mohammad-h-rizwan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-1 rounded-full border border-black bg-[#0a5e74] py-1.5 px-5 text-black transition-all hover:bg-[#0f829e] hover:text-white text-center text-sm flex items-center justify-center hover:scale-110"
                >
                  <img
                    src={linkedInSvg}
                    alt="LinkedIn Logo"
                    width={15}
                    height={15}
                    className="object-contain"
                  />
                  LinkedIn
                </a>

                <a
                  href="https://www.github.com/mrizwan83"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-1 rounded-full border border-black bg-[#0a5e74] py-1.5 px-5 text-black transition-all hover:bg-[#0f829e] hover:text-white text-center text-sm flex items-center justify-center hover:scale-110"
                >
                  <img
                    src={githubSvg}
                    alt="GitHub Logo"
                    width={15}
                    height={15}
                    className="object-contain "
                  />
                  Github
                </a>

                {/* <a
                  href="https://mrizwan83.github.io/mrizwan83"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-1 rounded-full border border-black bg-[#0a5e74] py-1.5 px-5 text-black transition-all hover:bg-[#0f829e] hover:text-white text-center text-sm flex items-center justify-center hover:scale-110"
                >
                  <img
                    src={portfolioSvg}
                    alt="Portfolio Logo"
                    width={15}
                    height={15}
                    className="object-contain"
                  />
                  Github Portfolio
                </a> */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(MoreInfo, "info");