import React, { useContext } from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { ItineraryProvider, ItineraryContext } from './context/ItineraryContext';
import Tabs from './components/Tabs';
import TourOverviewForm from './components/TourOverviewForm';
import DailyActivitiesForm from './components/DailyActivitiesForm';
import HotelsForm from './components/HotelsForm';
import PaymentPlanForm from './components/PaymentPlanForm';
import FlightSummaryForm from './components/FlightSummaryForm';
import ImportantNotesForm from './components/ImportantNotesForm';
import ScopeOfServiceForm from './components/ScopeOfServiceForm';
import InclusionSummaryForm from './components/InclusionSummaryForm';
import ActivityTableForm from './components/ActivityTableForm';
import VisaDetailsForm from './components/VisaDetailsForm';
import ItineraryPDF from './components/ItineraryPDF';

const AppContent = () => {
  const { itinerary } = useContext(ItineraryContext);
  // Dynamically set destination, fallback to 'Itinerary' if not available
  const destination = itinerary.tourOverview?.destination
    ? itinerary.tourOverview.destination.trim()
    : 'Itinerary';
  // Sanitize filename: replace spaces with underscores and ensure no empty name
  const fileName = `${destination.replace(/\s+/g, '_')}_Itinerary.pdf`.trim() || 'Itinerary.pdf';
  const [previewVisible, setPreviewVisible] = React.useState(false);

  const handlePreview = () => setPreviewVisible(true);
  const handleClosePreview = () => setPreviewVisible(false);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Itinerary Builder</h1>
        <div>
          <button
            onClick={handlePreview}
            className="bg-blue-600 text-white px-4 py-2 rounded mr-2"
          >
            Preview Itinerary
          </button>
          <PDFDownloadLink document={<ItineraryPDF itinerary={itinerary} />} fileName={fileName}>
            {({ loading }) => (
              <button
                className="bg-blue-900 text-white px-4 py-2 rounded"
                disabled={loading}
              >
                {loading ? 'Generating...' : 'Download Itinerary'}
              </button>
            )}
          </PDFDownloadLink>
        </div>
      </div>
      <Tabs>
        <TourOverviewForm />
        <DailyActivitiesForm />
        <HotelsForm />
        <FlightSummaryForm />
        <ImportantNotesForm />
        <ScopeOfServiceForm />
        <InclusionSummaryForm />
        <ActivityTableForm />
        <VisaDetailsForm />
        <PaymentPlanForm />
      </Tabs>
      {previewVisible && (
        <div className="mt-4">
          <button
            onClick={handleClosePreview}
            className="bg-red-500 text-white px-4 py-2 rounded mb-2"
          >
            Close Preview
          </button>
          <PDFViewer width="100%" height="600px">
            <ItineraryPDF itinerary={itinerary} />
          </PDFViewer>
        </div>
      )}
    </div>
  );
};

const App = () => (
  <ItineraryProvider>
    <AppContent />
  </ItineraryProvider>
);

export default App;