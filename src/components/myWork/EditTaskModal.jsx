import React, { useRef, useState } from 'react'

export default function EditTaskModal({ setIsOpen, task }) {



    const [titleInput, setTitleInput] = useState(task.task.title);
    const [descriptionInput, setDescriptionInput] = useState(task.task.description);

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = titleInput;
        const description = descriptionInput;
        console.log({ title, description });
    }

    return (
        <div className='modal_wrapper_center'>
            <div className='wrapper_center_modal'>
                <div className='center_modal_header'>
                    <h2>Edit Task</h2>
                </div>
                <button
                    className='center_modal_closeBtn btn'
                    onClick={setIsOpen}
                >
                    <img src="/centaur-web/images/icons/cross-red.svg" alt="" />
                </button>
                <div className='center_modal_content'>
                    <form className='modal_content_form'>
                        <input type="text" placeholder='Task Title' value={titleInput}
                            onChange={(e) => setTitleInput(e.target.value)} />
                        <textarea
                            className='content_form_noteInput' placeholder='Note...'
                            value={descriptionInput}
                            onChange={(e) => setDescriptionInput(e.target.value)} />

                        <div className='content_form_actionBtn'>
                            <button className='btn' onClick={handleSubmit}>
                                <p>Add Task</p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
