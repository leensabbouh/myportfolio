import React from 'react'
import './portfolio.css'
import Menu from './Menu'
import { useState } from 'react'
const Portfolio = () => {
  const [items,setItems]=useState(Menu);
  const filterItem=(categoryItem)=>{
    const updatedItems=Menu.filter((curElem)=>{
      return curElem.category===categoryItem
    })
    setItems(updatedItems)
  }
  return (
    <section className="work container section" id='work'>
      <h2 className="section-title text-center md:text-left">Projects</h2>
      
      <div className="container p-10 md:grid grid-cols-3 gap-2">
        {items.map((elem)=>{
          const{id,image,title,category,link}=elem;
          return(
            <div className="work_card mb-3" key={id}>
              <div className="work_thumbnail">
                <img src={image} alt="" className="work_img" />
               
                {/* <div className="work_mask"></div> */}
              </div>
              <div>
                <h3 className="work_title">{title}</h3>
                <a href={link} className="work_button">
                <i className="icon-link work_button-icon"></i>
              </a>
                </div>
              {/* <span className="work_category">{category}</span>
              <h3 className="work_title">{title}</h3>
              <a href={link} className="work_button">
                <i className="icon-link work_button-icon"></i>
              </a> */}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio