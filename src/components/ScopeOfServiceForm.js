import React, { useContext } from 'react';
import { ItineraryContext } from '../context/ItineraryContext';

const ScopeOfServiceForm = () => {
  const { itinerary, updateItinerary } = useContext(ItineraryContext);
  const { scopeOfService } = itinerary;
  const [services, setServices] = React.useState(scopeOfService || [{ service: '', details: '' }]);

  const handleChange = (index, e) => {
    const newServices = [...services];
    newServices[index][e.target.name] = e.target.value;
    setServices(newServices);
    updateItinerary('scopeOfService', newServices);
  };

  const handleAddService = () => {
    setServices([...services, { service: '', details: '' }]);
    updateItinerary('scopeOfService', [...services, { service: '', details: '' }]);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {services.map((service, index) => (
        <React.Fragment key={index}>
          <div>
            <label>Service</label>
            <input
              name="service"
              value={service.service}
              onChange={(e) => handleChange(index, e)}
              className="border p-2 w-full"
              placeholder="e.g. Accommodation"
            />
          </div>
          <div>
            <label>Details</label>
            <input
              name="details"
              value={service.details}
              onChange={(e) => handleChange(index, e)}
              className="border p-2 w-full"
              placeholder="e.g. 5-star hotel"
            />
          </div>
        </React.Fragment>
      ))}
      <div className="col-span-2">
        <button
          onClick={handleAddService}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Service
        </button>
      </div>
    </div>
  );
};

export default ScopeOfServiceForm;