import React from 'react'
import './css/rp.css'
import qr from '../images/scanqr.jpg'

export default function RegistrationPage() {
    document.title = 'IMCTSF - Register'
    return (
        <div id='rp' className='df'>
            <div id="rpCon" className='df'>
                <div id="rpLeft">
                    <ul className='df-col'>
                        <li>E-Certificates will be provided to all registered paper presenters.</li>
                        <li>No certificate will be issued for presentation in absentia.</li>
                        <li>Selected papers will be published in the Conference proceedings.</li>
                    </ul>
                </div>
                <hr></hr>
                <div id="rpRight" className='df-col'>
                    <a href='https://forms.gle/iTrcxtZXCfYRWvEu9' id="rpForm">Click here to register</a>
                    <span>OR</span>
                    <img src={qr} alt='' id="rpQR"></img>
                </div>
            </div>
        </div>
    )
}
