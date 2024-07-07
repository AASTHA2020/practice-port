import React from 'react';
import linkedInImage from '../images/linkedin-logo.png';
import gitHubImage from '../images/github-light.png';
import xImage from '../images/x-twitter-light.svg';
import '../styles/Footer.css';

export default function Footer() {

    return (
        <footer className="footer flex">
            <a href="https://github.com/AASTHA2020" className="footerLink flex">
                <img src={gitHubImage} alt="GitHub" width={20} />
                <span>GitHub - AASTHA2020</span>
            </a>
            <a href="www.linkedin.com/in/aastha-modi11" className="footerLink flex">
                <img src={linkedInImage} alt="LinkedIn" width={20} />
                <span>LinkedIn - Aastha Modi</span>
            </a>
            <a href="https://twitter.com/modi_aasthaaaa" className="footerLink flex">
                <img src={xImage} alt="LinkedIn" width={20} />
                <span>X-Twitter - @modi_aasthaaaa</span>
            </a>
        </footer>
    );
};