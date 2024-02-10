import React, { useEffect, useState } from 'react'
import './css/navbar.css'
import dropdownImg from '../images/down-arrow.png'
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            console.log(mobile, window.innerWidth);
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
                                            <li><Link onClick={toggleNavbar} to='/'>About Us</Link></li>
                                            <li><Link onClick={toggleNavbar} to='/committee'>Committee</Link></li>
                                            <li><Link onClick={toggleNavbar} to='/'>Keynote Speaker</Link></li>
                                            <li><Link onClick={toggleNavbar} to="/call-for-papers">Call for Papers</Link></li>
                                            <li><Link onClick={toggleNavbar} to='/'>Gallery</Link></li>
                                            <li><Link onClick={toggleNavbar} to='/'>Registration</Link></li>
                                            <li><Link onClick={toggleNavbar} to='/'>Confrence Programme</Link></li>
                                            <li><Link onClick={toggleNavbar} to='/'>Contact Us</Link></li>
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
                                        <li><Link to='/'>About Us</Link></li>
                                        <li><Link to='/committee'>Committee</Link></li>
                                        <li><Link to='/'>Keynote Speaker</Link></li>
                                        <li><Link to="/call-for-papers">Call for Papers</Link></li>
                                        <li><Link to='/'>Gallery</Link></li>
                                        <li><Link to='/'>Registration</Link></li>
                                        <li><Link to='/'>Confrence Programme</Link></li>
                                        <li><Link to='/'>Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
            }
        </>
    )
}
