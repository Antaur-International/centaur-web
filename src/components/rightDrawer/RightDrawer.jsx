import React from 'react'
import "./rightDrawer.css"
import { AddIcon } from '../../icons/Icons'

export default function Modal({ show, handleClose, children }) {

    const showClassName = show ? ' display' : 'modalContainer';

    return (
        <section className={`modalContainer ${show && 'displayLeft'} `} onClick={(e) => {
            e.stopPropagation();
            handleClose();
        }}>
            <div className={`modalMain ${show && 'displayRight'}`}>
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
