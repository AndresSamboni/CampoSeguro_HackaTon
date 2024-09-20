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
        <div className="p-4 md:p-8 bg-lightGray my-6 scroll-m-32" id="reportarMapa">
            {/* Contenedor Título y Descripción */}
            <div className="w-full text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-extrabold text-primaryBlue">
                    Ayúdanos a Proteger Nuestro Territorio: Reporta Cultivos Ilícitos
                </h1>
                <p className="text-lg md:text-xl text-darkText mt-4 max-w-2xl mx-auto">
                    Selecciona una ubicación en el mapa y completa el formulario para hacer un reporte detallado. Tu colaboración es fundamental para mantener a nuestra comunidad segura y libre de narcotráfico. También puedes optar por hacer un reporte inmediato simplemente seleccionando la ubicación. ¡Gracias por tu compromiso con la seguridad de nuestro entorno!
                </p>
            </div>

            {/* Contenedor del Mapa y Formulario */}
            <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-8">
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
        </div>
    );
}

// Export the component
export default ReportPage;