import React from 'react'
import './css/cfp.css'
import Background from './Background'
import manufacturingIcon from '../images/icons8-design-96.png';
import mechanicsIcon from '../images/icons8-manufacturing-96.png';
import energyIcon from '../images/icons8-energy-96.png';
import greenIcon from '../images/icons8-sustainability-90.png';
import terminalIcon from '../images/icons8-terminal-96.png';
import securityIcon from '../images/icons8-cybersecurity-90.png';
import cryptoIcon from '../images/icons8-crypto-90.png';
import educationIcon from '../images/icons8-education-90.png';

export default function CallForPaper() {
    return (
        <div id='cfp'>
            <Background />
            <div id="cfpSection1" className='df-col'>
                <div id="cfpHeading">CALL FOR PAPERS</div>
                <div id="cpS1Con" className='df-col'>
                    IMCTSF 2024
                    <span>1ST INTERNATIONAL CONFERENCE ON INNOVATIONS IN MECHANICAL AND COMPUTING TECHNOLOGIES FOR SUSTAINABLE FUTURE</span>
                </div>
            </div>
            <div id="cfpSection2" className='df-col'>
                <div id="cfpS2Heading">Broad Themes</div>
                <div id="cfpS2CardHolder" className='df'>
                    <div className="cfpS2Card df">
                        <div className="icon df"><img src={manufacturingIcon} alt="" /></div>
                        <div className="text">Advanced Manufacturing and Design</div>
                    </div>
                    <div className="cfpS2Card df">
                        <div className="icon df"><img src={mechanicsIcon} alt="" /></div>
                        <div className="text">Computational Mechanics and Simulation</div>
                    </div>
                    <div className="cfpS2Card df">
                        <div className="icon df"><img src={energyIcon} alt="" /></div>
                        <div className="text">Energy and Power Engineering</div>
                    </div>
                    <div className="cfpS2Card df">
                        <div className="icon df"><img src={greenIcon} alt="" /></div>
                        <div className="text">Sustainability and Green Engineering</div>
                    </div>
                    <div className="cfpS2Card df">
                        <div className="icon df"><img src={terminalIcon} alt="" /></div>
                        <div className="text">Computer Science and Applications</div>
                    </div>
                    <div className="cfpS2Card df">
                        <div className="icon df"><img src={securityIcon} alt="" /></div>
                        <div className="text">Cybersecurity, Privacy and Network Security</div>
                    </div>
                    <div className="cfpS2Card df">
                        <div className="icon df"><img src={cryptoIcon} alt="" /></div>
                        <div className="text">Blockchain and Crypto Currency</div>
                    </div>
                    <div className="cfpS2Card df">
                        <div className="icon df"><img src={educationIcon} alt="" /></div>
                        <div className="text">Interdisciplinary Research and Education</div>
                    </div>
                </div>
            </div>
            <div id="cfpSection3" className='df-col'>
                <h1>Sub - Themes</h1>
                <p>
                    Additive Manufacturing, 3D printing, Computer-Aided Design (CAD), Computer-Aided Manufacturing (CAM), Robotics, Automation, Composite Materials, Nanomaterials, Smart Materials, Lightweight Materials, Sustainable Manufacturing, Green Manufacturing, Computational Fluid Dynamics (CFD), Optimization, Machine Learning, Artificial Intelligence, Renewable Energy, Energy Efficiency, Energy Storage, Energy Management, Sensors and Actuators, Control Systems, Signal Processing, Embedded Systems, Software Engineering, Algorithms and Data Structures, Internet of Things, Computer Vision, Natural Language Processing, Big Data, Data Analytics, Data Science, Image processing, Human Computer Interaction, Quantum Computing, Aspects of Computing, Computer Education and Pedagogy, Innovation, Enterpreneurship etc.
                </p>
            </div>
            <div id="cfpSection4" className='df-col'>
                <h1>Abstract & Research Paper <br /> Submission Guidelines</h1>
                <ul className='df-col'>
                    <li>Authors are requested to prepare their abstract and paper submission and send a soft copy through email at <strong>imctsf@acropolis.in</strong></li>
                    <li>The authors are requested to adhere to the following guidelines :
                        <ol className='df-col'>
                            <br />
                            <li>The papers should be in a Word Document format, Times New Roman, 12-point font size with 1.5 line spacing, 1 inch margins and APA style of referencing.</li>
                            <li>The word limit for the research paper is limited to 4000 words, and must include the Title, Objectives of the study, Methodology, Findings, Conclusion/ Implications/ Recommentations, Limitations (if any), Acknowledgement (if appropriate), References, Appendices (if appropriate).</li>
                            <li>Abstract should be limited to 300 words.</li>
                        </ol>
                    </li>
                    <li>The institute has a strict anti-plagiarism policy; therefore, the authors must ensure originality of the work.</li>
                    <li><strong>Selected candidates will be informed through mail. The decision of the Review Committee regarding the selection of papers will be final and binding.</strong></li>
                </ul>
            </div>
        </div>
    )
}
