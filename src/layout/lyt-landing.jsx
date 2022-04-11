import React from 'react'
import Helmet from 'react-helmet'
import Features from '../components/landing/Features'
import Home from '../components/landing/Home'
import NavBar from '../components/landing/navBar'
import Teams from '../components/landing/Teams'

export default function Landing() {

    return (
        <section className='wrapper_landing_page'>
            <Helmet>
                <title>Home - Centaur</title>
                <meta name="description" content="Centaur - resource gathering made easy" />
            </Helmet>
            <NavBar />
            <section className='landing_page_body'>
                <Home />
                <Features />
                <Teams />
            </section>
        </section>
    )
}
