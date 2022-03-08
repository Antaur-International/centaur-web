import React from 'react'

function TagInput(props) {
    return (
        <div className='cp-input typ-normal'>
            <label className='cp-input__label'>{props.mainLabel}</label>
            <div className='cp-input__wrapper'>
                <div className='cp-input__labelL'>
                    <label>{props.label}</label>
                </div>
                <input className='cp-input__input' type={props.inputType} placeholder={props.placeholder} value={props.value} />
            </div>
        </div>
    )
}

function NormalInput(props) {
    return (
        <div className='cp-input typ-tag'>
            <label className='cp-input__label'>{props.mainLabel}</label>
            <div className='cp-input__wrapper'>
                <input className='cp-input__input' type={props.inputType} placeholder={props.placeholder} value={props.value} />
            </div>
        </div>
    )
}

function ColumnInput(props) {
    return (
        <div className='cp-input typ-column'>
            <label className='cp-input__label'>{props.mainLabel}</label>
            <div className='cp-input__wrapper'>
                <input className='cp-input__input' type={props.inputType} placeholder={props.placeholder} value={props.value} />
            </div>
        </div>
    )
}

export { NormalInput, TagInput, ColumnInput }