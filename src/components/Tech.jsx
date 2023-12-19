import React from 'react'
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { styles } from '../Style';

const Tech = () => {

  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.heroHeadText}>Skills I have.</p>
    </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
        {technologies.map((technology)=>(
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech,"skills")