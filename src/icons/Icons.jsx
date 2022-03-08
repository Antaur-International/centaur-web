import React from 'react';

export const DashboardIcon = (props) => {
    return <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="0.5" width="8" height="8" fill={props.color} />
        <rect y="15.5" width="8" height="8" fill={props.color} />
        <rect x="15" y="15.5" width="8" height="8" fill={props.color} />
        <rect x="15" y="0.5" width="8" height="8" fill={props.color} />
    </svg>
        ;
}

export const DepartmentIcon = (props) => {
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 3H14C15.1046 3 16 3.89543 16 5V6H20C21.1046 6 22 6.89543 22 8V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V8C2 6.89543 2.89543 6 4 6H8V5C8 3.89543 8.89543 3 10 3ZM4 8H8H16H20V13H13H11H4V8ZM4 19V15H11V16H13V15H20V19H4ZM14 5V6H10V5H14Z" fill={props.color} />
    </svg>

}

export const ScheduleIcon = (props) => {
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 6H6V5H4V8H20V5H18V6H16V5H8V6ZM20 10H4V20H20V10ZM16 3H8V2H6V3H4C2.89543 3 2 3.89543 2 5V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V5C22 3.89543 21.1046 3 20 3H18V2H16V3ZM7 14V12H9V14H7ZM11 14H13V12H11V14ZM15 14V12H17V14H15ZM7 16V18H9V16H7ZM13 18H11V16H13V18Z" fill={props.color} />
    </svg>
}

export const FacultyIcon = (props) => {
    return <svg width="43" height="27" viewBox="0 0 43 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18 10C18 7.75576 19.5791 6 22 6C24.4142 6 26 7.92158 26 10.2C26 13.4796 24.2181 15 22 15C19.7609 15 18 13.4274 18 10ZM22 15C26.6445 15 29.6763 16.0449 29.9756 18.5756C29.4748 19.1027 28.9223 19.5802 28.3262 20H28V19C28 17.8021 25.8558 17 22 17C18.1442 17 16 17.8021 16 19V20H15.6739C15.0778 19.5802 14.5252 19.1027 14.0244 18.5756C14.3237 16.0449 17.3556 15 22 15ZM20 10C20 12.2693 20.8182 13 22 13C23.1777 13 24 12.2984 24 10.2C24 8.95042 23.2157 8 22 8C20.7337 8 20 8.81582 20 10Z" fill={props.color} />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00001 13C8.00001 10.7558 9.57911 9 12 9C14.4142 9 16 10.9216 16 13.2C16 16.4796 14.2181 18 12 18C9.76087 18 8.00001 16.4274 8.00001 13ZM12 18C16.6445 18 19.6763 19.0449 19.9756 21.5756C19.4748 22.1027 18.9223 22.5802 18.3262 23H18V22C18 20.8021 15.8558 20 12 20C8.14421 20 6.00001 20.8021 6.00001 22V23H5.67385C5.07775 22.5802 4.52523 22.1027 4.02441 21.5756C4.3237 19.0449 7.35556 18 12 18ZM10 13C10 15.2693 10.8182 16 12 16C13.1777 16 14 15.2984 14 13.2C14 11.9504 13.2157 11 12 11C10.7337 11 10 11.8158 10 13Z" fill={props.color} />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M27 13C27 10.7558 28.5791 9 31 9C33.4142 9 35 10.9216 35 13.2C35 16.4796 33.2181 18 31 18C28.7609 18 27 16.4274 27 13ZM31 18C35.6445 18 38.6763 19.0449 38.9756 21.5756C38.4748 22.1027 37.9223 22.5802 37.3262 23H37V22C37 20.8021 34.8558 20 31 20C27.1442 20 25 20.8021 25 22V23H24.6739C24.0778 22.5802 23.5252 22.1027 23.0244 21.5756C23.3237 19.0449 26.3556 18 31 18ZM29 13C29 15.2693 29.8182 16 31 16C32.1777 16 33 15.2984 33 13.2C33 11.9504 32.2157 11 31 11C29.7337 11 29 11.8158 29 13Z" fill={props.color} />
    </svg>

}

export const ChatIcon = (props) => {
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 21.8042L12.0868 18H20C21.1046 18 22 17.1046 22 16V4C22 2.89543 21.1046 2 20 2H4C2.89543 2 2 2.89543 2 4V16C2 17.1046 2.89543 18 4 18H6V21.8042ZM11.5132 16L8 18.1958V16H4V4H20V16H11.5132ZM7 13V11H14V13H7ZM7 7V9H16V7H7Z" fill={props.color} />
    </svg>

}

export const LiveIcon = (props) => {
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5H15C16.1046 5 17 5.89543 17 7V8.38197L23 5.38197V18.618L17 15.618V17C17 18.1046 16.1046 19 15 19H3C1.89543 19 1 18.1046 1 17V7C1 5.89543 1.89543 5 3 5ZM17 13.382L21 15.382V8.61803L17 10.618V13.382ZM3 7V17H15V7H3Z" fill={props.color} />
    </svg>

}

export const SettingsIcon = (props) => {
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6562 20.897L20.8733 18.6798L20.0925 15.843L20.4327 15.0305L23 13.5818V10.4464L20.44 8.99173L20.1055 8.18067L20.8961 5.34235L18.6774 3.12683L15.8403 3.90748L15.0296 3.56758L13.5808 1H10.4454L8.99072 3.56004L8.17985 3.89446L5.34198 3.10281L3.1267 5.31809L3.90748 8.15567L3.56758 8.96634L1 10.4151V13.5496L3.55774 15.0076L3.89252 15.8193L3.10197 18.6572L5.31809 20.8733L8.15567 20.0925L8.96644 20.4325L10.4153 22.999H13.5498L15.0067 20.4412L15.8183 20.1065L18.6562 20.897ZM18.8527 13.6256L17.9809 15.7078L18.6362 18.0886L18.0678 18.657L15.692 17.9951L13.609 18.8542L12.3873 20.999H11.5829L10.3714 18.8529L8.29155 17.9808L5.90947 18.6362L5.34203 18.0688L6.00385 15.693L5.14482 13.6101L3 12.3876V11.583L5.1471 10.3715L6.0192 8.29155L5.36375 5.90947L5.93001 5.34321L8.30576 6.00595L10.3895 5.14655L11.6093 3H12.4129L13.6245 5.1471L15.7044 6.0192L18.087 5.36362L18.6558 5.93166L17.9941 8.30696L18.8534 10.3906L21 11.6103V12.4139L18.8527 13.6256ZM12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="white" />
    </svg>

}

export const SearchIcon = (props) => {
    return <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18.5C5.58172 18.5 2 14.9183 2 10.5C2 6.08172 5.58172 2.5 10 2.5C14.4183 2.5 18 6.08172 18 10.5C18 12.3487 17.3729 14.051 16.3199 15.4056L21.7071 20.7929L20.2929 22.2071L14.9056 16.8199C13.551 17.8729 11.8487 18.5 10 18.5ZM16 10.5C16 13.8137 13.3137 16.5 10 16.5C6.68629 16.5 4 13.8137 4 10.5C4 7.18629 6.68629 4.5 10 4.5C13.3137 4.5 16 7.18629 16 10.5Z" fill="#A4A4A4" />
    </svg>

}

export const BellIcon = (props) => {
    return <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 10.5C19.5 6.44082 17.2616 3.6235 14.3654 2.77771C14.2605 2.50636 14.0948 2.2541 13.8695 2.04243C13.0997 1.31919 11.9003 1.31919 11.1305 2.04243C10.9057 2.25364 10.7402 2.50525 10.6353 2.77592C7.73535 3.61803 5.5 6.42919 5.5 10.5C5.5 13.1339 4.96898 14.6098 3.98596 15.6793C3.82161 15.8582 3.37632 16.2678 3.07468 16.5453L3.07465 16.5453L3.07465 16.5453L3.0745 16.5454C2.93187 16.6766 2.82138 16.7783 2.78796 16.8119L2.5 17.104V20.5141H8.58798C8.79384 21.5761 9.37009 22.2867 10.4122 22.9226C11.6941 23.7049 13.3059 23.7049 14.5878 22.9226C15.5075 22.3614 16.1241 21.4989 16.3743 20.5141H22.5V17.104L22.212 16.8119C22.1817 16.7812 22.0757 16.6834 21.937 16.5555C21.6363 16.2781 21.1823 15.8592 21.0154 15.6769C20.0317 14.6024 19.5 13.1246 19.5 10.5ZM14.2367 20.5141H10.6786C10.8199 20.7769 11.0607 20.9754 11.454 21.2154C12.0963 21.6073 12.9037 21.6073 13.546 21.2154C13.8434 21.0339 14.0758 20.7937 14.2367 20.5141ZM19.5402 17.0274C19.7506 17.2573 20.2016 17.6774 20.5 17.9519V18.5141H4.5V17.9524C4.79607 17.6811 5.24843 17.2613 5.45849 17.0327C6.79422 15.5794 7.5 13.6178 7.5 10.5C7.5 6.71989 9.83277 4.51238 12.5 4.51238C15.1597 4.51238 17.5 6.73129 17.5 10.5C17.5 13.6078 18.206 15.57 19.5402 17.0274Z" fill="#3ABE2F" />
    </svg>

}

export const CalenderIcon = () => {
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 6H6V5H4V8H20V5H18V6H16V5H8V6ZM20 10H4V20H20V10ZM16 3H8V2H6V3H4C2.89543 3 2 3.89543 2 5V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V5C22 3.89543 21.1046 3 20 3H18V2H16V3ZM7 14V12H9V14H7ZM11 14H13V12H11V14ZM15 14V12H17V14H15ZM7 16V18H9V16H7ZM13 18H11V16H13V18Z" fill="#209F15" />
    </svg>

}

export const VideoIcon = () => {
    return <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.12501 3.54167H10.625C11.4074 3.54167 12.0417 4.17593 12.0417 4.95833V5.93723L16.2917 3.81223V13.1878L12.0417 11.0628V12.0417C12.0417 12.8241 11.4074 13.4583 10.625 13.4583H2.12501C1.34261 13.4583 0.708344 12.8241 0.708344 12.0417V4.95833C0.708344 4.17593 1.34261 3.54167 2.12501 3.54167ZM12.0417 9.47889L14.875 10.8956V6.10444L12.0417 7.52111V9.47889ZM2.12501 4.95833V12.0417H10.625V4.95833H2.12501Z" fill="#27C619" />
    </svg>

}

export const MoreIcon = () => {
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="24 / basic / more-vertical">
            <path id="icon" fill-rule="evenodd" clip-rule="evenodd" d="M10 5C10 6.10457 10.8954 7 12 7C13.1046 7 14 6.10457 14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5ZM12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14ZM12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19C14 20.1046 13.1046 21 12 21Z" fill="#3ABE2F" />
        </g>
    </svg>

}

export const ChevronRight = () => {
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.41421 12L16.7071 19.2929L15.2929 20.7071L6.58578 12L15.2929 3.29289L16.7071 4.70711L9.41421 12Z" fill="black" />
    </svg>

}

export const ChevronLeft = ({ color, size }) => {
    return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5858 12L7.29289 19.2929L8.70711 20.7071L17.4142 12L8.70711 3.29289L7.29289 4.70711L14.5858 12Z" fill={color ? color : "black"} />
    </svg>

}

export const CheckMark = () => {
    return <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.49372 12.5063L16.625 4.375L17.8624 5.61244L8.49372 14.9812L3.5 9.98744L4.73744 8.75L8.49372 12.5063Z" fill="white" />
    </svg>

}

export const AddIcon = (props) => {
    return <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 12.5H20M12 20.5V12.5L12 4.5" stroke={props.color ? props.color : "#209f15"} stroke-width="1.5" stroke-linecap="round" />
    </svg>

}

export const Link = (props) => {
    return <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_161_1673)">
            <path d="M2.53817 13.2686L2.97901 12.6619H2.97901L2.53817 13.2686ZM1.84682 12.5773L1.24006 13.0181H1.24006L1.84682 12.5773ZM11.9032 12.5773L11.2964 12.1364L11.9032 12.5773ZM11.2118 13.2686L10.771 12.6619V12.6619L11.2118 13.2686ZM2.53817 3.21228L2.09733 2.60551L2.09733 2.60551L2.53817 3.21228ZM1.84682 3.90363L1.24006 3.46279L1.24006 3.46279L1.84682 3.90363ZM8.11601 3.3699C8.53019 3.37487 8.86998 3.04313 8.87495 2.62895C8.87991 2.21476 8.54817 1.87498 8.13399 1.87001L8.11601 3.3699ZM13.2454 6.98146C13.2405 6.56728 12.9007 6.23554 12.4865 6.24051C12.0723 6.24547 11.7406 6.58526 11.7456 6.99944L13.2454 6.98146ZM6.05452 7.6159C5.76162 7.9088 5.76162 8.38367 6.05452 8.67656C6.34741 8.96946 6.82228 8.96946 7.11518 8.67656L6.05452 7.6159ZM9.67509 -0.116769C9.26088 -0.114921 8.9266 0.22236 8.92845 0.63657C8.93029 1.05078 9.26758 1.38506 9.68178 1.38322L9.67509 -0.116769ZM11.2298 0.626302L11.2331 1.37629L11.2298 0.626302ZM14.1048 3.5013L13.3548 3.49796L14.1048 3.5013ZM13.3479 5.0493C13.346 5.4635 13.6803 5.80079 14.0945 5.80263C14.5087 5.80448 14.846 5.4702 14.8478 5.05599L13.3479 5.0493ZM13.5086 0.94548L13.9677 0.352353L13.9677 0.352352L13.5086 0.94548ZM13.7856 1.22243L14.3787 0.763411L14.3787 0.763411L13.7856 1.22243ZM13.6421 1.08903L13.182 0.496673L13.1449 0.525484L13.1117 0.558698L13.6421 1.08903ZM6.875 13.1155C5.6865 13.1155 4.85537 13.1144 4.21657 13.0452C3.59181 12.9775 3.24058 12.8519 2.97901 12.6619L2.09733 13.8754C2.65722 14.2822 3.30261 14.455 4.055 14.5365C4.79336 14.6165 5.71991 14.6155 6.875 14.6155V13.1155ZM0.5 8.24045C0.5 9.39554 0.498971 10.3221 0.578966 11.0605C0.660483 11.8128 0.833277 12.4582 1.24006 13.0181L2.45358 12.1364C2.26354 11.8749 2.13793 11.5236 2.07024 10.8989C2.00103 10.2601 2 9.42895 2 8.24045H0.5ZM2.97901 12.6619C2.77739 12.5154 2.60007 12.3381 2.45358 12.1364L1.24006 13.0181C1.47907 13.3471 1.76836 13.6364 2.09733 13.8754L2.97901 12.6619ZM11.75 8.24045C11.75 9.42895 11.749 10.2601 11.6798 10.8989C11.6121 11.5236 11.4865 11.8749 11.2964 12.1364L12.5099 13.0181C12.9167 12.4582 13.0895 11.8128 13.171 11.0605C13.251 10.3221 13.25 9.39554 13.25 8.24045H11.75ZM6.875 14.6155C8.03009 14.6155 8.95664 14.6165 9.695 14.5365C10.4474 14.455 11.0928 14.2822 11.6527 13.8754L10.771 12.6619C10.5094 12.8519 10.1582 12.9775 9.53343 13.0452C8.89463 13.1144 8.0635 13.1155 6.875 13.1155V14.6155ZM11.2964 12.1364C11.1499 12.3381 10.9726 12.5154 10.771 12.6619L11.6527 13.8754C11.9816 13.6364 12.2709 13.3471 12.5099 13.0181L11.2964 12.1364ZM6.875 1.86545C5.71991 1.86545 4.79336 1.86442 4.055 1.94442C3.30261 2.02594 2.65722 2.19873 2.09733 2.60551L2.97901 3.81904C3.24058 3.629 3.59181 3.50338 4.21657 3.43569C4.85537 3.36648 5.6865 3.36545 6.875 3.36545V1.86545ZM2 8.24045C2 7.05196 2.00103 6.22083 2.07024 5.58203C2.13793 4.95726 2.26354 4.60603 2.45358 4.34446L1.24006 3.46279C0.833277 4.02267 0.660483 4.66807 0.578966 5.42046C0.498971 6.15881 0.5 7.08537 0.5 8.24045H2ZM2.09733 2.60551C1.76837 2.84452 1.47907 3.13382 1.24006 3.46279L2.45358 4.34446C2.60007 4.14284 2.77739 3.96553 2.97901 3.81904L2.09733 2.60551ZM6.875 3.36545C7.33588 3.36545 7.74568 3.36546 8.11601 3.3699L8.13399 1.87001C7.75289 1.86544 7.33349 1.86545 6.875 1.86545V3.36545ZM13.25 8.24045C13.25 7.78196 13.25 7.36256 13.2454 6.98146L11.7456 6.99944C11.75 7.36978 11.75 7.77958 11.75 8.24045H13.25ZM9.68178 1.38322L11.2331 1.37629L11.2264 -0.12369L9.67509 -0.116769L9.68178 1.38322ZM13.3548 3.49796L13.3479 5.0493L14.8478 5.05599L14.8548 3.50465L13.3548 3.49796ZM11.2331 1.37629C11.8693 1.37346 12.2831 1.37275 12.5931 1.40659C12.8879 1.43879 12.9923 1.49428 13.0496 1.53861L13.9677 0.352352C13.6018 0.0692276 13.1854 -0.0376365 12.7559 -0.0845425C12.3415 -0.129801 11.8274 -0.126371 11.2264 -0.12369L11.2331 1.37629ZM14.8548 3.50465C14.8575 2.9037 14.8609 2.38962 14.8156 1.97518C14.7687 1.54566 14.6619 1.12925 14.3787 0.763411L13.1925 1.68145C13.2368 1.73874 13.2923 1.84318 13.3245 2.13802C13.3583 2.44795 13.3576 2.86174 13.3548 3.49796L14.8548 3.50465ZM7.11518 8.67656L14.1724 1.61936L13.1117 0.558698L6.05452 7.6159L7.11518 8.67656ZM13.0496 1.53861C13.0767 1.55956 13.1024 1.58221 13.1265 1.60639L14.1888 0.547426C14.1194 0.477803 14.0456 0.412637 13.9677 0.352353L13.0496 1.53861ZM13.1265 1.60639C13.15 1.62998 13.172 1.65504 13.1925 1.68145L14.3787 0.763411C14.3199 0.687448 14.2565 0.615321 14.1888 0.547426L13.1265 1.60639ZM14.1021 1.68138L14.1177 1.66927L13.1976 0.484554L13.182 0.496673L14.1021 1.68138Z" fill="black" fill-opacity="0.5" />
        </g>
        <defs>
            <clipPath id="clip0_161_1673">
                <rect width="15" height="15" fill="white" />
            </clipPath>
        </defs>
    </svg>

}

export const NewspaperIcon = (props) => {
    return <svg width="45" height="46" viewBox={" 0 0 " + props.width + " " + props.height} fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="24 / basic / newspaper">
            <path id="icon" fill-rule="evenodd" clip-rule="evenodd" d="M7.5 34.25V9.875H30V34.25C30 34.9074 30.1128 35.5385 30.3201 36.125H9.375C8.33947 36.125 7.5 35.2855 7.5 34.25ZM35.625 39.875H9.375C6.2684 39.875 3.75 37.3566 3.75 34.25V6.125H30H31.875H33.75V15.5H41.25V17.375V19.25V34.25C41.25 37.3566 38.7316 39.875 35.625 39.875ZM33.75 19.25H37.5V34.25C37.5 35.2855 36.6605 36.125 35.625 36.125C34.5895 36.125 33.75 35.2855 33.75 34.25V19.25ZM18.75 13.625V21.125H11.25V13.625H18.75ZM26.25 19.25V15.5H20.625V19.25H26.25ZM26.25 23V26.75H11.25V23H26.25ZM26.25 32.375V28.625H11.25V32.375H26.25Z" fill="#209F15" />
        </g>
    </svg>
}


export const SingleTick = (props) => {
    return <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0.354364" y1="4.09572" x2="3.55385" y2="7.30993" stroke="white" />
        <line x1="3.19059" y1="7.64645" x2="10.1906" y2="0.646447" stroke="white" />
    </svg>

}

export const HamBurger = (props) => {
    return <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="0.5" x2="18" y2="0.5" stroke="#B8B8B8" />
        <line y1="5.5" x2="18" y2="5.5" stroke="#B8B8B8" />
        <line y1="10.5" x2="18" y2="10.5" stroke="#B8B8B8" />
    </svg>

}

export const MyWork = (props) => {
    return <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.72014 14.3697H0.910154C0.408335 14.3697 0 14.7779 0 15.2798V19.0898C0 19.5917 0.408335 20 0.910154 20H4.72014C5.22201 20 5.6303 19.5916 5.6303 19.0898V15.2798C5.6303 14.7779 5.22201 14.3697 4.72014 14.3697ZM4.93017 19.0898C4.93017 19.2036 4.83398 19.2998 4.72014 19.2998H0.910154C0.796321 19.2998 0.700129 19.2036 0.700129 19.0898V15.2798C0.700129 15.166 0.796321 15.0698 0.910154 15.0698H4.72014C4.83398 15.0698 4.93017 15.166 4.93017 15.2798V19.0898Z" fill={props.color ? props.color : "#A4A4A4"} />
        <path d="M22.5347 7.72531H9.97753C9.22686 7.72531 8.61615 8.33602 8.61615 9.08669V11.9943C8.61615 12.745 9.22686 13.3557 9.97753 13.3557H22.5347C23.2854 13.3557 23.8961 12.745 23.8961 11.9943V9.08669C23.8961 8.33602 23.2854 7.72531 22.5347 7.72531ZM23.196 11.9943C23.196 12.3589 22.8994 12.6555 22.5347 12.6555H9.97753C9.61288 12.6555 9.31628 12.3589 9.31628 11.9943V9.08669C9.31628 8.72209 9.61288 8.42544 9.97753 8.42544H22.5347C22.8994 8.42544 23.196 8.72204 23.196 9.08669V11.9943Z" fill={props.color ? props.color : "#A4A4A4"} />
        <path d="M10.6528 3.89619C10.6528 4.0895 10.8096 4.24623 11.0029 4.24623H21.5094C21.7027 4.24623 21.8594 4.0895 21.8594 3.89619C21.8594 3.70287 21.7027 3.54615 21.5094 3.54615H11.0029C10.8096 3.54615 10.6528 3.70282 10.6528 3.89619Z" fill={props.color ? props.color : "#A4A4A4"} />
        <path d="M21.5093 10.1904H11.0029C10.8096 10.1904 10.6528 10.3471 10.6528 10.5405C10.6528 10.7338 10.8096 10.8905 11.0029 10.8905H21.5094C21.7027 10.8905 21.8594 10.7338 21.8594 10.5405C21.8594 10.3471 21.7027 10.1904 21.5093 10.1904Z" fill={props.color ? props.color : "#A4A4A4"} />
        <path d="M21.8594 17.1848C21.8594 16.9914 21.7027 16.8347 21.5093 16.8347H11.0029C10.8096 16.8347 10.6528 16.9914 10.6528 17.1848C10.6528 17.3781 10.8096 17.5348 11.0029 17.5348H21.5094C21.7027 17.5348 21.8594 17.3781 21.8594 17.1848Z" fill={props.color ? props.color : "#A4A4A4"} />
        <path d="M7.60098 6.93034C7.10131 6.50259 6.34681 6.56112 5.91915 7.06084L5.10379 8.01337C4.86814 7.82911 4.57635 7.72527 4.26896 7.72527H1.36138C0.610705 7.72531 0 8.33602 0 9.08669V11.9943C0 12.745 0.610705 13.3557 1.36138 13.3557H4.26892C5.01959 13.3557 5.6303 12.745 5.6303 11.9943V11.0669L7.73143 8.61232C7.93861 8.37028 8.03919 8.06201 8.0145 7.74431C7.98985 7.42666 7.84302 7.13762 7.60098 6.93034ZM4.93021 11.9943C4.93017 12.3589 4.63357 12.6555 4.26892 12.6555H1.36138C0.996777 12.6555 0.700129 12.3589 0.700129 11.9943V9.08669C0.700129 8.72209 0.996731 8.42544 1.36138 8.42544C4.52076 8.42544 4.4199 8.38493 4.64766 8.54618L3.86889 9.45601C3.62227 9.13547 3.60239 9.10373 3.51969 9.02462C2.81475 8.35053 1.63885 8.76792 1.51292 9.73306C1.47171 10.049 1.55605 10.3621 1.7503 10.6146L2.87407 12.0754C2.9291 12.1469 2.99122 12.2112 3.05903 12.2675C3.28082 12.4515 3.56067 12.5406 3.7888 12.5406C4.43638 12.5406 4.68808 12.1677 4.93017 11.8848V11.9943H4.93021ZM7.19955 8.15698L4.19373 11.6686C3.99112 11.9052 3.62003 11.897 3.42896 11.6486L2.30518 10.1877C1.97335 9.75658 2.48721 9.18778 2.94987 9.46586C3.05749 9.53054 3.06151 9.55481 3.57691 10.2248C3.71174 10.4 3.97511 10.4086 4.12031 10.239L5.38205 8.76503C5.38209 8.76493 5.38214 8.76489 5.38219 8.76479L6.45093 7.51617C6.62763 7.30984 6.93922 7.28571 7.14565 7.46227C7.24562 7.54786 7.30629 7.6673 7.31647 7.79849C7.32669 7.92969 7.28515 8.05701 7.19955 8.15698Z" fill={props.color ? props.color : "#A4A4A4"} />
        <path d="M1.36138 6.71131H4.26892C5.01959 6.71131 5.6303 6.10061 5.6303 5.34993V4.42265L7.73143 1.96802C8.15914 1.46835 8.10066 0.713847 7.60098 0.286143C7.10126 -0.141607 6.34686 -0.0830335 5.9191 0.416639L5.10374 1.36917C4.86809 1.18486 4.57625 1.08106 4.26892 1.08106H1.36138C0.610705 1.08106 0 1.69172 0 2.4424V5.34993C0 6.10061 0.610705 6.71131 1.36138 6.71131ZM6.45093 0.871879C6.62764 0.665495 6.93922 0.641319 7.14565 0.817926C7.35199 0.994627 7.37616 1.3063 7.19951 1.51269L4.19373 5.02426C3.99238 5.25948 3.62115 5.25416 3.42896 5.00428L2.30523 3.54344C2.04601 3.20656 2.30841 2.71655 2.73709 2.75291C3.01292 2.77629 3.06949 2.92083 3.57696 3.58045C3.71417 3.75879 3.97815 3.76084 4.12036 3.59464C4.37612 3.29585 6.21431 1.14841 6.45093 0.871879ZM0.700129 2.4424C0.700129 2.07775 0.996731 1.78115 1.36138 1.78115C4.52076 1.78115 4.4199 1.74063 4.64771 1.90189L3.86889 2.81171C3.62484 2.49444 3.59824 2.45197 3.49831 2.36091C2.78684 1.7131 1.63726 2.13595 1.51293 3.08871C1.47171 3.40468 1.55605 3.71776 1.7503 3.97026L2.87403 5.43105C3.33981 6.03658 4.23802 6.04899 4.7256 5.47945L4.93012 5.24049V5.34989C4.93012 5.71454 4.63352 6.01114 4.26887 6.01114H1.36138C0.996778 6.01114 0.700129 5.71454 0.700129 5.34989V2.4424V2.4424Z" fill={props.color ? props.color : "#A4A4A4"} />
        <path d="M22.5347 1.08106H17.0729C16.8796 1.08106 16.7229 1.23779 16.7229 1.43111C16.7229 1.62442 16.8796 1.78115 17.0729 1.78115H22.5347C22.8994 1.78115 23.196 2.07775 23.196 2.4424V5.34993C23.196 5.71458 22.8994 6.01119 22.5347 6.01119H9.97753C9.61288 6.01119 9.31628 5.71458 9.31628 5.34993V2.4424C9.31628 2.07775 9.61288 1.78115 9.97753 1.78115H15.4393C15.6327 1.78115 15.7894 1.62442 15.7894 1.43111C15.7894 1.23779 15.6327 1.08106 15.4393 1.08106H9.97753C9.22686 1.08106 8.61615 1.69177 8.61615 2.44244V5.34998C8.61615 6.10066 9.22686 6.71136 9.97753 6.71136H22.5347C23.2854 6.71136 23.8961 6.10066 23.8961 5.34998V2.4424C23.8961 1.69172 23.2854 1.08106 22.5347 1.08106Z" fill={props.color ? props.color : "#A4A4A4"} />
        <path d="M22.5347 14.3697H9.97753C9.22686 14.3697 8.61615 14.9804 8.61615 15.731V18.6386C8.61615 19.3892 9.22686 20 9.97753 20H15.4393C15.6327 20 15.7894 19.8433 15.7894 19.65C15.7894 19.4566 15.6327 19.2999 15.4393 19.2999H9.97753C9.61288 19.2999 9.31628 19.0033 9.31628 18.6386V15.7311C9.31628 15.3664 9.61288 15.0698 9.97753 15.0698H22.5347C22.8994 15.0698 23.196 15.3664 23.196 15.7311V18.6386C23.196 19.0033 22.8994 19.2999 22.5347 19.2999H17.0729C16.8796 19.2999 16.7229 19.4566 16.7229 19.65C16.7229 19.8433 16.8796 20 17.0729 20H22.5347C23.2854 20 23.8961 19.3892 23.8961 18.6386V15.731C23.8961 14.9804 23.2854 14.3697 22.5347 14.3697Z" fill={props.color ? props.color : "#A4A4A4"} />
    </svg>

}

export const Heart = (props) => {
    return (
        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.95832 7.44824C4.12203 6.91735 4.41528 6.41853 4.86498 5.97267C5.21905 5.62162 5.58652 5.39011 5.95522 5.25M10.7672 3.78219C12.0922 2.9417 14.232 2.14692 16.0799 4.0314C20.4665 8.50483 12.9439 17.125 9.49999 17.125C6.05613 17.125 -1.46657 8.50483 2.92006 4.0314C4.76796 2.14694 6.90778 2.94171 8.23275 3.7822C8.98142 4.2571 10.0185 4.2571 10.7672 3.78219Z" stroke={props.color} stroke-width="1.5" stroke-linecap="round" />
        </svg>
    )
}

export const UserIcon = ({ color }) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.25 6C15.25 7.79493 13.7949 9.25 12 9.25V10.75C14.6234 10.75 16.75 8.62335 16.75 6H15.25ZM12 9.25C10.2051 9.25 8.75 7.79493 8.75 6H7.25C7.25 8.62335 9.37665 10.75 12 10.75V9.25ZM8.75 6C8.75 4.20507 10.2051 2.75 12 2.75V1.25C9.37665 1.25 7.25 3.37665 7.25 6H8.75ZM12 2.75C13.7949 2.75 15.25 4.20507 15.25 6H16.75C16.75 3.37665 14.6234 1.25 12 1.25V2.75ZM9 13.75H15V12.25H9V13.75ZM15 20.25H9V21.75H15V20.25ZM9 20.25C7.20507 20.25 5.75 18.7949 5.75 17H4.25C4.25 19.6234 6.37665 21.75 9 21.75V20.25ZM18.25 17C18.25 18.7949 16.7949 20.25 15 20.25V21.75C17.6234 21.75 19.75 19.6234 19.75 17H18.25ZM15 13.75C16.7949 13.75 18.25 15.2051 18.25 17H19.75C19.75 14.3766 17.6234 12.25 15 12.25V13.75ZM9 12.25C6.37665 12.25 4.25 14.3766 4.25 17H5.75C5.75 15.2051 7.20507 13.75 9 13.75V12.25Z" fill={color} />
        </svg>

    )
}

export const Clock = ({ color }) => {
    return (
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_161_2253)">
                <path d="M9.75 6.6875C9.75 6.27329 9.41422 5.9375 9 5.9375C8.58579 5.9375 8.25 6.27329 8.25 6.6875H9.75ZM6.9543 11.514C6.67015 11.8154 6.68412 12.29 6.9855 12.5742C7.28689 12.8583 7.76156 12.8444 8.0457 12.543L6.9543 11.514ZM1.78148 2.35185C1.45803 2.61061 1.40559 3.08257 1.66435 3.40602C1.92311 3.72947 2.39507 3.78191 2.71852 3.52315L1.78148 2.35185ZM4.59352 2.02315C4.91697 1.76439 4.96941 1.29243 4.71065 0.968979C4.45189 0.645532 3.97993 0.593091 3.65648 0.851848L4.59352 2.02315ZM15.2815 3.52315C15.6049 3.78191 16.0769 3.72947 16.3357 3.40602C16.5944 3.08257 16.542 2.61061 16.2185 2.35185L15.2815 3.52315ZM14.3435 0.851848C14.0201 0.593091 13.5481 0.645532 13.2893 0.968979C13.0306 1.29243 13.083 1.76439 13.4065 2.02315L14.3435 0.851848ZM8.45521 11.0153L7.90951 10.5008L8.45521 11.0153ZM8.25 6.6875V9.64334H9.75V6.6875H8.25ZM8.0457 12.543L9.00092 11.5298L7.90951 10.5008L6.9543 11.514L8.0457 12.543ZM2.71852 3.52315L4.59352 2.02315L3.65648 0.851848L1.78148 2.35185L2.71852 3.52315ZM16.2185 2.35185L14.3435 0.851848L13.4065 2.02315L15.2815 3.52315L16.2185 2.35185ZM15.75 9.6875C15.75 13.4154 12.7279 16.4375 9 16.4375V17.9375C13.5563 17.9375 17.25 14.2438 17.25 9.6875H15.75ZM9 16.4375C5.27208 16.4375 2.25 13.4154 2.25 9.6875H0.75C0.75 14.2438 4.44365 17.9375 9 17.9375V16.4375ZM2.25 9.6875C2.25 5.95958 5.27208 2.9375 9 2.9375V1.4375C4.44365 1.4375 0.75 5.13115 0.75 9.6875H2.25ZM9 2.9375C12.7279 2.9375 15.75 5.95958 15.75 9.6875H17.25C17.25 5.13115 13.5563 1.4375 9 1.4375V2.9375ZM8.25 9.64334C8.25 9.96214 8.1282 10.2689 7.90951 10.5008L9.00092 11.5298C9.48204 11.0195 9.75 10.3447 9.75 9.64334H8.25Z" fill="#2D264B" />
            </g>
            <defs>
                <clipPath id="clip0_161_2253">
                    <rect width="18" height="18" fill="white" transform="translate(0 0.5)" />
                </clipPath>
            </defs>
        </svg>

    )
}