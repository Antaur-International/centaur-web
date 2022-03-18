import React, { useContext, useRef, useState } from 'react'
import Header from '../components/Header'
import { ChevronLeft, Heart, UserIcon } from '../icons/Icons'
import { NormalInput, TagInput, ColumnInput } from '../components/settings/Inputs'
import { AddIcon, CheckMark } from '../icons/Icons';
import * as FormData from "form-data";
import axios from 'axios'
import { UserContext } from '../data/Context/UserContext';

export default function SettingsLayout(props) {

    const user = useContext(UserContext)

    const [name, setName] = useState("");



    const frontRef = useRef(null);
    const backRef = useRef(null);
    const imageRef = useRef(null);

    React.useEffect(() => {
        user.update();
        setName(user.status.name);
    }, [])

    const handleProfileUpdate = () => {
        let formData = new FormData();
        formData.append("file", imageRef.current.files[0]);
        formData.append("user_id", user.status._id);

        axios.post(`${process.env.REACT_APP_DEV_URL}/file/upload`, formData)
            .then(res => {
                const data = {
                    image: res.data.file,
                    id: user.status._id
                }

                axios.post(`${process.env.REACT_APP_DEV_URL}/user/profileImage`, data)
                    .then(res => {
                        console.log(res);
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => {
                console.log(err);
            })
    };

    const uploadFront = () => {
        let formData = new FormData();

        formData.append("file", frontRef.current.files[0]);
        formData.append("user_id", user.status._id);

        for (var p of formData) {
            console.log(p);
        }

        axios.post(`${process.env.REACT_APP_DEV_URL}/file/upload`, formData)
            .then(res => {

                const data = {
                    image: res.data.file,
                    id: user.status._id,
                    front_image: true
                }

                console.log(data);

                axios.post(`${process.env.REACT_APP_DEV_URL}/user/updateImage`, data)
                    .then(res => {
                        console.log(res);
                    })
                    .catch(err => {
                        console.log(err);
                    })

                console.log(res.data.file);
            })
            .catch(err => {
                console.log("hit");
                console.log(err);
            });
    }

    const uploadBack = () => {
        let formData = new FormData();

        formData.append("file", backRef.current.files[0]);
        formData.append("user_id", user.status._id);

        for (var p of formData) {
            console.log(p);
        }

        axios.post(`${process.env.REACT_APP_DEV_URL}/file/upload`, formData)
            .then(res => {

                const data = {
                    image: res.data.file,
                    id: user.status._id,
                    front_image: false
                }

                console.log(data);

                axios.post(`${process.env.REACT_APP_DEV_URL}/user/updateImage`, data)
                    .then(res => {
                        console.log(res);
                    })
                    .catch(err => {
                        console.log(err);
                    })

                console.log(res.data.file);
            })
            .catch(err => {
                console.log("hit");
                console.log(err);
            });
    }

    return (
        <section className='layout_wrapper_settings'>
            <Header />
            <section className='wrapper_settings_navbar'>
                <h1>Settings</h1>
                <ul className='settings_navbar_list'>
                    <li className='navbar_list_item'>

                        <Heart color="black" />
                        <div className='list_item_title'>
                            <p className='item_title_title'>Appearances</p>
                            <p className='item_title_shortList'>Dark and Light Mode, Font Size</p>
                        </div>
                        <div className='list_item_iconChevron'>

                            <ChevronLeft color="black" size="15px" />
                        </div>
                    </li>
                    <li className='navbar_list_item'>
                        <UserIcon color={"#3ABE2F"} />
                        <div className='list_item_title'>
                            <p className='item_title_title'
                                style={{ color: "#3ABE2F" }}
                            >
                                Account Settings</p>
                            <p className='item_title_shortList' style={{ color: "#3ABE2F" }}>Personal Information, Email</p>
                        </div>
                        <div className='list_item_iconChevron'>
                            <ChevronLeft color="#3ABE2F" size="15px" />
                        </div>
                    </li>
                </ul>
            </section>
            <section className='wrapper_setting_content'>
                <div className="setting_content__heading">
                    <h2 className='heading_title'>Account Settings</h2>
                </div>
                <div className="setting_content__body">
                    <div className="setting_content__body_content">
                        <div className='body_title'>
                            <p>Personal Information</p>
                        </div>

                        <div className='body_content'>
                            <TagInput mainLabel="First Name " label="mes.ac.in/" inputType="text" placeholder="Enter Your First Name: " value={name.split(" ")[0]} />
                            <TagInput mainLabel="Last Name " label="mes.ac.in/" inputType="text" placeholder="Enter Your Last Name: " value={name.split(" ")[1]} />

                            <NormalInput mainLabel="Email " inputType="text" placeholder="Enter Your Email: " value={user.status.email} />

                            <ColumnInput mainLabel="Phone Number " inputType="text" placeholder="00000 00000" value={user.status.phoneNum} />
                            <ColumnInput mainLabel="Enrollment Number " inputType="text" placeholder="EN-0000000000" value={user.status.en_number} />
                        </div>
                    </div>
                    <div className='setting_content__body_idVerify'>
                        <div className="idVerify__heading">
                            <p className='heading_title'>
                                <img src='/centaur-web/images/icons/tick-green.svg' alt='confirmation icon' />
                                {user.status.idImageFront && user.status.idImageBack ? "You have completed your ID verification" : "Please complete your student verification by adding scanned images of your ID"}</p>
                        </div>
                        <div className="idInputs_verify">
                            {
                                user.status.idImageFront ?
                                    <div>
                                        <h2>Front Side Of ID:</h2>
                                        <br />
                                        <img src={user.status.idImageFront} alt='idFront' />
                                    </div> :
                                    <div className="file-input">
                                        <input type='file' ref={frontRef} onChange={uploadFront} />
                                        <span class='button'><AddIcon color="#000" /></span>
                                    </div>
                            }

                            {
                                user.status.idImageBack ?
                                    <div>
                                        <h2>Back Side Of ID:</h2>
                                        <br />
                                        <img src={user.status.idImageBack} alt='idBack' />
                                    </div> :
                                    <div className="file-input">
                                        <input type='file' ref={backRef} onChange={uploadBack} />
                                        <span class='button'><AddIcon color="#000" /></span>
                                    </div>
                            }
                        </div>
                    </div>
                    <div className='settings_content__body_profileImage'>
                        <div className="profile_title">
                            <p className='heading_title'>Your Profile Image</p>
                        </div>

                        <div className="profile_image">
                            <label className='imageUpload'>
                                <input className='delete' type='file' ref={imageRef} onChange={handleProfileUpdate} />
                                Choose Image
                            </label>
                            <button className="upload">Upload</button>
                            <img src={user.status.image} alt="profileImage" />
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
