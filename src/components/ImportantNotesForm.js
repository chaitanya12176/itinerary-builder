import React, { useContext } from 'react';
import { ItineraryContext } from '../context/ItineraryContext';

const ImportantNotesForm = () => {
  const { itinerary, updateItinerary } = useContext(ItineraryContext);
  const { importantNotes } = itinerary;
  const [notes, setNotes] = React.useState(importantNotes || [{ point: '', details: '' }]);

  const handleChange = (index, e) => {
    const newNotes = [...notes];
    newNotes[index][e.target.name] = e.target.value;
    setNotes(newNotes);
    updateItinerary('importantNotes', newNotes);
  };

  const handleAddNote = () => {
    setNotes([...notes, { point: '', details: '' }]);
    updateItinerary('importantNotes', [...notes, { point: '', details: '' }]);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {notes.map((note, index) => (
        <React.Fragment key={index}>
          <div>
            <label>Point</label>
            <input
              name="point"
              value={note.point}
              onChange={(e) => handleChange(index, e)}
              className="border p-2 w-full"
              placeholder="e.g. Check-in time"
            />
          </div>
          <div>
            <label>Details</label>
            <input
              name="details"
              value={note.details}
              onChange={(e) => handleChange(index, e)}
              className="border p-2 w-full"
              placeholder="e.g. 2:00 PM"
            />
          </div>
        </React.Fragment>
      ))}
      <div className="col-span-2">
        <button
          onClick={handleAddNote}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Note
        </button>
      </div>
    </div>
  );
};

export default ImportantNotesForm;