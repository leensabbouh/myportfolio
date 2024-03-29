import React from 'react'

const Card = (props) => {
  return (
    <div className="timeline_item">
        <i className='{props.icon}'></i>
        <span className="timeline_date">{props.year}</span>
        <h3 className="timeline_title">{props.title}</h3>
        <p className="timeline_text">{props.desc1}</p>
        <p className="timeline_text">{props.desc2}</p>
        <p className="timeline_text">{props.desc3}</p>
        <p className="timeline_text">{props.desc4}</p>
        <p className="timeline_text">{props.desc5}</p>
        <p className="timeline_text">{props.desc6}</p>
    </div>
  )
}

export default Card