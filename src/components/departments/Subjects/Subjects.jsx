import React, { useState } from 'react'
import { DotsIcon, FolderIcon } from '../../../icons/Icons'

export const Subjects = ({ subject }) => {

    const [showDropDown, setShowDropDown] = useState(false);


    return (
        <section className='cp_wrapper_subject'>
            <div className='subject_faculty_title'>
                <h1 className='faculty_title_title'>{subject}</h1>
            </div>

            <div className='subject_faculty_card'>
                <div className='faculty_card_head'>
                    <img src='/centaur-web/images/icons/icon.png' alt='' />
                    <div className='card_head_info'>
                        <p className='head_info_facultyName'>Faculty name</p>
                        <p className='head_info_department'>Department</p>
                    </div>
                </div>

                <div className='faculty_card_info'>
                    <p className='card_info_text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </div>

            <ul className='subject_faculty_resource'>
                <li className='faculty_resource_item'>
                    <FolderIcon />
                    <p className='resource_item_name'>Resource name</p>
                    <p className='resource_item_date'>Resource date</p>
                    <div className='resource_item_action'>
                        <button className='item_action_button' onClick={() => setShowDropDown(!showDropDown)}>
                            <DotsIcon />
                        </button>
                        {
                            showDropDown &&
                            <a href='/' download={"Resource file name"} className='item_action_cta'>
                                <p>Download</p>
                            </a>
                        }
                    </div>
                </li>

            </ul>

        </section>
    )
}
