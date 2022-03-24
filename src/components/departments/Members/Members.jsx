import React from 'react'
import axios from 'axios'

export default function Members() {

    const [faculty, setFaculty] = React.useState([]);
    const [student, setStudent] = React.useState([]);

    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_DEV_URL}/user/getFaculty`)
            .then(res => {
                setFaculty(res.data.faculty);
            })
            .catch(err => {
                console.log(err);
            });

        axios.get(`${process.env.REACT_APP_DEV_URL}/user/getStudents`)
            .then(res => {
                setStudent(res.data.students);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <section className='cp_wrapper_members'>
            <h2>Members</h2>
            <div className='wrapper_members_section'>

                <div className='members_section_label'>
                    <p>Faculty</p>
                </div>

                <ul className='wrapper_members_list'>
                    {
                        faculty.map((fac, index) => {
                            return <li className='members_list_item'>
                                <div className='list_item_avatar'>
                                    <img src={fac.image} alt="avatar" />
                                </div>

                                <p className='list_item_name'>
                                    {fac.name}
                                </p>
                                <p className='list_item_role'>
                                    Faculty
                                </p>

                            </li>
                        })
                    }
                </ul>
            </div>
            <div className='wrapper_members_section'>
                <div className='members_section_label'>
                    <p>Student</p>
                </div>
                <ul className='wrapper_members_list'>
                    {
                        student.map((stud, index) => {
                            return <li className='members_list_item'>
                                <div className='list_item_avatar'>
                                    <img src={stud.image} alt="avatar" />
                                </div>

                                <p className='list_item_name'>
                                    {stud.name}
                                </p>
                                <p className='list_item_role'>
                                    Student
                                </p>

                            </li>
                        })
                    }
                </ul>
            </div>

        </section>
    )
}
