import React from 'react'
import Header from '../components/Header'
export default function SubjectLayout(props) {
    return (
        <main className='lyt_subject_wrapper'>
            <Header />
            <section className="subject_wrapper_content">
                <div className='wrapper_content_card'>
                    <h2>AJP</h2>
                    <p>Advance Java Programing</p>
                    <p>Sagar Mhatre</p>
                </div>
                <h2 className='wrapper_content_sectionTitle'>Resources</h2>
                <ul className='wrapper_content_resourceList'>
                    <li>
                        <p className='resourceList_item_title'>Semester 05 Question Bank</p>
                        <p>2 Hour Ago</p>
                    </li>
                </ul>
            </section>
        </main>
    )
}
