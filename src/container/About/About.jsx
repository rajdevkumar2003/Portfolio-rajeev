import React from 'react'
import './About.scss'
import {motion} from 'framer-motion';
import {images} from '../../constants';
import {AppWrap, MotionWrap} from '../../wrapper';

const abouts=[{title:'UI' , description:'My approach to UI design involves a balance between aesthetics and usability. I strive to create interfaces that not only look visually appealing but also prioritize user needs and interactions. By combining my skills in Tailwind CSS, MUI, CSS, Sass, and Figma, ',imgUrl:images.about01},
              {title:'Frontend/UX' , description:'I wanted to highlight my frontend skills: I am experienced with ReactJS, Next.js, JavaScript/TypeScript, and Tailwind CSS.',imgUrl:images.about02},
              {title:'Backend' , description:'I am well-versed in backend tech: Node.js, Express, MongoDB, Mongoose, Sanity.io, and Postman. With these, I craft efficient APIs, manage data seamlessly, and ensure smooth content workflows.',imgUrl:images.about03},
              {title:'Projects' , description:'Exciting news – I have completed 10+ mega projects, 20+ mini projects, and actively contributed to major projects through courses. These experiences showcase my versatility and commitment to delivering impactful solutions.',imgUrl:images.about04}]

const About = () => {
  return (
    <>
    <h2 className='head-text  HH2'>
    I Know that
    <span> Good Design </span>
    means 
    <br/><span>Good Buisness</span>
    </h2>

    <div className='app__profiles'>
    {abouts.map((about,index)=>(
       <motion.div
       whileInView={{opacity:1,scale:[0,1]}}
       whileHover={{scale:1.1}}
       transition={{duration:0.5,type:'tween'}}
       className='app__profile-item'
        key={about.title +index}>
        <img src={about.imgUrl} alt={about.title}/>
        <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
       </motion.div>
    ))}
    </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
