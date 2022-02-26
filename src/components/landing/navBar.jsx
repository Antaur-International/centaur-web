import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <header className='landing_page_header'>
            <div className='page_header_logo'>
                <img src='/centaur-web/images/icons/icon.svg' alt="" />
            </div>
            <nav className='page_header_nav'>
                <ul className='header_nav_list'>
                    <li className='nav_list_item'>
                        Home
                    </li>
                    <li className='nav_list_item'>
                        Features
                    </li>
                    <li className='nav_list_item'>
                        Teams
                    </li>
                    <li className='nav_list_item'>
                        FAQ
                    </li>
                </ul>
            </nav>

            <Link to="/login" className='page_header_btn'>
                Get Started
            </Link>
        </header>
    )
}
