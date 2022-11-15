import React from 'react';
import {
  HiBars3CenterLeft,
  HiOutlineIdentification,
  HiOutlineSparkles,
  HiOutlineRss,
} from 'react-icons/hi2';
import { SiHomeadvisor } from 'react-icons/si';
import './header.css';

function Header() {
  const [show, setShow] = React.useState(
    localStorage.getItem('See') === 'show' ? true : false
  );

  const [theme, setTheme] = React.useState(
    localStorage.getItem('theme') === 'dark' ? true : false
  );

  React.useEffect(() => {
    document
      .getElementsByTagName('body')[0]
      .setAttribute('class', localStorage.getItem('theme'));
  }, [theme]);

  const toggleThemeChange = () => {
    if (theme === false) {
      localStorage.setItem('theme', 'dark');
      setTheme(true);
    } else {
      localStorage.setItem('theme', 'light');
      setTheme(false);
    }
  };

  React.useEffect(() => {
    document
      .getElementsByClassName('main-menu')[0]
      .setAttribute('id', localStorage.getItem('See'));
  }, [show]);

  React.useEffect(() => {
    document
      .getElementsByTagName('body')[0]
      .setAttribute('id', localStorage.getItem('See'));
  }, [show]);

  const togglemenu = () => {
    if (show === false) {
      localStorage.setItem('See', 'show');
      setShow(true);
    } else {
      localStorage.setItem('See', 'disabled');
      setShow(false);
    }
  };
  return (
    <header className="header">
      <span className="header-logo">My Porfolio</span>
      <nav className="main-nav">
        <ul className="main-menu" id="menu">
          <li className="main-menu__item">
            <a className="main-menu__link" href="#Home">
              <SiHomeadvisor />
              Home
            </a>
          </li>
          <li className="main-menu__item">
            <a className="main-menu__link" href="#About_me">
              <HiOutlineIdentification />
              About me
            </a>
          </li>
          <li className="main-menu__item">
            <a className="main-menu__link" href="#Projects">
              <HiOutlineSparkles />
              Projects
            </a>
          </li>
          <li className="main-menu__item">
            <a className="main-menu__link" href="#contact_me">
              <HiOutlineRss />
              Contacta me
            </a>
          </li>
        </ul>
      </nav>
      <div className="container-mode">
        <button
          className="icon-menu mode"
          id="toggle-mode"
          onClick={toggleThemeChange}
          theme={theme}
        >
          Change theme
        </button>
      </div>
      <div className="container-bars">
        <HiBars3CenterLeft
          className="icon-menu bars"
          id="toggle-menu"
          onClick={togglemenu}
          show={show}
        />
      </div>
    </header>
  );
}

export { Header };
