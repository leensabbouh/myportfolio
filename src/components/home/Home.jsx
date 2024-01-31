import React from 'react'
import './home.css'
import me from '../../assets/avatar-1.jpg'
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'
const Home = () => {
  return (
    <section className="home container" id='home'>
      <div className="intro">
        <img src={me} alt="" className="home_img" />
        <h1 className="home_name">leen sabbouh</h1>
        <span className="home_education">I'm a front-end developer</span>
        <ScrollDown/>
      </div>
     
    </section>
  )
}

export default Home