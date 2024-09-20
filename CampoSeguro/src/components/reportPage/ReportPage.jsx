// Import libraries
import { useState } from 'react';
import MapComponent from '../mapComponent/MapComponent';
import ReportForm from '../reportForm/ReportForm';
import axios from 'axios'

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

        // Enviar datos al servidor
        axios.post('/notification', reportData)
        alert('Reporte detallado enviado exitosamente.');
    };
    const handleImmediateReport = (location) => {
        const reportData = {
            latitude: location.lat,
            longitude: location.lng,
            type: 'Inmediato'
        };

        // Enviar datos al servidor
        axios.post('/notification', reportData)
        alert('Reporte inmediato enviado exitosamente.');
    };

    // Render the component
    return (
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 p-4 md:p-8 bg-lightGray my-6" id='reportarMapa'>
            {/* Sección del Mapa */}
            <div className="w-full md:w-1/2 bg-white p-4 md:p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-primaryBlue">Selecciona la ubicación en el mapa</h2>
                <MapComponent setLocation={setLocation} onImmediateReport={handleImmediateReport} />
            </div>

            {/* Sección del Formulario */}
            <div className="w-full md:w-1/2 bg-white p-4 md:p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-primaryBlue">Completa el reporte</h2>
                <ReportForm location={location} onSubmit={handleFormSubmit} />
            </div>
        </div>
    );
}

// Export the component
export default ReportPage;