import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

import ModalLayout from '../../layout/_lyt_modal'
import AddEventModal from './AddEventModal';
import EditEventModal from './EditEventModal';
import axios from 'axios';
import { API_HOST } from '../../API/constant';
import { useAuth } from '../../data/Context/UserContext'

export default function Calendar() {
  const { userInstance } = useAuth();

  const [events, setEvents] = React.useState([]);
  const [selectedDate, setSelectedDate] = React.useState();
  const [data, setData] = React.useState({});

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isEditModalOpen, setEditModalOpen] = React.useState(false);

  React.useEffect(() => {
    axios
      .get(`${API_HOST}/events`)
      .then((res) => {
        // console.log(res.data);
        setEvents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDateClick = (arg) => {
    setSelectedDate(arg.dateStr);
    setIsModalOpen(true);
  };

  const handleEventClick = (arg) => {
    setData(arg.event._def);
    setEditModalOpen(true);
  };

  // const renderEventContent = (eventInfo) => {
  //     return (
  //         <div className="fc-event-container">
  //             <div className="fc-event-title">{eventInfo.event.event_title}</div>
  //             <div className="fc-event-description">{eventInfo.event.event_description}</div>
  //         </div>
  //     );
  // }

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        eventDisplay="block"
        events={events}
      />

      {isModalOpen && (
        <ModalLayout>
          {" "}
          <AddEventModal
            selectedDate={selectedDate}
            setIsOpen={setIsModalOpen}
          />{" "}
        </ModalLayout>
      )}
      {isEditModalOpen && (
        <ModalLayout>
          {" "}
          <EditEventModal
            user={userInstance}
            data={data}
            setIsOpen={setEditModalOpen}
          />{" "}
        </ModalLayout>
      )}
    </>
  );
}
