import React from 'react'

import {Navbar} from './components'

import {About,Footer,Header,Work,Skills,Testimonials} from './container'
import './App.scss'
const App = () => {
  return (
    <div className='app'>
    <Navbar/>
    <Header/>
    <About/>
    <Work/>
    <Skills/>
    <Testimonials/>
    <Footer/>
    </div>
  );
}

export default App;