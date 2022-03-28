import React from 'react'
import Helmet from 'react-helmet'
import NavBar from '../components/landing/navBar'
import Form from '../components/login/Form'

export default function Login() {
    return (
        <section className='wrapper_login_page'>
            <Helmet>
                <title>Login - Centaur</title>
                <meta name="description" content="Login page" />
            </Helmet>
            <NavBar />
            <Form />
        </section>
    )
}
