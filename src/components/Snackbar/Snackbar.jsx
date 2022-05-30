import React from 'react';
import { AddIcon } from '../../icons/Icons'

const Snackbar = ({ message, setState, openState }) => {

    const handleClose = () => {
        setState(false);
    }

    return (
        <div style={{ visibility: openState ? 'visible' : 'hidden' }} className='snackbar_global_wrapper'>
            <p className='msg-ctn'>
                {message}
            </p>
            {/* close icon white */}
            <button className='closeButton' onClick={handleClose}>
                <AddIcon color="#fff" />
            </button>
        </div>
    )
}

export default Snackbar;