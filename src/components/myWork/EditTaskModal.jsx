import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { Clock } from '../../icons/Icons';

export default function EditTaskModal({ setIsOpen, task, handleDeleteUpdate }) {

    const [titleInput, setTitleInput] = useState(task.task.task_title);
    const [descriptionInput, setDescriptionInput] = useState(task.task.task_description);

    const taskCategory = useRef(null);
    const reminderDate = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = titleInput;
        const description = descriptionInput;
        const reminder = reminderDate.current.value;
        console.log({ title, description, reminder });
    }

    const handleDelete = (e) => {
        e.preventDefault();
        const deleteBtn = e.target.getAttribute('data-id');

        axios.delete(`https://centaur-be.herokuapp.com/task/${deleteBtn}`)
            .then(res => {
                console.log(res.data);
                sessionStorage.setItem('deletedTask', JSON.stringify(res.data.task));
                setIsOpen(false);
                handleDeleteUpdate();
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className='modal_wrapper_center editModal'>
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
                        <select disabled className='cat_select' ref={taskCategory}>
                            <option value="">Select Category</option>
                            <option value="Personal" selected={task.task.task_cat === "Personal" ? true : false} >Personal</option>
                            <option value="College" selected={task.task.task_cat === "College" ? true : false}>College</option>
                        </select>
                        <input type="text" placeholder='Task Title' value={titleInput}
                            onChange={(e) => setTitleInput(e.target.value)} />
                        <textarea
                            className='content_form_noteInput' placeholder='Note...'
                            value={descriptionInput}
                            onChange={(e) => setDescriptionInput(e.target.value)} />

                        <div className='content_form_actionBtn'>
                            <button type='button' className='form_actionBtn_reminder btn'>
                                <Clock />
                                <p>Reminder</p>
                                <input ref={reminderDate} type="date" value={task.task.task_deadline} />
                            </button>
                            {/* <button className='form_actionBtn_reminder btn'>
                                <Clock />
                                <p>Group</p>
                            </button> */}
                            <button className='form_actionBtn_addTask btn' data-id={task.task._id} onClick={handleSubmit}>
                                <p>Update</p>
                            </button>
                            <button className='form_actionBtn_deleteTask btn' data-id={task.task._id} onClick={(e) => { handleDelete(e); }}>
                                Delete Task
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
