import React from 'react'
import '../resume/resum.css'
import Card from '../resume/Card'

import Data from '../resume/Data'
const Service = () => {
  return (
    <section className="resume container section" id='resume'>
      <h2 className="section-title text-center md:text-left">Experience</h2>
      <div className="container p-10">
        
        <div className="timeline">
          {Data.map((val,index)=>{
            if(val.category==="experience"){
              return(<Card key={index} icon={val.icon} title={val.title} year={val.year} desc1={val.desc1} 
                desc2={val.desc2} desc3={val.desc3} desc4={val.desc4} desc5={val.desc5} desc6={val.desc6} />)
            }
          })}
        </div>
      </div>
    </section>
  )
}

export default Service