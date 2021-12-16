import './header.css'
import logo from './logo.svg'
import iconHamburger from './icon-hamburger.svg'
import { useState } from 'react'

export const Header = ()=> {

    let [ rsMenuVisible, setRsMenuVisible  ] = useState(false)

    //togle to show or hidde menu options
    const handleTogleShowMenu = () => {
        const resMenuButton = document.getElementById('responsive-menu-options')
        console.log(rsMenuVisible);
        if (rsMenuVisible === false) {
            resMenuButton.style.display = 'block'
            setRsMenuVisible(true)
            console.log(rsMenuVisible);
        } else {
            resMenuButton.style.display = 'none'
            setRsMenuVisible(false)
            console.log(rsMenuVisible);
        }
    }


    return (
        <div className='header-container'>
            <div id='main-logo'>
                <img src={logo}></img>
            </div>

            <nav className='menu-container'>
                <ul className='list-routes'>
                    <li>Feautures</li>
                    <li>Pricing</li>
                    <li>Resources</li>
                </ul>
                <div className='log-buttons'>
                    <button className='login-button'>Login </button>
                    <button className='signUp-button'>Sign Up </button>
                </div>
            </nav>

            <div className='responsive-menu-container'>
                <div id='button-hamburger' onClick={handleTogleShowMenu}>
                    <img src={iconHamburger} />
                </div>
                <nav id='responsive-menu-options'>
                    <ul>
                        <li>Feautures</li>
                        <li>Pricing</li>
                        <li>Resources</li>
                    </ul>
                    <div className='log-buttons'>
                        <button className='login-button'>Login </button>
                        <button className='signUp-button'>Sign Up </button>
                    </div>
                </nav>
            </div>
        </div>
    )
}