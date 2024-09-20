// Import libraries
import { useEffect, useState } from 'react';

// Component: name=ReportForm
function ReportForm({ location, onSubmit }) {
    
    // Define states
    const [formData, setFormData] = useState({
        cropType: '',
        additionalInfo: '',
        latitude: '',
        longitude: '',
    });

    // Define the effect
    useEffect(() => {
        if (location) {
            setFormData((prevData) => ({
                ...prevData,
                latitude: location.lat.toFixed(5),
                longitude: location.lng.toFixed(5),
            }));
        }
    }, [location]);

    // Define the event handlers
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    // Render the component
    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Tipo de Cultivo Ilícito */}
            <div>
                <label htmlFor="cropType" className="block text-sm font-medium text-darkText">Tipo de Cultivo Ilícito</label>
                <select
                    name="cropType"
                    id="cropType"
                    value={formData.cropType}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-primaryBlue bg-white rounded-md shadow-sm focus:outline-none focus:ring-primaryBlue focus:border-primaryBlue sm:text-sm"
                    required
                >
                    <option value="" disabled>Selecciona el tipo de cultivo</option>
                    <option value="Coca">Coca</option>
                    <option value="Amapola">Amapola</option>
                    <option value="Marihuana">Marihuana</option>
                </select>
            </div>

            {/* Latitud */}
            <div>
                <label htmlFor="latitude" className="block text-sm font-medium text-darkText">Latitud</label>
                <input
                    type="text"
                    name="latitude"
                    id="latitude"
                    value={formData.latitude}
                    readOnly
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-700 sm:text-sm"
                    placeholder="Esperando selección en el mapa"
                />
            </div>

            {/* Longitud */}
            <div>
                <label htmlFor="longitude" className="block text-sm font-medium text-darkText">Longitud</label>
                <input
                    type="text"
                    name="longitude"
                    id="longitude"
                    value={formData.longitude}
                    readOnly
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-700 sm:text-sm"
                    placeholder="Esperando selección en el mapa"
                />
            </div>

            {/* Información Adicional */}
            <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-darkText">Información Adicional</label>
                <textarea
                    name="additionalInfo"
                    id="additionalInfo"
                    rows="4"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-primaryBlue rounded-md shadow-sm focus:ring-primaryBlue focus:border-primaryBlue sm:text-sm"
                    placeholder="Describe brevemente la situación"
                />
            </div>

            {/* Botón de Envío */}
            <button
                type="submit"
                className="w-full bg-successGreen text-white text-lg py-2 px-4 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-successGreen font-semibold transition transform hover:scale-105"
            >
                Reporte Detallado
            </button>
        </form>
    );
}

// Export the component
export default ReportForm;