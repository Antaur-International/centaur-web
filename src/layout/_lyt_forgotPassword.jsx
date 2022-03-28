import React from 'react'
import Helmet from 'react-helmet';
import { useNavigate } from 'react-router';
import NavBar from '../components/landing/navBar';

export default function ForgotPasswordPage() {

    const navigate = useNavigate();

    const [enteredEmail, setEnteredEmail] = React.useState('');

    const handleInputChange = (e) => {
        setEnteredEmail(e.target.value);
    }

    const handleButtonClick = (e) => {
        e.preventDefault();
        console.log(enteredEmail);
        navigate('/login');
    }



    return (
        <section className='lyt_wrapper_forgotPassword'>
            <NavBar />
            <Helmet>
                <title>Forgot Password - Centaur</title>
                <meta name="description" content="Forgot Password page" />
            </Helmet>

            <form className='wrapper_forgotPassword_form'>
                <h2>Forgot Password?</h2>
                <p>
                    Don't worry! It happens. Please enter your email address and we'll send you a link to reset your password.
                </p>
                <div className='forgotPassword_form_inputGrp'>
                    <label>Email</label>
                    <input type="email"
                        placeholder='example@gmail.com'
                        value={enteredEmail}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='forgotPassword_form_btn'>
                    <button
                        className='forgotPassword_form_btn'
                        onClick={handleButtonClick}
                    >
                        Send
                    </button>
                </div>

            </form>

        </section>
    )
}
