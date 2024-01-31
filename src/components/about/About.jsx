import React from 'react'
import './about.css'
import Image from '../../assets/avatar-2.jpg'
const About = () => {
  return (
    <section className="about container section " id='about'>
      <h2 className="section-title text-center md:text-left">About Me</h2>
      <div className=" md:grid md:grid-cols-3 gap-3 m-2 p-10">
        <img height={853} src={Image} alt="" className='about_img mb-3 mx-auto' />
        <div className="about_data col-span-2">
          <div className="about_info">
            <p className="about_description">Hello! I'm Leen Sabbouh, a passionate front-end developer with a love for crafting engaging 
            and user-friendly digital experiences. With a solid foundation in HTML, CSS, and JavaScript,
             I specialize in building dynamic and responsive web applications using the React framework. <br />
             I thrive in turning design concepts into seamless, interactive, and visually appealing user interfaces. Proficient in React, I enjoy the challenge of building modular and scalable components that enhance the overall user experience.</p>
            

          </div>
        </div>
      </div>
      
    </section>
  )
}

export default About