import React, { useContext } from 'react';
import { ItineraryContext } from '../context/ItineraryContext';

const HotelsForm = () => {
  const { itinerary, updateItinerary } = useContext(ItineraryContext);
  const { hotels } = itinerary;

  const addHotel = () => {
    updateItinerary('hotels', [...hotels, { name: '', city: '', checkIn: '', checkOut: '', nights: '' }]);
  };

  const removeHotel = (index) => {
    const newHotels = hotels.filter((_, i) => i !== index);
    updateItinerary('hotels', newHotels);
  };

  const handleChange = (index, e) => {
    const newHotels = [...hotels];
    newHotels[index][e.target.name] = e.target.value;
    updateItinerary('hotels', newHotels);
  };

  return (
    <div>
      {hotels.map((hotel, index) => (
        <div key={index} className="mb-4 border p-4 rounded relative">
          <button onClick={() => removeHotel(index)} className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded">Remove</button>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label>Hotel Name</label>
              <input
                name="name"
                value={hotel.name}
                onChange={(e) => handleChange(index, e)}
                className="border p-2 w-full"
                placeholder="e.g. Hilton Hotel"
              />
            </div>
            <div>
              <label>City</label>
              <input
                name="city"
                value={hotel.city}
                onChange={(e) => handleChange(index, e)}
                className="border p-2 w-full"
                placeholder="e.g. New York"
              />
            </div>
            <div>
              <label>Check-in Date</label>
              <input
                type="date"
                name="checkIn"
                value={hotel.checkIn}
                onChange={(e) => handleChange(index, e)}
                className="border p-2 w-full"
              />
            </div>
            <div>
              <label>Check-out Date</label>
              <input
                type="date"
                name="checkOut"
                value={hotel.checkOut}
                onChange={(e) => handleChange(index, e)}
                className="border p-2 w-full"
              />
            </div>
            <div>
              <label>Number of Nights</label>
              <input
                name="nights"
                value={hotel.nights}
                onChange={(e) => handleChange(index, e)}
                className="border p-2 w-full"
                placeholder="e.g. 3"
              />
            </div>
          </div>
        </div>
      ))}
      <button onClick={addHotel} className="bg-blue-900 text-white px-4 py-2 rounded">+ Add Hotel</button>
    </div>
  );
};

export default HotelsForm;