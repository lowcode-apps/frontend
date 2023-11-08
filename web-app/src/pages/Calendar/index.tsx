import React, { useState } from "react";
import {Calendar as BigCalendar, momentLocalizer  } from "react-big-calendar";
import moment from "moment";
import {Dialog,TextField,Button} from "@mui/material";
import "./index.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import BasicTimePicker from "./TimePicker";
 
const localizer=momentLocalizer(moment);
interface UpdatedEvents {
    title: string;
    start: string;
    end: string;
    desc: string;
}[]
const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [desc, setDesc] = useState("");
  const [openSlot, setOpenSlot] = useState(false);
  const [openEvent, setOpenEvent] = useState(false);
  const [clickedEvent, setClickedEvent] = useState({});

  const handleClose = () => {
    setOpenEvent(false);
    setOpenSlot(false);
  };

  const handleSlotSelected = (slotInfo:any) => {
    setTitle("");
    setDesc("");
    setStart(slotInfo.start);
    setEnd(slotInfo.end);
    setOpenSlot(true);
  };

  const handleEventSelected = (event:any) => {
    setClickedEvent(event);
    setStart(event.start);
    setEnd(event.end);
    setTitle(event.title);
    setDesc(event.desc);
    setOpenEvent(true);
  };

  const setNewAppointment = () => {
    const appointment = { title, start, end, desc };
    const updatedEvents:any = [...events, appointment];
    setEvents(updatedEvents);
  };

  const updateEvent = () => {
    const index = events.findIndex((event) => event === clickedEvent);
    const updatedEvent:any = [...events];
    updatedEvent[index].title = title;
    updatedEvent[index].desc = desc;
    updatedEvent[index].start = start;
    updatedEvent[index].end = end;
    setEvents(updatedEvent);
  };

  const deleteEvent = () => {
    const updatedEvents = events.filter(
      (event:any) => event.start !== start
    );
    setEvents(updatedEvents);
  };

  const eventActions = [
    <Button
      color="secondary"
      onClick={() => {
        deleteEvent();
        handleClose();
      }}
    >
      Delete
    </Button>,
    <Button
      color="primary"
      onClick={() => {
        updateEvent();
        handleClose();
      }}
    >
      Confirm Edit
    </Button>,
  ];

  const appointmentActions = [
    <Button color="secondary" onClick={handleClose}>
      Cancel
    </Button>,
    <Button
      color="primary"
      onClick={() => {
        setNewAppointment();
        handleClose();
      }}
    >
      Submit
    </Button>,
  ];

  return (
    <div id="Calendar">
      <BigCalendar
      localizer={localizer}
        events={events}
        views={["month", "week", "day", "agenda"]}
        timeslots={2}
        defaultView="month"
        defaultDate={new Date()}
        selectable={true}
        onSelectEvent={(event:any) => handleEventSelected(event)}
        onSelectSlot={(slotInfo:any) => handleSlotSelected(slotInfo)}
      />

      <Dialog
        title={`Book an appointment on ${moment(start).format(
          "MMMM Do YYYY"
        )}`}
        open={openSlot}
        onClose={handleClose}
      >
        <TextField
          label="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <TextField
          label="Description"
          onChange={(e) => setDesc(e.target.value)}
        />
          <BasicTimePicker
        //   format="ampm"
        label="Start Time"
        minutesStep={5}
        //   value={start}
          onChange={(date:any) => setStart(date)}
        />
          <BasicTimePicker
        //   format="ampm"
        label="End Time"
        minutesStep={5}
        // value={end}
        onChange={(date) => setEnd(date)}
        />
        {/* <TimePicker
          format="ampm"
          label="Start Time"
          minutesStep={5}
          value={start}
          onChange={(date) => setStart(date)}
        /> */}
        {/* <TimePicker
          format="ampm"
          label="End Time"
          minutesStep={5}
          value={end}
          onChange={(date) => setEnd(date)}
        /> */}
        <div>
          {appointmentActions}
        </div>
      </Dialog>

      <Dialog
        title={`View/Edit Appointment of ${moment(start).format(
          "MMMM Do YYYY"
        )}`}
        open={openEvent}
        onClose={handleClose}
      >
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <TextField
          label="Description"
          multiline
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      
         <BasicTimePicker
        //   format="ampm"
        label="Start Time"
        minutesStep={5}
        //   value={start}
          onChange={(date:any) => setStart(date)}
        />
        <BasicTimePicker
        //   format="ampm"
          label="End Time"
          minutesStep={5}
        //   value={end}
          onChange={(date:any) => setEnd(date)}
        />
        <div>
          {eventActions}
        </div>
      </Dialog>
    </div>
  );
};

export default Calendar;
