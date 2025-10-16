import React, { useContext } from 'react';
import { ItineraryContext } from '../context/ItineraryContext';

const DailyActivitiesForm = () => {
  const { itinerary, updateItinerary } = useContext(ItineraryContext);
  const { dailyActivities } = itinerary;

  const addDay = () => {
    updateItinerary('dailyActivities', [
      ...dailyActivities,
      { date: '', title: '', morning: '', afternoon: '', evening: '', transport: '' }
    ]);
  };

  const removeDay = (index) => {
    const newDays = dailyActivities.filter((_, i) => i !== index);
    updateItinerary('dailyActivities', newDays);
  };

  const handleChange = (index, e) => {
    const newDays = [...dailyActivities];
    newDays[index][e.target.name] = e.target.value;
    updateItinerary('dailyActivities', newDays);
  };

  return (
    <div>
      {dailyActivities.map((day, index) => (
        <div key={index} className="mb-4 border p-4 rounded relative">
          <button onClick={() => removeDay(index)} className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded">Remove</button>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label>Date</label>
              <input
                type="date"
                name="date"
                value={day.date}
                onChange={(e) => handleChange(index, e)}
                className="border p-2 w-full"
              />
            </div>
            <div>
              <label>Day Title</label>
              <input
                name="title"
                value={day.title}
                onChange={(e) => handleChange(index, e)}
                className="border p-2 w-full"
                placeholder="e.g. Arrival Day"
              />
            </div>
          </div>
          <div>
            <label>Morning Activities</label>
            <textarea
              name="morning"
              value={day.morning}
              onChange={(e) => handleChange(index, e)}
              className="border p-2 w-full"
              rows="2"
              placeholder="e.g. Flight to USA"
            />
          </div>
          <div>
            <label>Afternoon Activities</label>
            <textarea
              name="afternoon"
              value={day.afternoon}
              onChange={(e) => handleChange(index, e)}
              className="border p-2 w-full"
              rows="2"
              placeholder="e.g. Hotel Check-in"
            />
          </div>
          <div>
            <label>Evening Activities</label>
            <textarea
              name="evening"
              value={day.evening}
              onChange={(e) => handleChange(index, e)}
              className="border p-2 w-full"
              rows="2"
              placeholder="e.g. City Tour"
            />
          </div>
          <div>
            <label>Transport / Flights</label>
            <input
              type="text"
              name="transport"
              value={day.transport || ''}
              onChange={(e) => handleChange(index, e)}
              className="border p-2 w-full"
              placeholder="e.g. Flight or Taxi"
            />
          </div>
        </div>
      ))}
      <button onClick={addDay} className="bg-blue-900 text-white px-4 py-2 rounded">+ Add Day</button>
    </div>
  );
};

export default DailyActivitiesForm;