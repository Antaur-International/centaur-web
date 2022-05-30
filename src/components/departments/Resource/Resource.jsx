import React, { useState } from 'react'
import { AddIcon } from '../../../icons/Icons';
import ModalLayout from '../../../layout/_lyt_modal';
import AddResource from './AddResource';
import ResourceList from './ResourceList'
import { API_HOST } from '../../../API/constant';
import axios from 'axios';
import { BoxLoading } from 'react-loadingg';
export default function Resource({ user }) {

    const [resources, setResources] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    React.useEffect(() => {
        axios.get(`${API_HOST}/resource`)
            .then(res => {
                // console.log(res.data.resources);
                setResources(res.data.resources);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])


    return (
        <section className='cp_wrapper_publicResource'>
            <div className='wrapper_top_section'>
                <h2>Resource</h2>
                {user.type === "staff" && <button className='top_section_addBtn'
                    onClick={() => setShowModal(true)}
                >
                    <AddIcon />
                    <p>
                        Add Resource
                    </p>
                </button>}
                {
                    showModal && <ModalLayout >
                        <AddResource user={user} setIsOpen={setShowModal} />
                    </ModalLayout>
                }

            </div>
            <ul className='wrapper_publicResource_list'>
                {
                    loading ? <BoxLoading color="#65FF52" /> : resources.map((item, index) => {
                        return (
                            <ResourceList item={item} />
                        )
                    })
                }
            </ul>
        </section>
    )
}
