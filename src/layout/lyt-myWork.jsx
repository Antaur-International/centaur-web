import React from 'react'
import MyWorkMain from '../components/myWork/myWork'
import TodoLayout from './lyt-todo'
import Header from '../components/Header'

export default function MyWork({ setSnackbarOpenState, openState, setMessage }) {


    return (
        <section className='lyt_wrapper_myWork'>
            <div className='wrapper_myWork_header'>
                <Header />
            </div>
            <div className='wrapper_myWork_main'>
                <MyWorkMain setSnackbarOpenState={setSnackbarOpenState} openState={openState} setMessage={setMessage} />
            </div>
            <div className='wrapper_myWork_todo'>
                <TodoLayout />
            </div>
        </section>
    )
}
