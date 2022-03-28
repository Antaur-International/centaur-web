import React from 'react'
import Helmet from 'react-helmet'
import NavBar from '../components/landing/navBar'
import RegForm from '../components/register/form'

export default function Register() {
    return (
        <section className='wrapper_register_page'>
            <Helmet>
                <title>Register - Centaur</title>
                <meta name="description" content="Register page" />
            </Helmet>
            <NavBar />
            <RegForm />
        </section>
    )
}
