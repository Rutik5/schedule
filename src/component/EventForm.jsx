import React, { useState } from "react";

export const EventForm = ({ onAddEvent, show, setShow, visible, setVisible }) => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  const handleAddEvent = () => {
    if (!title || !startDate || !endDate) {
      // Handle validation or show an error message to the user.
      return;
    }

    const newEvent = {
      title,
      start: new Date(startDate),
      end: new Date(endDate),
      description,
    };

    onAddEvent(newEvent);

    // Clear the form fields
    setTitle("");
    setStartDate("");
    setEndDate("");
    setDescription("");
  };
  const dikhraha = show ? "block" : "hidden"
  return (
    <div className={"w-screen h-screen bg-[#ffffff2a] absolute top-0 left-0 z-10 flex justify-center items-center "+dikhraha}>
      
      {visible && (
        <div className="flex flex-col bg-gray-400/50 h-[300px] w-[250px]  ">
          <label>Event Title:</label>
          <input
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Start Date:</label>
      <input
        type="datetime-local"
        placeholder="Start Date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <label>End Date:</label>
      <input
        type="datetime-local"
        placeholder="End Date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <label>Event Description:</label>
      <textarea
        placeholder="Event Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddEvent}>Add Event</button>
        </div>
      )}
      
    </div>
  );
};

export default EventForm;
