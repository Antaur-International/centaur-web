import React, { useState } from 'react'
import { DotsIcon, FolderIcon } from '../../../icons/Icons'
import ResourceList from '../Resource/ResourceList';

export const Subjects = ({ subject, selectedSubject }) => {

    const [showDropDown, setShowDropDown] = useState(false);
    const [resources, setResources] = useState([]);

    React.useEffect(() => {
        console.log(subject);
        setResources(selectedSubject.resources);
    }, [])

    return (
        <section className='cp_wrapper_subject'>
            <div className='subject_faculty_title'>
                <h1 className='faculty_title_title'>Subject: {subject.split(" ")[1]}</h1>
            </div>

            <div style={{ display: 'none' }} className='subject_faculty_card'>
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

            <ul className='wrapper_publicResource_list'>
                {
                    selectedSubject.resources.map((resource, index) => {
                        return (
                            <ResourceList item={resource} />
                        )
                    })
                }
            </ul>

        </section>
    )
}
