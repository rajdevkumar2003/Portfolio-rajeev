import React from 'react';
//import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap , MotionWrap} from '../../wrapper';
import './Skills.scss'

import skills from './data.js'


const Skills = () => {
  return (
   <>
     <h2 className="head-text"> skills & experiences</h2>
     <div className="app__skills-container">
     <motion.div className="app__skills-list">
     {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.img} alt={skill.name} />
              </div>
              <p className="p-text" style={{fontSize:'17px'}}>{skill.name}</p>
            </motion.div>))}
     
     </motion.div>
     </div> 
   </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
