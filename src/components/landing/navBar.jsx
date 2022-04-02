import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <header className='landing_page_header'>
            <div className='page_header_logo'>
                <img src='/centaur-web/images/icons/icon.svg' alt="" />
                <p className='page_header_title'>Centaur</p>
            </div>
            <nav className='page_header_nav'>
                <ul className='header_nav_list'>
                    <li className='nav_list_item'>
                        <Link to='/' className='nav_list_item_link'>
                            Home
                        </Link>
                    </li>
                    <li className='nav_list_item'>
                        <Link to='/#features' className='nav_list_item_link'>
                            Features
                        </Link>
                    </li>
                    <li className='nav_list_item'>
                        <Link to='/#teams' className='nav_list_item_link'>
                            Teams
                        </Link>
                    </li>
                    <li className='nav_list_item'>
                        <Link to='/#faq' className='nav_list_item_link'>
                            FAQ
                        </Link>
                    </li>
                </ul>
            </nav>

            <Link to="/login" className='page_header_btn'>
                Get Started
            </Link>
        </header>
    )
}
