import React from 'react'
import "./department.css"
import Header from '../Header'
import { CheckMark, AddIcon } from '../../icons/Icons'

const YearButton = (props) => {
    return <button className={props.isSelected ? 'selectedYear' : " "}>
        <CheckMark />
        <p>{props.year}</p>
    </button>
}

const DepartmentCardItem = (props) => {
    return <div className='departmentCardItem' onClick={() => props.setTab("department-subject")}>
        <p className='cardTitle'>{props.title}</p>
        <p className='cardTitleFull'>{props.subTitle}</p>
        <p className='cardOwner'>{props.owner}</p>
    </div>
}

export default function Department(props) {
    const departmentList = [
        {
            title: "AJP",
            subTitle: "Advance Java Programing",
            owner: "Sagar Mhatre"
        },
        {
            title: "CSS",
            subTitle: "Client Side Scripting",
            owner: "Sagar Mhatre"
        },
        {
            title: "OSY",
            subTitle: "Operating System",
            owner: "Sumit Dalvi"
        },
        {
            title: "EST",
            subTitle: "Enviormental Studies",
            owner: "Sandesh Khandagle"
        },
        {
            title: "STE",
            subTitle: "Software Testing",
            owner: "Sagar Mhatre"
        },
        {
            title: "CPP",
            subTitle: "Capstone Project Planing",
            owner: "Sumit Dalvi"
        },
    ]
    return (
        <div className='department'>
            <Header user={props.user} />
            <section className='yearSection'>
                <h2>Select your academic year</h2>
                <div className='chip-container'>
                    <YearButton year="2019-2020" isSelected={true} />
                    <YearButton year="2020-2021" />
                    <YearButton year="2021-2022" />
                </div>
            </section>
            <section className='departmentsSec'>
                <div className='sectionTitle'>
                    <h2>Departments</h2>
                    <AddIcon color="#209f15" />
                </div>
                <div className='departmentCards'>
                    {departmentList.map((value, key) => {
                        return <DepartmentCardItem
                            id={key}
                            title={value.title}
                            subTitle={value.subTitle}
                            owner={value.owner}
                            setTab={props.setActiveTab}
                        />
                    })}

                </div>

            </section>
        </div>
    )
}
