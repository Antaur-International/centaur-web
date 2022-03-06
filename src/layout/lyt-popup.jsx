import React, { useEffect } from 'react'

export default function Popup({ textColor, text, setIsOpen, children, called }) {

    const handleClick = () => {

        if (called === "header") {
            sessionStorage.removeItem('user');
            window.location.href = '/login';
        }

        setIsOpen(false);
    }

    return (
        <section className='wrapper_popup_bg'>
            <div className='wrapper_popup_center'>
                <div className='popup_center_content'>
                    <div className='center_content_header'>
                        <h1>{text}</h1>
                    </div>
                    <div className='center_content_actions'>
                        <button onClick={handleClick} className='btn'>Ok</button>
                    </div>
                </div>
            </div>

        </section>
    )
}
