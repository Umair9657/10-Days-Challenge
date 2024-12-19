import React from 'react'
import HeroImage from '../assets/hero-image.jpg'

const Hero = () => {

    return (
        <div className='bg-black text-white text-center py-16'>
            <img src={HeroImage} alt=""
                className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
            <h1 className='text-4xl font-bold'>
                I'm {" "}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Umair Ansari</span>
                , Java Full-Stack Developer
            </h1>
            <p className='mt-4 text-lg text-gray-300'>
            I bring expertise in building next-gen, responsive web applications with a 
            strong focus on modern design principles.
            </p>
            <div className='mt-8 space-x-4'>
                <button
                    onClick={() => window.open('https://www.linkedin.com/in/umair-ansari1', '_blank')}
                    className='bg-gradient-to-r from-green-400 to-blue-500 text-white
                     transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full mt-4'>
                    Connect With Me
                </button>
                <button
                    onClick={() => window.open('Umair Ansari Resume.pdf')}
                    className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
              transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                    Resume
                </button>
            </div>

        </div>
    )
}
export default Hero
