import React, { useRef } from 'react'
import { Clock } from '../../icons/Icons';
import axios from 'axios';
import { API_HOST } from '../../API/constant';
import { useAuth } from '../../data/Context/UserContext';

export default function AddTaskModal({ setIsOpen, handleSubmitUpdate }) {

    const { userInstance } = useAuth();

    const taskTitle = useRef(null);
    const taskDescription = useRef(null);
    const taskCategory = useRef(null);
    const taskRemDate = useRef(null);

    const [newTask, setTask] = React.useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        let task = {
            task_title: taskTitle.current.value,
            task_description: taskDescription.current.value,
            task_cat: taskCategory.current.value,
            createdBy: JSON.parse(sessionStorage.getItem('user')).userid,
            task_deadline: taskRemDate.current.value,
            task_status: 'pending',
        }

        if (userInstance.type === "student") {
            task = {
                ...task,
                task_cat: 'Personal'
            }
        }

        // console.log(task);

        axios.post(`${API_HOST}/task`, task)
            .then(res => {
                sessionStorage.setItem('task', JSON.stringify(res.data.task));
                setTask(res.data.task);
                setIsOpen(false);
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
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
                        {userInstance.type === 'staff' && <select className='cat_select' ref={taskCategory}>
                            <option value="">Select Category</option>
                            <option value="Personal">Personal</option>
                            <option value="College">College</option>
                        </select>}
                        <input type="text" ref={taskTitle} placeholder='Task Title' />
                        <textarea
                            ref={taskDescription}
                            className='content_form_noteInput' placeholder='Note...' />

                        <div className='content_form_actionBtn'>
                            <button type='button' className='form_actionBtn_reminder btn'>
                                <Clock />
                                <p>Reminder</p>
                                <input ref={taskRemDate} type="date" />
                            </button>
                            {/* <button type='button' className='form_actionBtn_reminder btn'>
                                <Clock />
                                <p>Group</p>
                            </button> */}
                            <button type='button' className='form_actionBtn_addTask btn' onClick={(e) => { handleSubmit(e); handleSubmitUpdate(); }}>
                                <p>Add Task</p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
