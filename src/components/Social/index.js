import React from 'react';
import './social.css';
import {
  FaLinkedin,
  FaTelegram,
  FaDiscord,
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaGithub,
} from 'react-icons/fa';

function Social() {
  return (
    <div className="Social">
      <ul className="Social-content">
        <li>
          <a
            href="https://www.linkedin.com/in/luis-eduardo-c-6015131ab/"
            target="_blank"
          >
            <FaLinkedin className="fa-brands fa-linkedin" />
          </a>
        </li>
        <li>
          <a href="https://t.me/Candelo_30" target="_blank">
            <FaTelegram className="fa-brands fa-telegram" />
          </a>
        </li>
        <li>
          <a
            href="https://discord.com/channels/@me/933515593863295067"
            target="_blank"
          >
            <FaDiscord className="fa-brands fa-discord" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/Luis.Candelo.bass/" target="_blank">
            <FaFacebook className="fa-brands fa-facebook" />
          </a>
        </li>
        <li>
          <a href="https://wa.me/+573182584548" target="_blank">
            <FaWhatsapp className="fa-brands fa-whatsapp" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/luis_bass_1/?hl=es-la"
            target="_blank"
          >
            <FaInstagram className="fa-brands fa-instagram" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Candelo30" target="_blank">
            <FaGithub className="fa-brands fa-instagram" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export { Social };
