import React from 'react'

export const EmptyNotifications = () => {
    return (
        <div className='empty_state_wrapper'>
            <img src='/centaur-web/images/state/emptyNotifications.svg' width={120} alt='' />
            <p>You have no notifications now. Come back later</p>
        </div>
    )
}
