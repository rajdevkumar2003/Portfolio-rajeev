import React from 'react'
import {BsTelephone,BsTwitter ,BsMailbox2} from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='app__social'>
       <div>
       <a href='tel:+917879548574'>
         <BsTelephone/>
         </a>
       </div>
       <div>
       <a href='https://twitter.com/rajeevv___'>
         <BsTwitter/>
         </a>
       </div>
       <div>
       <a   href="mailto:rajeevkumarjbo2003@gmail.com ">
         <BsMailbox2/>
         </a>
       </div>
      
    </div>
  )
}

export default SocialMedia
