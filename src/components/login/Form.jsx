import React from 'react'
import { Link } from 'react-router-dom'


export default function Form() {
    return (
        <form className='login_page_form'>

            <div className='page_form_thirdParty'>
                <button className='form_thirdParty_section'>
                    <img src='/centaur-web/images/icons/google.svg' alt="" width={30} />
                    <p>Login With Google</p>
                </button>

            </div>

            <div className='page_form_div'>
                <label>Email</label>
                <input type="email" placeholder='name@example.com' />
            </div>
            <div className='page_form_div'>
                <label>Password</label>
                <input type="password" placeholder='********' />
            </div>

            <div className='page_form_links'>
                <Link to="/register">Don't have an account?</Link>
                <Link to="/forgotPassword">Forgot Password?</Link>
            </div>

            <Link to="/dashboard" className='page_form_btn'>Login</Link>
        </form>
    )
}
