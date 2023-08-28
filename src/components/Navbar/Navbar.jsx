import React,{useState} from 'react'
import './Navbar.scss'
import {Link} from 'react-router-dom'

//import {images} from '../../constants'
import {HiMenuAlt4,HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
        
          <a href='#home'> <h3>ℝ𝕒<span className='ff'>𝕁𝔼𝔼𝕍</span></h3></a>
           
        </div>
        <ul className='app__navbar-links'>
            {['home','about','work','skills','contact'].map((item)=>(
                <li className='app__flex p-text' key={`link-${item}`}>
                    <div/>
                    <a href={`#${item}`} style={{fontSize:'18px'}}>{item}</a>
                </li>
            ))}
        </ul>
        <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)} style={{fontSize:'18px'}}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
