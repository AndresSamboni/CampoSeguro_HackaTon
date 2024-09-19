// Import libraries
import { useState } from 'react';
import MapComponent from '../mapComponent/MapComponent';
import ReportForm from '../reportForm/ReportForm';

// Component: name=ReportPage
function ReportPage() {
    // Declare the states
    const [location, setLocation] = useState(null);

    // Define the event handlers
    const handleFormSubmit = (formData) => {
        if (!location) {
            alert('Por favor selecciona una ubicación en el mapa.');
            return;
        }

        const reportData = {
            ...formData,
            latitude: location.lat,
            longitude: location.lng,
            type: 'Detallado'
        };

        // Send data to server
        console.log('Reporte Detallado Enviado:', reportData);
    };
    const handleImmediateReport = (location) => {
        const reportData = {
            latitude: location.lat,
            longitude: location.lng,
            type: 'Inmediato'
        };

        // Send data to server
        console.log('Reporte Inmediato Enviado:', reportData);
    };

    // Render the component
    return (
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-full md:w-1/2">
                <h2 className="text-xl font-bold mb-4">Selecciona la ubicación en el mapa</h2>
                <MapComponent setLocation={setLocation} onImmediateReport={handleImmediateReport} />
            </div>

            <div className="w-full md:w-1/2">
                <h2 className="text-xl font-bold mb-4">Completa el reporte</h2>
                <ReportForm location={location} onSubmit={handleFormSubmit} />
            </div>
        </div>
    );
}

// Export the component
export default ReportPage;