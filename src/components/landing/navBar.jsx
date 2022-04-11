import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Link as HashLink } from 'react-scroll'

export default function NavBar() {

    const Navigate = useNavigate();

    return (
        <header className='landing_page_header'>
            <div className='page_header_logo' onClick={() => {
                Navigate('/');
            }}>
                <img src='/centaur-web/images/icons/icon.svg' alt="" />
                <p className='page_header_title'>Centaur</p>
            </div>
            <nav className='page_header_nav'>
                <ul className='header_nav_list'>
                    <li className='nav_list_item'>
                        <HashLink to='home'
                            spy={true}
                            className='nav_list_item_link'>
                            Home
                        </HashLink>
                    </li>
                    <li className='nav_list_item'>
                        <HashLink
                            to='features'
                            smooth={true}
                            spy={true}
                            className='nav_list_item_link'>
                            Features
                        </HashLink>
                    </li>
                    <li className='nav_list_item'>
                        <HashLink to='teams'
                            smooth={true}
                            spy={true}
                            className='nav_list_item_link'>
                            Teams
                        </HashLink>
                    </li>
                    <li className='nav_list_item'>
                        <HashLink to='faq'
                            smooth={true}
                            spy={true}
                            className='nav_list_item_link'>
                            FAQ
                        </HashLink>
                    </li>
                </ul>
            </nav>

            <Link to="/login" className='page_header_btn'>
                Get Started
            </Link>
        </header>
    )
}
