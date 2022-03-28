import React, { useState } from 'react'
import { AddIcon } from '../../../icons/Icons';
import ModalLayout from '../../../layout/_lyt_modal';
import AddResource from './AddResource';
import ResourceList from './ResourceList'

export default function Resource({ user }) {

    const [resources, setResources] = useState([]);

    const [showModal, setShowModal] = useState(false);

    React.useEffect(() => {
        setResources(user.batch.resources);
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
                        <AddResource setIsOpen={setShowModal} />
                    </ModalLayout>
                }

            </div>
            <ul className='wrapper_publicResource_list'>
                {
                    resources.map((item, index) => {
                        return (
                            <ResourceList item={item} />
                        )
                    })
                }
            </ul>
        </section>
    )
}
