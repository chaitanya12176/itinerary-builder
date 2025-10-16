import React, { useContext } from 'react';
import { ItineraryContext } from '../context/ItineraryContext';

const InclusionSummaryForm = () => {
  const { itinerary, updateItinerary } = useContext(ItineraryContext);
  const { inclusionSummary } = itinerary;
  const [inclusions, setInclusions] = React.useState(inclusionSummary || [{ category: '', count: '', details: '', status: '' }]);

  const handleChange = (index, e) => {
    const newInclusions = [...inclusions];
    newInclusions[index][e.target.name] = e.target.value;
    setInclusions(newInclusions);
    updateItinerary('inclusionSummary', newInclusions);
  };

  const handleAddInclusion = () => {
    setInclusions([...inclusions, { category: '', count: '', details: '', status: '' }]);
    updateItinerary('inclusionSummary', [...inclusions, { category: '', count: '', details: '', status: '' }]);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {inclusions.map((inc, index) => (
        <React.Fragment key={index}>
          <div>
            <label>Category</label>
            <input
              name="category"
              value={inc.category}
              onChange={(e) => handleChange(index, e)}
              className="border p-2 w-full"
              placeholder="e.g. Meals"
            />
          </div>
          <div>
            <label>Count</label>
            <input
              name="count"
              value={inc.count}
              onChange={(e) => handleChange(index, e)}
              className="border p-2 w-full"
              placeholder="e.g. 3"
            />
          </div>
          <div>
            <label>Details</label>
            <input
              name="details"
              value={inc.details}
              onChange={(e) => handleChange(index, e)}
              className="border p-2 w-full"
              placeholder="e.g. Breakfast included"
            />
          </div>
          <div>
            <label>Status</label>
            <input
              name="status"
              value={inc.status}
              onChange={(e) => handleChange(index, e)}
              className="border p-2 w-full"
              placeholder="e.g. Confirmed"
            />
          </div>
        </React.Fragment>
      ))}
      <div className="col-span-2">
        <button
          onClick={handleAddInclusion}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Inclusion
        </button>
      </div>
    </div>
  );
};

export default InclusionSummaryForm;