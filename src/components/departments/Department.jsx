import React from 'react'
import Header from '../Header'
import { ChevronLeft, UserGroupIcon, ChatIcon, FolderIcon } from '../../icons/Icons'
import Resource from './Resource/Resource'
import Members from './Members/Members';
import Chats from './Chats/Chats';
import Room from './Chats/Room';
import { Subjects } from './Subjects/Subjects';
import { useAuth } from '../../data/Context/UserContext';



export default function Department() {

    const [selected, setSelected] = React.useState("resource");
    const [selectedSubject, setSelectedSubject] = React.useState({});
    const [isSubjectOpen, setIsSubjectOpen] = React.useState(false);

    const { userInstance, isAuthenticated } = useAuth();

    const changeTab = (tab) => {
        setSelected(tab);
    }

    if (!isAuthenticated) {
        return <div>Loading...</div>
    }

    return (
        <main className='lyt_wrapper_department'>
            <Header user={userInstance} />
            <section className='wrapper_department_main'>
                <div className='department_main_leftPanel'>
                    <ul className='main_leftPanel_navList'>
                        <li className='leftPanel_navList_item'
                            onClick={() => setSelected("members")}>
                            <div className={`navList_item_label ${selected === 'members' && 'selected'}`}>
                                < UserGroupIcon />
                                <p>Members</p>
                            </div>
                        </li>
                        <li className='leftPanel_navList_item'
                            onClick={() => setSelected("resource")}>
                            <div className={`navList_item_label ${selected === 'resource' && 'selected'}`} >
                                <FolderIcon />
                                <p>Resources</p>
                            </div>
                        </li>
                        <li className='leftPanel_navList_item'
                            onClick={() => setSelected("messages")}
                        >
                            <div className={`navList_item_label ${selected === 'messages' || selected === 'room' ? 'selected' : ''}`}>
                                <ChatIcon color="black" />
                                <p>Messages</p>
                            </div>
                        </li>
                        <li className='leftPanel_navList_item' >
                            <div className='navList_item_label' style={{ opacity: "0.5" }} onClick={(e) => {
                                setIsSubjectOpen(!isSubjectOpen);
                            }}>
                                <ChevronLeft style={{
                                    transform: isSubjectOpen ? "rotate(90deg)" : "rotate(0deg)",
                                }} size="15" />

                                <p style={{
                                    fontSize: "0.9vw",
                                }} >{userInstance.batch.name}</p>
                            </div>
                            <ul className='navList_item_subMenu' style={{
                                display: isSubjectOpen ? "flex" : "none"
                            }}>
                                {
                                    userInstance.batch.subjects.map((subj, index) => {
                                        return (
                                            <li className='item_subMenu_item' onClick={() => {
                                                setSelected(`subjects ${subj.name}`)
                                                setSelectedSubject(subj)
                                            }}>
                                                {subj.name}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </li>
                    </ul>

                </div>
                <div className='department_main_rightContent'>
                    {selected === "members" && <Members user={userInstance} />}
                    {selected === "resource" && <Resource user={userInstance} />}
                    {selected === "messages" && <Chats changeTab={changeTab} user={userInstance} />}
                    {selected === "room" && <Room changeTab={changeTab} user={userInstance} />}
                    {selected.includes("subject") && <Subjects subject={selected} selectedSubject={selectedSubject} />}
                </div>
            </section>
        </main>
    )
}
