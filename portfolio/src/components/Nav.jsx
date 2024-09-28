import React, { useState } from 'react';
import { Link } from 'react-scroll';

function Nav() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className="headers">
            <div className="container">
                <div className="enter">
                    <h1><span>V</span>ikram.</h1>
                </div>
                <div className="burger-menu" onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <nav>
                    <ul className={isMenuOpen ? 'mobile-menu active' : 'mobile-menu'}>
                        <li><Link activeClass='active' to='Homes' spy={true} smooth={true} offset={-100} duration={500}>Home</Link></li>
                        <li><Link activeClass='active' to='Abouts' spy={true} smooth={true} offset={-50} duration={500}>About</Link></li>
                        <li><Link activeClass='active' to='Resumes' spy={true} smooth={true} offset={-10} duration={500}>Resume</Link ></li>
                        <li><Link activeClass='active' to='Portfolios' spy={true} smooth={true} offset={-100} duration={500}>Portfolio</Link></li>
                        <li><Link activeClass='active' to='Contacts' spy={true} smooth={true} offset={-10} duration={500}>Contact</Link></li>
                    </ul>
                    <ul className="desktop-menu">
                        <li><Link activeClass='active' to='Homes' spy={true} smooth={true} offset={-100} duration={500}>Home</Link></li>
                        <li><Link activeClass='active' to='Abouts' spy={true} smooth={true} offset={-50} duration={500}>About</Link></li>
                        <li><Link activeClass='active' to='Resumes' spy={true} smooth={true} offset={-10} duration={500}>Resume</Link ></li>
                        <li><Link activeClass='active' to='Portfolios' spy={true} smooth={true} offset={-100} duration={500}>Portfolio</Link></li>
                        <li><Link activeClass='active' to='Contacts' spy={true} smooth={true} offset={-10} duration={500}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Nav;
