import React from 'react'
import NavBar from '../components/landing/navBar'
import Form from '../components/login/Form'

export default function Login() {
    return (
        <section className='wrapper_login_page'>
            <NavBar />
            <Form />
        </section>
    )
}
