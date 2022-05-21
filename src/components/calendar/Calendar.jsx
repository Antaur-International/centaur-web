import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

import ModalLayout from '../../layout/_lyt_modal'
import AddEventModal from './AddEventModal';
import axios from 'axios';
import { API_HOST } from '../../API/constant';

export default function Calendar() {

    const [events, setEvents] = React.useState([]);
    const [tasks, setTasks] = React.useState([]);
    const [selectedDate, setSelectedDate] = React.useState();

    const [isModalOpen, setIsModalOpen] = React.useState(false);

    React.useEffect(() => {
        axios.get(`${API_HOST}/events`)
            .then(res => {
                console.log(res.data);
                setEvents(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const handleDateClick = (arg) => {
        setSelectedDate(arg.dateStr);
        setIsModalOpen(true);
    }

    const renderEventContent = (eventInfo) => {
        return (
            <div className="fc-event-container">
                <div className="fc-event-title">{eventInfo.event.event_title}</div>
                <div className="fc-event-description">{eventInfo.event.event_description}</div>
            </div>
        );
    }

    return (
        <>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                dateClick={handleDateClick}
                events={events}
            />

            {isModalOpen && <ModalLayout> <AddEventModal selectedDate={selectedDate} setIsOpen={setIsModalOpen} /> </ModalLayout>}
        </>
    )
}
