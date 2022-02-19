import React from 'react'
import "./modal.css"
import { AddIcon } from '../../icons/Icons'

export default function Modal({ show, handleClose, title, children }) {

    const showClassName = show ? 'modalContainer displayBlock' : 'modalContainer displayNone';

    return (
        <section className={showClassName}>
            <div className='modalMain'>
                <button className='closeButton' onClick={handleClose}>
                    <AddIcon />
                </button>
                <section className='mainContent'>
                    {children}
                </section>
            </div>
        </section>
    )
}
