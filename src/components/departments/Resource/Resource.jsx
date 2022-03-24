import React, { useState } from 'react'
import ResourceList from './ResourceList'

export default function Resource({ user }) {

    const [resources, setResources] = useState([]);

    React.useEffect(() => {
        setResources(user.batch.resources);
    }, [])

    return (
        <section className='cp_wrapper_publicResource'>
            <h2>Resource</h2>
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
