import React, { useState } from 'react'
import { AddIcon } from '../../icons/Icons'


const MyWorkListItem = (props) => {
    return <li className='item_list_item'>
        <div className='list_item_top'>
            <p>College</p>
            <button>Reminder</button>
        </div>
        <div className='list_item_bottom'>
            <input type={'checkbox'} />
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
    const [isOpen, setIsOpen] = useState(false);

    const listItem = [1, 2].map((item, key) => {
        return <MyWorkListItem key={key} />
    })

    return (
        <section className='wrapper_myWork_main'>
            <div className='myWork_main_title'>
                <h1>My Work</h1>
                <button>
                    <AddIcon color="white" />
                    <p>Add New Task</p>
                </button>
            </div>

            <ul className='myWork_main_todoCategory'>
                <li className='main_todoCategory_item'>
                    <div className='todoCategory_item_label'
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <img
                            src="/centaur-web/images/icons/arrow-right.svg"
                            alt="arrow"
                            style={isOpen ? { transform: 'rotate(90deg)' } : {}}
                        />
                        <p>Personal Task</p>
                    </div>

                    <ul className="todoCategory_item_list"
                        style={{ height: isOpen ? '40vh' : '0' }}
                    >

                        {listItem}

                    </ul>
                </li>
            </ul>

        </section >

    )
}
