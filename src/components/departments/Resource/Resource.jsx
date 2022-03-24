import React, { useState } from 'react'
import ResourceList from './ResourceList'
import { UserContext } from '../../../data/Context/UserContext';

export default function Resource() {

    const [resources, setResources] = useState([]);
    const user = React.useContext(UserContext);

    React.useEffect(() => {
        setResources(user.status.batch.resources);
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
