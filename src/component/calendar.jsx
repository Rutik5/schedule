import React, { useState, createRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import EventForm from './EventForm';

const Calendar = () => {
    const calendarRef = createRef();
    const [showEventForm, setShowEventForm] = useState(false);
    const [events, setEvents] = useState([]); // Add an events state to manage events.
  
    const handleNewEventClick = () => {
      setShowEventForm(true);
    };
  
    const handleEventFormClose = () => {
      setShowEventForm(false);
    };
  
    const handleAddEvent = (newEvent) => {
      // Update the events state with the new event.
      setEvents([...events, newEvent]);
      setShowEventForm(false); // Close the EventForm after adding an event.
    };

    return (
        <div className='calenderbody'>
            <FullCalendar
                ref={calendarRef}
                plugins={[dayGridPlugin, timeGridPlugin]}
                initialView="dayGridMonth"
                height="800px"
               
                events="https://fullcalendar.io/demo-events.json?start=2023-10-22&end=2023-10-24"
                customButtons={{
                    myTimeDayBtn: {
                        text: "timeDay",
                        click() {
                            const calendar = calendarRef.current;
                            if (calendar) {
                                const calendarApi = calendar.getApi();
                                calendarApi.changeView("timeGridDay");
                            }
                        },
                    },
                    myTimeWeekBtn: {
                        text: "timeWeek",
                        click() {
                            const calendar = calendarRef.current;
                            if (calendar) {
                                const calendarApi = calendar.getApi();
                                calendarApi.changeView("timeGridWeek");
                            }
                        },
                    },
                    newEventBtn: {
                        text: "New Event",
                        click: handleNewEventClick,
                    },
                }}
                headerToolbar={{
                    
                    right: "newEventBtn,today,dayGridDay,dayGridWeek,dayGridMonth,myTimeDayBtn,myTimeWeekBtn",
                }}
            />
            {showEventForm && (
        <EventForm onAddEvent={handleAddEvent} onClose={handleEventFormClose} />
      )}
        </div>
    );
}

export default Calendar;
