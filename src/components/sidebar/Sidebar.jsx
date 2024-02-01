import React, { useState } from 'react'
import './sidebar.css'
const Sidebar = () => {
  
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (

    <div className='' >
           <section className="mobile-menu flex md:hidden">
          <div
            className="HAMBURGER-ICON m-5 space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse humburger"></span>
            <span className="block h-0.5 w-8 animate-pulse humburger"></span>
            <span className="block h-0.5 w-8 animate-pulse humburger"></span>
          </div>

          <div className={isNavOpen ? "show-menu-nav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="nav_list">
            <li className="nav_item">
              <a href="#home" className="nav_link">
                <i className="icon-home"></i>
              </a>
            </li>
             <li className="nav_item">
              <a href="#about" className="nav_link">
                <i className="icon-user-following"></i>
              </a>
            </li>
            <li className="nav_item">
              <a href="#resume" className="nav_link">
                <i className="icon-briefcase"></i>
              </a>
            </li>
            <li className="nav_item">
              <a href="#ed" className="nav_link">
                <i className="icon-graduation"></i>
              </a>
            </li>
            <li className="nav_item">
              <a href="#work" className="nav_link">
                <i className="icon-layers"></i>
              </a>
            </li>
            <li className="nav_item">
              <a href="#blog" className="nav_link">
                <i className="icon-note"></i>
              </a>
            </li>
            <li className="nav_item">
              <a href="#contact" className="nav_link">
                <i className="icon-bubble"></i>
              </a>
            </li>
          </ul>
          </div>
        </section>
      <nav className="nav DESKTOP-MENU fixed aside hidden space-x-8 lg:flex">
        <div className="nav_menu">
        <ul className="nav_list">
            <li className="nav_item">
              <a href="#home" className="nav_link">
                <i className="icon-home"></i>
              </a>
            </li>
             <li className="nav_item">
              <a href="#about" className="nav_link">
                <i className="icon-user-following"></i>
              </a>
            </li>
            <li className="nav_item">
              <a href="#resume" className="nav_link">
                <i className="icon-briefcase"></i>
              </a>
            </li>
            <li className="nav_item">
              <a href="#ed" className="nav_link">
                <i className="icon-graduation"></i>
              </a>
            </li>
            <li className="nav_item">
              <a href="#work" className="nav_link">
                <i className="icon-layers"></i>
              </a>
            </li>
            <li className="nav_item">
              <a href="#blog" className="nav_link">
                <i className="icon-note"></i>
              </a>
            </li>
            <li className="nav_item">
              <a href="#contact" className="nav_link">
                <i className="icon-bubble"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar