import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { Clock } from '../../icons/Icons';
import { API_HOST } from '../../API/constant';
export default function EditTaskModal({ setIsOpen, task, handleDeleteUpdate }) {

    const [titleInput, setTitleInput] = useState(task.task.task_title);
    const [descriptionInput, setDescriptionInput] = useState(task.task.task_description);
    const [dateInput, setDateInput] = useState(task.task.task_deadline);

    const taskCategory = useRef(null);
    const reminderDate = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updateBtn = e.target.getAttribute('data-id');

        const title = titleInput;
        const description = descriptionInput;
        const reminder = reminderDate.current.value;

        const data = {
            task_title: title,
            task_description: description,
            task_deadline: reminder
        };

        axios.put(`${API_HOST}/task/${updateBtn}`, data)
            .then(res => {
                console.log(res);
                setIsOpen(false);
                // refresh the page
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleDelete = (e) => {
        e.preventDefault();
        const deleteBtn = e.target.getAttribute('data-id');

        axios.delete(`${API_HOST}/task/${deleteBtn}`)
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
                                <input ref={reminderDate} type="date" value={dateInput} onChange={(e) => setDateInput(e.target.value)} />
                            </button>
                            {/* <button className='form_actionBtn_reminder btn'>
                                <Clock />
                                <p>Group</p>
                            </button> */}
                            <button className='form_actionBtn_addTask btn' data-id={task.task._id} onClick={handleSubmit}>
                                Update
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
