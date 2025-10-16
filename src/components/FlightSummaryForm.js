import React, { useContext } from 'react';
import { ItineraryContext } from '../context/ItineraryContext';

const FlightSummaryForm = () => {
  const { itinerary, updateItinerary } = useContext(ItineraryContext);
  const { flightSummary } = itinerary;
  const [flights, setFlights] = React.useState(flightSummary || [{ date: '', description: '' }]);

  const handleChange = (index, e) => {
    const newFlights = [...flights];
    newFlights[index][e.target.name] = e.target.value;
    setFlights(newFlights);
    updateItinerary('flightSummary', newFlights);
  };

  const handleAddFlight = () => {
    setFlights([...flights, { date: '', description: '' }]);
    updateItinerary('flightSummary', [...flights, { date: '', description: '' }]);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {flights.map((flight, index) => (
        <React.Fragment key={index}>
          <div>
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={flight.date}
              onChange={(e) => handleChange(index, e)}
              className="border p-2 w-full"
              placeholder="e.g. 2025-10-16"
            />
          </div>
          <div>
            <label>Description</label>
            <input
              name="description"
              value={flight.description}
              onChange={(e) => handleChange(index, e)}
              className="border p-2 w-full"
              placeholder="e.g. Flight to New York"
            />
          </div>
        </React.Fragment>
      ))}
      <div className="col-span-2">
        <button
          onClick={handleAddFlight}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Flight
        </button>
      </div>
    </div>
  );
};

export default FlightSummaryForm;