import React from 'react'
import './style.css';
import Chefimg from './images/chef.jpg'; 

function About() {
  return (
    <div className='main-conatiner'>
        <div className='container'>
          <div className='hero'>
              <h1 className='text-center'>About</h1>
          </div>
        </div>
        <div className='stripper'>
          <div className='grid-container'>
              <div className='grid-row'>
                <div className='grid-col2'>
                <div className='grid-img'>
                  <img src={Chefimg} alt='hello' />
                </div>
                  <div className='grid-content'>
                    <h3>How Ginza Came to be</h3>
                    <p>Ginza had an unconventional start as a restaurant.
                    Originally opening as a pop-up event, our original 
                    aim was to showcase the unique culinary stylings of
                    our head chef, Kabu Natsu. </p>
                  </div>
                </div>
                
          </div>
          </div>
         
         
        </div>
    </div>
    
    
   
   
  )
}

export default About
