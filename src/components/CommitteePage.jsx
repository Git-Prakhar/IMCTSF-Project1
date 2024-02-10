import React from 'react'
import './css/committepage.css'
import Background from './Background'

export default function CommitteePage() {
    document.title = 'IMCTSF - Committee';
    return (
        <div id='committeePage'>
            <Background />
            <div id="cpSection1" className='df-col'>
                <div id="cpHeading">
                    Committee Members
                </div>
                <div id="cpS1Con" className='df-col'>
                    IMCTSF 2024
                    <span>1ST INTERNATIONAL CONFERENCE ON INNOVATIONS IN MECHANICAL AND COMPUTING TECHNOLOGIES FOR SUSTAINABLE FUTURE</span>
                </div>
            </div>
            <div id="cpSection2" className='df-col'>
                <div className="cpCardHolder">
                    <div className="cpCard df">
                        <div className="cpCardLeft">Advisory Board</div>
                        <hr></hr>
                        <div className="cpCardRight">
                            <div className="cpCardItem">
                                <div className="cpCardName">Prof. Atul N. Bharat</div>
                                <div className="cpCardRole">Group Director (CDC)</div>
                            </div>
                            <div className="cpCardItem">
                                <div className="cpCardName">Dr. S. C. Sharma</div>
                                <div className="cpCardRole">Director</div>
                            </div>
                        </div>
                    </div>
                    <div className="cpCard df">
                        <div className="cpCardLeft">Cheif Patron</div>
                        <hr></hr>
                        <div className="cpCardRight">
                            <div className="cpCardItem">
                                <div className="cpCardName">Shri Ashok Sojatia</div>
                            </div>
                        </div>
                    </div>
                    <div className="cpCard df">
                        <div className="cpCardLeft">Patron</div>
                        <hr></hr>
                        <div className="cpCardRight">
                            <div className="cpCardItem">
                                <div className="cpCardName">Shri Ashish Sojatia</div>
                            </div>
                            <div className="cpCardItem">
                                <div className="cpCardName">Shri Anand Sojatia</div>
                            </div>
                            <div className="cpCardItem">
                                <div className="cpCardName">Shri Gourav Sojatia</div>
                            </div>
                        </div>
                    </div>
                    <div className="cpCard df">
                        <div className="cpCardLeft">Coneners</div>
                        <hr></hr>
                        <div className="cpCardRight">
                            <div className="cpCardItem">
                                <div className="cpCardName">Dr. Amit Kumar Marwah</div>
                            </div>
                            <div className="cpCardItem">
                                <div className="cpCardName">Prof. Geeta Santhosh</div>
                            </div>
                        </div>
                    </div>
                    <div className="cpCard df">
                        <div className="cpCardLeft">Organising Secretaries</div>
                        <hr></hr>
                        <div className="cpCardRight">
                            <div className="cpCardItem">
                                <div className="cpCardName">Prof. Abhishek Sharma</div>
                            </div>
                            <div className="cpCardItem">
                                <div className="cpCardName">Dr. Arvind Jaiswal</div>
                            </div>
                            <div className="cpCardItem">
                                <div className="cpCardName">Prof. Amit Kumar Kundu</div>
                            </div>
                            <div className="cpCardItem">
                                <div className="cpCardName">Dr. Nitin Kulkarni</div>
                            </div>
                        </div>
                    </div>
                    <div className="cpCard df">
                        <div className="cpCardLeft">Technical Committee</div>
                        <hr></hr>
                        <div className="cpCardRight">
                            <div className="cpCardItem">
                                <div className="cpCardName">Dr. Angappa Gunasekaran</div>
                                <div className="cpCardRole">Pennsylvania State University (USA)</div>
                            </div>
                            <div className="cpCardItem">
                                <div className="cpCardName">Dr. Kinan Govindan</div>
                                <div className="cpCardRole">Director, Centre for Sustainable Operations<br /> and Resilient Supply Chain <br />(Denmark, Europe)</div>
                            </div>
                            <div className="cpCardItem">
                                <div className="cpCardName">Dr. Prveen Bidare</div>
                                <div className="cpCardRole">Sheffield Hallam University (UK)</div>
                            </div>
                            <div className="cpCardItem">
                                <div className="cpCardName">Dr. Charmaine Gangen</div>
                                <div className="cpCardRole">Fonder & CEO, CGM training & Consulting,<br /> Cape Town (South Africa)</div>
                            </div>
                        </div>
                    </div>
                    <div className="cpCard df">
                        <div className="cpCardLeft">Advisory Board</div>
                        <hr></hr>
                        <div className="cpCardRight">
                            <div className="cpCardItem">
                                <div className="cpCardName">Prof. Atul N. Bharat</div>
                                <div className="cpCardRole">Group Director (CDC)</div>
                            </div>
                            <div className="cpCardItem">
                                <div className="cpCardName">Dr. S. C. Sharma</div>
                                <div className="cpCardRole">Director</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
