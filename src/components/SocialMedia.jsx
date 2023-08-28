import React from 'react'
import {BsTelephone,BsInstagram} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'
const SocialMedia = () => {
  return (
    <div className='app__social'>
       <div>
       <a href='https://m.facebook.com/profile.php?id=100013385655846'>
         <BsTelephone/>
         </a>
       </div>
       <div>
       <a href='https://m.facebook.com/profile.php?id=100013385655846'>
         <FaFacebook/>
         </a>
       </div>
       <div>
       <a href='https://www.instagram.com/rajeevv___/'>
         <BsInstagram/>
         </a>
       </div>
      
    </div>
  )
}

export default SocialMedia
