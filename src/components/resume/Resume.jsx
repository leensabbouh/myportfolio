import React from 'react'
import './resum.css'
import Data from './Data'
import Card from './Card'
const Resume = () => {
  return (
    <section className="resume container section" id='ed'>
      <h2 className="section-title text-center md:text-left">Education</h2>
      <div className="container p-10">
        <div className="timeline ">
          {Data.map((val,id)=>{
            if(val.category==="education"){
              return(<Card key={id} icon={val.icon} title={val.title} year={val.year} desc1={val.desc1} 
                desc2={val.desc2} desc3={val.desc3} desc4={val.desc4} desc5={val.desc5} desc6={val.desc6} />)
            }
          })}
        </div>
       
      </div>
    </section>
  )
}

export default Resume