import React, {useState} from 'react'
import './Testimonials.scss'
import { AppWrap , MotionWrap} from '../../wrapper';

import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


 
const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const {name, job , image,text}=people[index];
  const prevPerson=()=>{
    let newNumber=index-1;
    return setIndex(checkNumber(newNumber));
  }
  const nextPerson=()=>{
    let newNumber=index+1;
    return setIndex(checkNumber(newNumber));
  }
  const checkNumber=(number)=>{
    if(number>people.length-1){
      return 0;
    }
    if(number<0){
      return people.length-1;
    }
    return number;
  }
  return (
    <div>
    <h2 className="head-text"> Testimonials</h2>
        <article className='review'>
    <div className='img-container'>
      <img src={image} alt={name} className='person-img' />
      <span className='quote-icon'>
        <FaQuoteRight />
      </span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='h-text'>{text}</p>
    <div className='button-container'>
      <button className='prev-btn' onClick={prevPerson}>
        <FaChevronLeft />
      </button>
      <button className='next-btn' onClick={nextPerson}>
        <FaChevronRight />
      </button>
    </div>
    
  </article>
    </div>
  )
}

export default AppWrap(
  MotionWrap(Testimonials, 'app__testimonials'),
  'testimonials',
  'app__primarybg',
);

