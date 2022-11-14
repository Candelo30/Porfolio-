import React from 'react';
import { CiSun, CiCircleList } from 'react-icons/ci';
import './header.css';



function Header() {
  return (
    <header className="header">
      <span className="header-logo">My Porfolio</span>
      <nav className="main-nav">
        <ul className="main-menu" id="menu">
          <li className="main-menu__item">
            <a className="main-menu__link" href="#Home">
              Home
            </a>
          </li>
          <li className="main-menu__item">
            <a className="main-menu__link" href="#About_me">
              About me
            </a>
          </li>
          <li className="main-menu__item">
            <a className="main-menu__link" href="#Projects">
              Projects
            </a>
          </li>
          <li className="main-menu__item">
            <a className="main-menu__link" href="#contact_me">
              Contacta me
            </a>
          </li>
        </ul>
      </nav>
      <div className="container-mode">
        <CiSun className="icon-menu mode" id="toggle-mode" />
      </div>
      <div className="container-bars">
        <CiCircleList className="icon-menu bars" id="toggle-menu" />
      </div>
    </header>
  );
}

export {Header}