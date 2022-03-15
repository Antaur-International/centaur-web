import React from 'react'
import ResourceList from './ResourceList'

export default function Resource() {

    const DummyData = [
        {
            id: 1,
            title: "Syllabus.pdf",
            date: "02.02.2020",
            type: "PDF",
        },
        {
            id: 2,
            title: "Exam time table.pdf",
            date: "12.03.2020",
            type: "PDF",
        },
    ]

    return (
        <section className='cp_wrapper_publicResource'>
            <h2>Resource</h2>
            <ul className='wrapper_publicResource_list'>
                {
                    DummyData.map((item, index) => {
                        return (
                            <ResourceList item={item} />
                        )
                    })
                }
            </ul>
        </section>
    )
}
