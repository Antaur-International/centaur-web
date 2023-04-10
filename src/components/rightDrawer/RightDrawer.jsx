import React from 'react'
import "./rightDrawer.css"
import { AddIcon } from '../../icons/Icons'

export default function Modal({ show, handleClose, children }) {

    return (
        <section className={`modalContainer ${show && 'displayLeft'} `} onClick={(e) => {
            handleClose();
        }}>
            <div className={`modalMain ${show && 'displayRight'}`}
                onClick={(e) => {

                    e.stopPropagation();
                }}
            >
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
