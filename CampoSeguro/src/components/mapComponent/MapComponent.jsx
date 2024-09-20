// Import libraries
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { useState } from 'react';
import L from 'leaflet';

// Import CSS
import 'leaflet/dist/leaflet.css';

// Define custom icon for immediate and default report
const defaultIcon = new L.Icon({
    iconUrl: '/icons/marker-icon.png',
    iconSize: [30, 30],
    iconAnchor: [15, 50],
    popupAnchor: [0, -50],
});
const redIcon = new L.Icon({
    iconUrl: '/icons/marker-icon-red.png',
    iconSize: [30, 30],
    iconAnchor: [15, 50],
    popupAnchor: [0, -50],
});

// Component: name=MapComponent
function MapComponent({ setLocation, onImmediateReport }) {

    // Declare the states
    const [position, setPosition] = useState(null);
    const [immediatePosition, setImmediatePosition] = useState(null);

    // Define the position marker
    const LocationMarker = () => {
        useMapEvents({
            click(e) {
                setPosition(e.latlng);
                setLocation(e.latlng);
            },
        });

        return (
            <>
                {position && (
                    <Marker position={position} icon={defaultIcon}>
                        <Popup>
                            Coordenadas seleccionadas: <br /> Lat: {position.lat.toFixed(5)}, Lng: {position.lng.toFixed(5)}
                        </Popup>
                    </Marker>
                )}
                {immediatePosition && (
                    <Marker position={immediatePosition} icon={redIcon}>
                        <Popup>
                            Reporte inmediato enviado. <br /> Lat: {immediatePosition.lat.toFixed(5)}, Lng: {immediatePosition.lng.toFixed(5)}
                        </Popup>
                    </Marker>
                )}
            </>
        );
    };

    // Define the handlers
    const handleImmediateReport = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                const immediateLocation = { lat: latitude, lng: longitude };
                setImmediatePosition(immediateLocation);
                setLocation(immediateLocation);
                onImmediateReport(immediateLocation);

                // Notificar al usuario
                alert('Reporte inmediato enviado exitosamente.');
            }, (error) => {
                alert('No se pudo obtener la ubicación actual.');
            });
        } else {
            alert('Geolocalización no es compatible con este navegador.');
        }
    };

    // Render the component
    return (
        <div className="flex flex-col h-full">
            <MapContainer center={[2.45, -76.6]} zoom={8} className="h-80 md:h-96 w-full rounded-lg shadow-md">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                />
                <LocationMarker />
            </MapContainer>
            <button
                onClick={handleImmediateReport}
                className="mt-4 w-full bg-ctaOrange text-white text-lg py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 font-semibold transition transform hover:scale-105"
            >
                Reporte inmediato
            </button>
        </div>
    );
}

// Render the component
export default MapComponent;