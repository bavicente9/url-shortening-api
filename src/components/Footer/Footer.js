import './Footer.css'
import logo from './logoFooter.svg'

export const Footer = () => {
    return (
        <footer className='footer-Container'>
            <div className='footer'>
                <div id='footer-Logo'>
                    <img alt='' src={logo}></img>
                </div>

                <div className='footer-Info'>
                    <ul>
                        <h3>Feautures</h3>
                        <li><a href=''>Link Shortening</a></li>
                        <li><a href=''>Branded Links</a></li>
                        <li><a href=''>Analytics</a></li>
                    </ul>
                    <ul>
                        <h3>Resources</h3>
                        <li><a href=''>Blog</a></li>
                        <li><a href=''>Developers</a></li>
                        <li><a href=''>Support</a></li>
                    </ul>
                    <ul>
                        <h3>About</h3>
                        <li><a href=''>Our Team</a></li>
                        <li><a href=''>Careers</a></li>
                        <li><a href=''>Contact</a></li>
                    </ul>
                </div>
                <div className='footer-social-media'>
                    <button className='footer-social-media__button button-facebook' alt='button facebook'></button>
                    <button className='footer-social-media__button button-twitter' alt='button twitter'></button>
                    <button className='footer-social-media__button button-pinterest' alt='button pinterest'></button>
                    <button className='footer-social-media__button button-instagram' alt='button instagram'></button>
                </div>
            </div>
        </footer>

    )
}