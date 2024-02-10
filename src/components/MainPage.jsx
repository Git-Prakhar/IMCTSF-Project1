import React, { useEffect, useState } from 'react'
import './css/mainpage.css'
import locationIcon from '../images/location.png'
import calenderIcon from '../images/calender.png'
import aitr2 from '../images/AIRT2.jpg'
import locationIcon2 from '../images/location2.png'
import calenderIcon2 from '../images/calendar2.png'
import twitterIcon from '../images/twitter.png'
import youtubeIcon from '../images/youtube.png'
import linkedinIcon from '../images/linkedin.png'
import instagramIcon from '../images/instagram.png'
import facebookIcon from '../images/facebook.png'
import Background from './Background'


export default function MainPage() {
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            setMobile(window.innerWidth <= 916);
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div id='mainPage'>
            <Background />
            <div id="mpSection1" className='df-col'>
                <div id="mpS1Heading">
                    1ST INTERNATIONAL CONFERENCE<br />ON<br />INNOVATIONS IN MECHANICAL AND COMPUTING TECHNOLOGIES<br />FOR SUSTAINABLE FUTURE<br />(IMCTSF 2024)
                    <div>
                        Hybrid Mode
                    </div>
                </div>
                <div id="mpS1TimeLocation" className='df'>
                    <div className="time-location df">
                        <img src={calenderIcon} alt="" className='icon' />
                        <div className="text">9th March 2024</div>
                    </div>
                    <div className="time-location df">
                        <img src={locationIcon} alt="" className='icon' />
                        <div className="text df-col"><span>Acropolis Institute</span> <span>Technology and Research</span> <span>Indore</span></div>
                    </div>
                </div>
            </div>
            <div id="mpSection2">
                <div id="mpS2Top" className='df'>
                    <ul className={mobile ? ('df-col') : ('df')}>
                        <li className='df-col'>
                            <div className="mpS2TopDate">15 FEB 2024</div>
                            <div className="mpS2TopMessage">Submission Of Full Length Paper</div>
                        </li>
                        <li className='df-col'>
                            <div className="mpS2TopDate">28 FEB 2024</div>
                            <div className="mpS2TopMessage">Notification of Acceptance</div>
                        </li>
                        <li className='df-col'>
                            <div className="mpS2TopDate">02 MARCH 2024</div>
                            <div className="mpS2TopMessage">Author Registration Deadline</div>
                        </li>
                        <li className='df-col'>
                            <div className="mpS2TopDate">02 MARCH 2024</div>
                            <div className="mpS2TopMessage">Camera Ready Paper</div>
                        </li>
                        <li className='df-col'>
                            <div className="mpS2TopDate">09 MARCH 2024</div>
                            <div className="mpS2TopMessage">Confrence Date</div>
                        </li>
                    </ul>
                </div>
                <div id="mpS2Main" className='df-col'>
                    <div id="mpS2MainHeadingTop">IMCTSF - 2024</div>
                    <div id="mpS2MainHeading">1st International Conference on<br />
                        Innovations in Mechanical and Computing Technologies <br />
                        For Sustainable Future
                    </div>
                    <div id="mpS2MainCon">
                        <div id="mpS2MainConLeft">The 'International Conference' is meticulously designed to bring together renowned academicians, honoured researchers from distinguished institutions, industry leaders and practitioners as well as doctoral students. With the greatest minds across the globe, a simulation will be developed on "Innovations in Mechanical Engineering and Computing Technologies for Sustainable Development" to deliberate its influence on advance technologies of engineering and the world economy as a whole. The conference will provide a unique platform for the participants to evolve their ideas and cogitation as they listen to a well-crafted panel discussion along with thought-provoking speaker sessions.</div>
                        <img src={aitr2} alt='' id="mpS2MainConRight"></img>
                    </div>
                    <div id="mpS2MainTimeLocation" className='df'>
                        <div className="mpS2MainTimeLocationCard df-col">
                            <img src={calenderIcon2} alt='' className="logo"></img>
                            <div><strong>When</strong></div>
                            <div className="text">9 March, 2024</div>
                        </div>
                        <div className="mpS2MainTimeLocationCard df-col">
                            <img src={locationIcon2} alt='' className="logo"></img>
                            <div><strong>Where</strong></div>
                            <div className="text">Aropolis Institute of Technology and Research<br />
                                Indore, India</div>
                        </div>
                    </div>
                    <div id="mpS2Note">Note: All accepted and presented papers in IMCTSF2024 will be submitted to IEEE Xplore.</div>
                </div>
            </div>
            <footer id='mpFooter' className='df-col'>
                <hr></hr>
                <div id='footercon' className='df'>
                    <div>&copy; Copyright 2024 by Me :)</div>
                    <div id='mpSocials' className='df'>
                        <a href="/"><div style={{backgroundImage: `url(${twitterIcon})` }} className='mpSocial'></div></a>
                        <a href="/"><div style={{backgroundImage: `url(${facebookIcon})` }} className='mpSocial'></div></a>
                        <a href="/"><div style={{backgroundImage: `url(${instagramIcon})` }} className='mpSocial'></div></a>
                        <a href="/"><div style={{backgroundImage: `url(${linkedinIcon})` }} className='mpSocial'></div></a>
                        <a href="/"><div style={{backgroundImage: `url(${youtubeIcon})` }} className='mpSocial'></div></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
