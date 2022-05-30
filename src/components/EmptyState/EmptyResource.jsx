import React from 'react'

export const EmptyResource = () => {
    return (
        <div className='empty_state_wrapper'>
            <img src='/centaur-web/images/state/resultNotFound.svg' width={120} alt='' />
            <p>No resources found!</p>
        </div>
    )
}
