import React, { useContext } from 'react';
import { ItineraryContext } from '../context/ItineraryContext';

const ActivityTableForm = () => {
  const { itinerary, updateItinerary } = useContext(ItineraryContext);
  const { activityTable } = itinerary;
  const [activities, setActivities] = React.useState(activityTable || [{ city: '', activity: '', type: '', timeRequired: '' }]);

  const handleChange = (index, e) => {
    const newActivities = [...activities];
    newActivities[index][e.target.name] = e.target.value;
    setActivities(newActivities);
    updateItinerary('activityTable', newActivities);
  };

  const handleAddActivity = () => {
    setActivities([...activities, { city: '', activity: '', type: '', timeRequired: '' }]);
    updateItinerary('activityTable', [...activities, { city: '', activity: '', type: '', timeRequired: '' }]);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {activities.map((act, index) => (
        <React.Fragment key={index}>
          <div>
            <label>City</label>
            <input
              name="city"
              value={act.city}
              onChange={(e) => handleChange(index, e)}
              className="border p-2 w-full"
              placeholder="e.g. Paris"
            />
          </div>
          <div>
            <label>Activity</label>
            <input
              name="activity"
              value={act.activity}
              onChange={(e) => handleChange(index, e)}
              className="border p-2 w-full"
              placeholder="e.g. Eiffel Tower Visit"
            />
          </div>
          <div>
            <label>Type</label>
            <input
              name="type"
              value={act.type}
              onChange={(e) => handleChange(index, e)}
              className="border p-2 w-full"
              placeholder="e.g. Sightseeing"
            />
          </div>
          <div>
            <label>Time Required</label>
            <input
              name="timeRequired"
              value={act.timeRequired}
              onChange={(e) => handleChange(index, e)}
              className="border p-2 w-full"
              placeholder="e.g. 2 hours"
            />
          </div>
        </React.Fragment>
      ))}
      <div className="col-span-2">
        <button
          onClick={handleAddActivity}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Activity
        </button>
      </div>
    </div>
  );
};

export default ActivityTableForm;