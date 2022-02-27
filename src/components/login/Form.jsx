import React, { useRef } from 'react'
import { Link } from 'react-router-dom'


export default function Form() {

    const password = useRef(null);
    const hideShowImage = useRef(null);


    const changePasswordType = (e) => {


        if (password.current.type === 'password') {
            password.current.type = 'text';
            hideShowImage.current.src = '/centaur-web/images/icons/eye_open.svg';
        } else {
            password.current.type = 'password';
            hideShowImage.current.src = '/centaur-web/images/icons/eye_close.svg';
        }
    }

    return (
        <form className='login_page_form'>



            <div className='page_form_div'>
                <label>Email</label>
                <input type="email" placeholder='name@example.com' />
            </div>
            <div className='page_form_div'>
                <label>Password</label>
                <div className='form_div_password_input'>
                    <input
                        type="password" placeholder='********'
                        ref={password}
                    />
                    <button onClick={changePasswordType} type='button'>
                        <img src="/centaur-web/images/icons/eye_open.svg" alt=''

                            ref={hideShowImage}
                        />
                    </button>
                </div>
            </div>

            <div className='page_form_links'>
                <Link to="/register">Don't have an account?</Link>
                <Link to="/forgotPassword">Forgot Password?</Link>
            </div>

            <Link to="/dashboard" className='page_form_btn'>Login</Link>

            <div className='page_form_thirdParty'>
                <button
                    type='button'
                    className='form_thirdParty_section'>
                    <img src='/centaur-web/images/icons/google.svg' alt="" width={30} />
                    <p>Login With Google</p>
                </button>

            </div>
        </form>
    )
}
