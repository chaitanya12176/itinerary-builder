import React, { useContext } from 'react';
import { ItineraryContext } from '../context/ItineraryContext';

const VisaDetailsForm = () => {
  const { itinerary, updateItinerary } = useContext(ItineraryContext);
  const { visaDetails } = itinerary;

  const handleChange = (e) => {
    updateItinerary('visaDetails', { ...visaDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label>Visa Type</label>
        <input
          name="type"
          value={visaDetails.type}
          onChange={handleChange}
          className="border p-2 w-full"
          placeholder="e.g. Tourist"
        />
      </div>
      <div>
        <label>Processing Date</label>
        <input
          type="date"
          name="processingDate"
          value={visaDetails.processingDate}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label>Validity</label>
        <input
          type="date"
          name="validity"
          value={visaDetails.validity}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
    </div>
  );
};

export default VisaDetailsForm;