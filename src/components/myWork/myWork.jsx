import React, { useEffect, useRef, useState } from 'react'
import { AddIcon, Clock } from '../../icons/Icons'
import ModalLayout from '../../layout/_lyt_modal'
import Modal from '../rightDrawer/RightDrawer'
import AddTaskModal from './AddTaskModal'
import EditTaskModal from './EditTaskModal'

const MyWorkListItem = (props) => {
    return <li className='item_list_item' onClick={props.onClick}>
        <div className='list_item_top'>
            <p>College</p>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                }}
            ><Clock /> Reminder</button>
        </div>
        <div className='list_item_bottom'>
            <input type={'checkbox'} onClick={(e) => {
                e.stopPropagation();
            }} />
            <div className='item_bottom_content'>
                <p className='bottom_content_title'>Complete AJP Practical 12</p>
                <p className='bottom_content_task'>
                    Lorem ipsum dolor sit amet, consectetur
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

    const task = [
        {
            title: "Complete AJP Practical 12",
            description: "Lorem ispsum dolar sit amet",
            category: "College",

        },
        {
            title: "Complete AJP Practical 12",
            description: "Lorem ispsum dolar sit amet",
            category: "College",

        },
        {
            title: "Complete AJP Practical 12",
            description: "Lorem ispsum dolar sit amet",
            category: "College",

        },
    ]

    const listItem = task.map((item, key) => {
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
    }, [])





    return (
        <section className='wrapper_myWork_main'>
            <div className='myWork_main_title'>
                <h1>My Work</h1>
                <button onClick={() => { setIsModalOpen(true) }}>
                    <AddIcon color="white" />
                    <p>Add New Task</p>
                </button>
            </div>

            {isModalOpen && <ModalLayout> <AddTaskModal setIsOpen={setIsModalOpen} /> </ModalLayout>}
            {
                editTaskModal.isOpen && <ModalLayout>
                    <EditTaskModal
                        task={editTaskModal}
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

                        {listItem}
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

                        {listItem}
                    </ul>
                </li>
            </ul>

        </section >

    )
}
