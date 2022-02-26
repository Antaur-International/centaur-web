import React, { useRef } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Popup from '../../layout/lyt-popup';

export default function RegForm() {

    const serialNumber = "zqUCVG-GbBu6k-sWX6H6-A5mbDb-69HSjM-FoFJxx";

    const [userType, setUserType] = React.useState('');
    const [isValidKey, setIsValidKey] = React.useState(false);

    const [isOpen, setIsOpen] = React.useState(false);

    const license = useRef(null);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const confirmPassword = useRef(null);
    const enrollmentNumber = useRef(null);
    const phoneNumber = useRef(null);


    const validateKey = async () => {
        const userEnteredKey = await license.current.value;
        if (userEnteredKey === serialNumber) {
            setIsValidKey(true);
            license.current.className += " validInput";
        }

    }



    // Validation part is under development
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.current.value === '' || email.current.value === '' || password.current.value === '' || confirmPassword.current.value === '' || enrollmentNumber.current.value === '' || phoneNumber.current.value === '') {
            setIsOpen(true);
        } else {
            Navigate('/login');
        }

    }

    return (
        <form className='register_page_form'>


            {/* Still working on this popup box */}
            {isOpen && <Popup onClose={() => setIsOpen(false)}>
                <p className='popupAlert'>Please fill all the details</p>
            </Popup>}


            <div className='page_form_thirdParty'>
                <button className='form_thirdParty_section'>
                    <img src='/centaur-web/images/icons/google.svg' alt="" width={30} />
                    <p>Login With Google</p>
                </button>

            </div>


            <div className='page_form_div'>
                <label>User</label>
                <select onChange={(e) => setUserType(e.target.value)}>
                    <option value="none" disabled>Select User</option>
                    <option value="student">Student</option>
                    <option value="staff">Staff</option>
                </select>
            </div>

            {
                userType === 'staff' &&
                <div className='page_form_div'>
                    <label>License</label>
                    <input
                        type="text" placeholder='XXXXXX-XXXXXX-XXXXXX-XXXXXX-XXXXXX-XXXXXX'
                        ref={license}
                        onChange={validateKey}
                    />
                </div>
            }

            <div className='page_form_div'>
                <label>Name</label>
                <input
                    type="text"
                    placeholder='Your name'
                    ref={name}
                    disabled={!isValidKey && userType === 'staff'}
                />
            </div>

            <div className='page_form_div'>
                <label>Email</label>
                <input
                    type="email"
                    placeholder='name@example.com'
                    ref={email}
                    disabled={!isValidKey && userType === 'staff'}
                />
            </div>
            <div className='page_form_div'>
                <label>Password</label>
                <input
                    type="password"
                    placeholder='********'
                    ref={password}
                    disabled={!isValidKey && userType === 'staff'}
                />
            </div>

            <div className='page_form_div'>
                <label>Confirm Password</label>
                <input
                    type="password"
                    placeholder='********'
                    ref={confirmPassword}
                    disabled={!isValidKey && userType === 'staff'}
                />
            </div>
            <div className='page_form_div'>
                <label>Enrollment Number</label>
                <input
                    type="number"
                    placeholder='EN-XXXXXXXX'
                    ref={enrollmentNumber}
                    disabled={!isValidKey && userType === 'staff'}
                />
            </div>

            <div className='page_form_div'>
                <label>Phone number</label>
                <input
                    type="number"
                    placeholder='+91 XXXXXXXX'
                    ref={phoneNumber}
                    disabled={!isValidKey && userType === 'staff'}
                />
            </div>

            <div className='page_form_links'>
                <Link to="/login">Already have an account?</Link>
            </div>

            <button to="/login" className='page_form_btn'
                onClick={handleSubmit}
            >Register</button>
        </form>
    )
}
