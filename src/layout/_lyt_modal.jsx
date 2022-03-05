import React, { useRef } from 'react'


// just need to setup children
export default function ModalLayout({ setIsOpen, title, children }) {

    const taskTitle = useRef(null);
    const taskDescription = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = taskTitle.current.value;
        const description = taskDescription.current.value;
        console.log({ title, description });
    }

    return (
        <div className='bg_modal_wrapper'>
            <div className='modal_wrapper_center'>
                <div className='wrapper_center_modal'>
                    <div className='center_modal_header'>
                        <h2>Create Task</h2>
                    </div>
                    <button
                        className='center_modal_closeBtn btn'
                        onClick={() => setIsOpen(false)}
                    >
                        <img src="/centaur-web/images/icons/cross-red.svg" alt="" />
                    </button>
                    <div className='center_modal_content'>
                        <form className='modal_content_form'>
                            <input type="text" ref={taskTitle} placeholder='Task Title' />
                            <textarea
                                ref={taskDescription}
                                className='content_form_noteInput' placeholder='Note...' />

                            <div className='content_form_actionBtn'>
                                <button className='btn' onClick={handleSubmit}>
                                    <p>Add Task</p>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
