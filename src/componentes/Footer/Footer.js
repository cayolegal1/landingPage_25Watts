import React from 'react'
import FooterLogo from '../../img/footer-logo.svg'

const Footer = () => {
    return(
        <footer>
            <p> 2020 All © rights reserved </p>
            <figure className="footerlogo">
                <img src={FooterLogo} alt="el footer"/>
            </figure>
        </footer>
    )
}

export default Footer;