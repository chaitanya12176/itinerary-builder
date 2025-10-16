import React, { createContext, useState } from 'react';

export const ItineraryContext = createContext();

const initialItinerary = {
  tourOverview: {},
  dailyActivities: [],
  flightSummary: [],
  hotels: [],
  importantNotes: [],
  scopeOfService: [],
  inclusionSummary: [],
  activityTable: [],
  paymentPlan: { installments: [] },
  visaDetails: {},
  termsAndConditions: '',
  inclusions: '',
  exclusions: '',
};

export const ItineraryProvider = ({ children }) => {
  const [itinerary, setItinerary] = useState(initialItinerary);

  const updateItinerary = (section, data) => {
    setItinerary((prev) => ({ ...prev, [section]: data }));
  };

  return (
    <ItineraryContext.Provider value={{ itinerary, updateItinerary }}>
      {children}
    </ItineraryContext.Provider>
  );
};