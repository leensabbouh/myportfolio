import React from 'react'
import './blog.css'
import Image1 from "../../assets/blog-1.svg"
import Image2 from "../../assets/blog-2.svg"
import Image3 from "../../assets/blog-3.svg"
const Blog = () => {
  return (
    <section className="blog container section" id='blog'>
      <h2 className="section-title">Technologies</h2>
      <div className="about_skills p-10 ">
            <div className="skills_data py-10">
              <div className="md:skills_title">
                <h3 className="skills_name">Html</h3>
                <span className="skills_number">Advanced</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage ui_design"></span>
              </div>
            </div>
            <div className="skills_data py-10">
              <div className="skills_title">
                <h3 className="skills_name">Css,Sass,Bootstarp,Tailwind,Materialize</h3>
                <span className="skills_number">Advanced</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage ui_design"></span>
              </div>
            </div>
            <div className="skills_data py-10">
              <div className="skills_title">
                <h3 className="skills_name">JavaScript,TypeScript,JQuery</h3>
                <span className="skills_number">Advanced</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage ui_design"></span>
              </div>
            </div>
            <div className="skills_data py-10">
              <div className="skills_title">
                <h3 className="skills_name">UI/UX in Figma,Adobe XD</h3>
                <span className="skills_number">Advanced</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage ui_design"></span>
              </div>
              
            </div>
            <div className="skills_data py-10">
              <div className="skills_title">
                <h3 className="skills_name">React</h3>
                <span className="skills_number">Advanced</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage ui_design"></span>
              </div>
            </div>
            <div className="skills_data py-10">
              <div className="skills_title">
                <h3 className="skills_name">Next.js</h3>
                <span className="skills_number">Regular</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage regular"></span>
              </div>
            </div>
          </div>
     

    </section>
  )
}

export default Blog