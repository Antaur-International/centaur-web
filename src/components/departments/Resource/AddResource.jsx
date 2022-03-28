import React from 'react'

export default function AddResource({ setIsOpen }) {
    return (
        <div className='modal_wrapper_center'>
            <div className='wrapper_center_modal'>
                <div className='center_modal_header'>
                    <h2>Add a new file</h2>
                </div>
                <button
                    className='center_modal_closeBtn btn'
                    onClick={() => setIsOpen(false)}
                >
                    <img src="/centaur-web/images/icons/cross-red.svg" alt="" />
                </button>
                <form className='center_modal_form'>
                    <div className='modal_form_inputGrp'>
                        <label>Upload a file</label>
                        <input type="file" name="file" id="file" />
                    </div>
                    <button className='modal_form_uploadBtn'>Upload</button>
                </form>
            </div>
        </div>
    )
}
