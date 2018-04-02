import React from 'react';
import './Footer.css';
import Github from './Github';
import Mail from './Mail';
import Linkedin from './Linkedin';
import Twitter from './Twitter';

const linkedin = 'https://www.linkedin.com/in/lucaslencinas';
const twitter = 'https://twitter.com/lllencinas';
const github = 'https://github.com/lucaslencinas';
const mail = 'lllencinas@gmail.com';

const Footer = () => (
  <div className="footer">
    <div className="item">
      <a href={linkedin} target="_blank">
        <Linkedin />
      </a>
    </div>
    <div className="item">
      <a href={github} target="_blank">
        <Github />
      </a>
    </div>
    <div className="item">
      <a href={twitter} target="_blank">
        <Twitter />
      </a>
    </div>
    <div className="item">
      <a href={`mailto:${mail}`} target="_blank">
        <Mail />
      </a>
    </div>
  </div>
);

export default Footer;
