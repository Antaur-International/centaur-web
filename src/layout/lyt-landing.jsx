import React from 'react'
import NavBar from '../components/landing/navBar'

export default function Landing() {
    return (
        <section className='wrapper_landing_page'>
            <NavBar />
            <section className='landing_page_body'>
                <div className='page_body_leftSec'>
                    <h1>College <span style={{ color: '#4FFF40' }}>Made Easy</span></h1>
                    <p>One stop for every resource</p>
                </div>
                <div className='page_body_rightSec'>
                    <img src='/centaur-web/images/mockup01.png' alt='' />
                </div>
            </section>
        </section>
    )
}
