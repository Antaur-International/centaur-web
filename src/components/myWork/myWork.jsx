import React, { useEffect, useRef, useState } from 'react'
import { AddIcon, Clock } from '../../icons/Icons'
import ModalLayout from '../../layout/_lyt_modal'
// import Modal from '../rightDrawer/RightDrawer'
import AddTaskModal from './AddTaskModal'
import EditTaskModal from './EditTaskModal'
import axios from 'axios';
import { API_HOST } from '../../API/constant'

const MyWorkListItem = (props) => {
    return <li className='item_list_item' onClick={props.onClick} data-id={props.task._id}>
        <div className='list_item_top'>
            <p>{props.task.task_cat}</p>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                }}
            ><Clock /> Reminder</button>
        </div>
        <div className='list_item_bottom'>
            <input type={'checkbox'} checked={props.task.task_status === "pending" ? false : true} onClick={(e) => {
                e.stopPropagation();
            }} />
            <div className='item_bottom_content'>
                <p className='bottom_content_title'>{props.task.task_title}</p>
                <p className='bottom_content_task'>
                    {props.task.task_description}
                </p>
            </div>

        </div>
    </li>
}

export default function MyWorkMain() {

    const personalTask = useRef(null);
    const [personalTaskHeight, setPersonalTaskHeight] = useState(0);
    const [personalTaskIsOpen, setPersonalTaskIsOpen] = useState(true);

    const collegeTask = useRef(null);
    const [collegeTaskHeight, setCollegeTaskHeight] = useState(0);
    const [collegeTaskIsOpen, setCollegeTaskIsOpen] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editTaskModal, setEditTaskModalOpen] = useState({
        isOpen: false,
        task: null
    });


    // saving tasks
    const [personalTaskList, setPersonalTaskList] = useState([]);
    const [collegeTaskList, setCollegeTaskList] = useState([]);

    const PersonalList = personalTaskList.map((item, key) => {
        return <MyWorkListItem
            key={key}
            task={item}
            onClick={() => setEditTaskModalOpen((prevState) => ({
                ...prevState,
                isOpen: true,
                task: item
            }))}
        />
    })

    const CollegeList = collegeTaskList.map((item, key) => {
        return <MyWorkListItem
            key={key}
            task={item}
            onClick={() => setEditTaskModalOpen((prevState) => ({
                ...prevState,
                isOpen: true,
                task: item
            }))}
        />
    })

    const toggleAccordion = () => {
        setPersonalTaskIsOpen(!personalTaskIsOpen)
        setPersonalTaskHeight(personalTaskIsOpen ? 0 : `${personalTask.current.scrollHeight}px`);
    }

    const toggleCollegeAccordion = () => {
        setCollegeTaskIsOpen(!collegeTaskIsOpen)
        setCollegeTaskHeight(collegeTaskIsOpen ? 0 : `${collegeTask.current.scrollHeight}px`);
    }

    useEffect(() => {
        setPersonalTaskHeight(personalTaskIsOpen ? `${personalTask.current.scrollHeight}px` : 0);

        axios.get(`${API_HOST}/task/personal/${JSON.parse(sessionStorage.getItem('user')).userid}`)
            .then(res => {
                setPersonalTaskList(res.data.tasks);
            })
            .catch(err => {
                console.log(err);
            })

        axios.get(`${API_HOST}/task/college`)
            .then(res => {
                setCollegeTaskList(res.data.tasks);
                console.log(res.data.tasks);
            })
            .catch(err => {
                console.log(err);
            })

    }, [personalTaskList.length, collegeTaskList.length])

    const createTask = () => {
        const newAddedTask = JSON.parse(sessionStorage.getItem('task'));
        if (newAddedTask.task_cat === 'personal') {
            setPersonalTaskList([...personalTaskList, newAddedTask]);
        }
        else {
            setCollegeTaskList([...collegeTaskList, newAddedTask]);
        }
    }

    const deleteTask = () => {
        const deletedTask = JSON.parse(sessionStorage.getItem('deletedTask'));
        if (deletedTask.task_cat === 'Personal') {
            setPersonalTaskList(personalTaskList.filter(item => item._id !== deletedTask._id));
        }
        else {
            setCollegeTaskList(collegeTaskList.filter(item => item._id !== deletedTask._id));
        }
    }

    return (
        <section className='wrapper_myWork_main'>
            <div className='myWork_main_title'>
                <h1>My Work</h1>
                <button onClick={() => { setIsModalOpen(true) }}>
                    <AddIcon color="white" />
                    <p>Add New Task</p>
                </button>
            </div>

            {isModalOpen && <ModalLayout> <AddTaskModal handleSubmitUpdate={createTask} setIsOpen={setIsModalOpen} /> </ModalLayout>}
            {
                editTaskModal.isOpen && <ModalLayout>
                    <EditTaskModal
                        task={editTaskModal}
                        handleDeleteUpdate={deleteTask}
                        setIsOpen={() => setEditTaskModalOpen((prevState) => ({
                            ...prevState,
                            isOpen: false,
                        }))} />
                </ModalLayout>
            }

            <ul className='myWork_main_todoCategory'>
                <li className='main_todoCategory_item' >
                    <button className='todoCategory_item_label'
                        onClick={toggleAccordion}
                    >
                        <img
                            src="/centaur-web/images/icons/arrow-right.svg"
                            alt="arrow"
                            style={personalTaskIsOpen ? { transform: 'rotate(90deg)' } : {}}
                        />
                        <p>Personal Task</p>
                    </button>

                    <ul className="todoCategory_item_list"
                        ref={personalTask}
                        style={{ maxHeight: `${personalTaskHeight}` }}
                    >

                        {PersonalList}
                    </ul>
                </li>
                <li className='main_todoCategory_item' >
                    <button className='todoCategory_item_label'
                        onClick={toggleCollegeAccordion}
                    >
                        <img
                            src="/centaur-web/images/icons/arrow-right.svg"
                            alt="arrow"
                            style={collegeTaskIsOpen ? { transform: 'rotate(90deg)' } : {}}
                        />
                        <p>College Task</p>
                    </button>

                    <ul className="todoCategory_item_list"
                        ref={collegeTask}
                        style={{ maxHeight: `${collegeTaskHeight}` }}
                    >

                        {CollegeList}
                    </ul>
                </li>
            </ul>

        </section>

    )
}
