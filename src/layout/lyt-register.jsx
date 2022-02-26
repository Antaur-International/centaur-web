import React from 'react'
import NavBar from '../components/landing/navBar'
import RegForm from '../components/register/form'

export default function Register() {
    return (
        <section className='wrapper_register_page'>
            <NavBar />
            <RegForm />
        </section>
    )
}
