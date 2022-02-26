import React, { useEffect } from 'react'

export default function Popup({ children, onClose }) {

    const [isOpen, setIsOpen] = React.useState(true);

    useEffect(() => {
        const time = setTimeout(() => {
            setIsOpen(false);
        }, 3000);

        return () => {
            onClose();
            clearTimeout(time)
        };
    }, []);


    if (!isOpen) return null;

    return (
        <section className={`wrapper_popup_modal animate`}>
            <div className='popup_modal_container' >
                {children}
            </div>
        </section>
    )
}
