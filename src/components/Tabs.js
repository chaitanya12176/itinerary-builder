import React, { useState } from 'react';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabNames = [
    'Tour Overview',
    'Daily Activities',
    'Hotels Booking',
    'Flight Summary',
    'Important Notes',
    'Scope of Service',
    'Inclusion Summary',
    'Activity Table',
    'Visa Details',
    'Payment Plan',
  
    
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-6">
      <div className="flex flex-wrap justify-start items-center bg-gray-100 p-1 rounded-t-lg border-b border-gray-200">
        {tabNames.map((name, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-2 text-sm font-medium rounded-t-lg transition-colors duration-200 focus:outline-none ${
              activeTab === index
                ? 'bg-white text-blue-600 border-b-2 border-blue-600 shadow-sm'
                : 'text-gray-600 hover:bg-gray-200 hover:text-gray-800'
            }`}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="bg-white p-6 rounded-b-lg shadow-lg border border-t-0">{children[activeTab]}</div>
    </div>
  );
};

export default Tabs;