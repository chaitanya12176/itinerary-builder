import React, { useContext } from 'react';
import { ItineraryContext } from '../context/ItineraryContext';

const TourOverviewForm = () => {
  const { itinerary, updateItinerary } = useContext(ItineraryContext);
  const { tourOverview } = itinerary;

  const handleChange = (e) => {
    updateItinerary('tourOverview', { ...tourOverview, [e.target.name]: e.target.value });
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label>Client Name</label>
        <input
          name="clientName"
          value={tourOverview.clientName}
          onChange={handleChange}
          className="border p-2 w-full"
          placeholder="e.g. Harshitha"
        />
      </div>
      <div>
        <label>Destination</label>
        <input
          name="destination"
          value={tourOverview.destination}
          onChange={handleChange}
          className="border p-2 w-full"
          placeholder="e.g. USA"
        />
      </div>
      <div>
        <label>Duration</label>
        <input
          name="duration"
          value={tourOverview.duration}
          onChange={handleChange}
          className="border p-2 w-full"
          placeholder="e.g. 4 days 3 nights"
        />
      </div>
      <div>
        <label>Depart From</label>
        <input
          name="departFrom"
          value={tourOverview.departFrom}
          onChange={handleChange}
          className="border p-2 w-full"
          placeholder="e.g. Delhi"
        />
      </div>
      <div>
        <label>Departure Date</label>
        <input
          type="date"
          name="departureDate"
          value={tourOverview.departureDate}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label>Arrival Date</label>
        <input
          type="date"
          name="arrivalDate"
          value={tourOverview.arrivalDate}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label>Number of Travelers</label>
        <input
          name="numTravelers"
          value={tourOverview.numTravelers}
          onChange={handleChange}
          className="border p-2 w-full"
          placeholder="e.g. 2"
        />
      </div>
    </div>
  );
};

export default TourOverviewForm;