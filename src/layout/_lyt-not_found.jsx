import React from 'react'
import NavBar from "../components/landing/navBar"

export default function NotFound() {
    return (
        <section className='wrapper_not_found'>
            <NavBar />
            <div className='not_found_img'>
                <img src='/centaur-web/images/not-found.svg' alt='not found' />
            </div>
            <h3>PAGE NOT FOUND</h3>
        </section>
    )
}
