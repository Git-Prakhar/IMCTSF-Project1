import React, { useEffect, useState } from 'react'
import './css/navbar.css'
import dropdownImg from '../images/down-arrow.png'

export default function Navbar() {
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            setMobile(window.innerWidth <= 916);
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [navbarDropdown, setNavbarDropdown] = useState(false);

    const toggleNavbar = () => {
        setNavbarDropdown(!navbarDropdown);
    }

    return (
        <>
            {
                mobile ?
                    (
                        <div id="navbarMobile" className='df'>
                            <div id="navMobileSponsorImg"></div>
                            <div id='navMobileBtn' onClick={toggleNavbar}></div>
                            {
                                navbarDropdown && <div id='navMobileDropdown'>
                                    <div id="navBtnHolder">
                                        <ul className='df-col' id='navBtns'>
                                            <li><a href='/'>About Us</a></li>
                                            <li><a href='/'>Committee</a></li>
                                            <li><a href='/'>Keynote Speaker</a></li>
                                            <li>
                                                <a href="/">Call for Papers</a>
                                            </li>
                                            <li><a href='/'>Gallery</a></li>
                                            <li><a href='/'>Registration</a></li>
                                            <li><a href='/'>Confrence Programme</a></li>
                                            <li><a href='/'>Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            }
                        </div>
                    ) : (
                        <div id='navbar' className='df'>
                            <div id="navbarCon" className='df-col'>
                                <div id="navSponsorImg"></div>
                                <div id="navBtnHolder">
                                    <ul className='df' id='navBtns'>
                                        <li><a href='/'>About Us</a></li>
                                        <li><a href='/'>Committee</a></li>
                                        <li><a href='/'>Keynote Speaker</a></li>
                                        <li>
                                            <div id='cfpBtn'>
                                                <a href="/">Call for Papers <img src={dropdownImg} alt="" id='downarrow' /></a>
                                                <div id='cfpDropdown'>
                                                    <a href="/" style={{ fontSize: '16px' }}>Submission Rules</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li><a href='/'>Gallery</a></li>
                                        <li><a href='/'>Registration</a></li>
                                        <li><a href='/'>Confrence Programme</a></li>
                                        <li><a href='/'>Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
            }
        </>
    )
}
