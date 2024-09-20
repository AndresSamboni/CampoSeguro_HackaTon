// Import libraries if necessary
// import { useNavigate } from 'react-router-dom';

function Call2Act() {
    // const navigate = useNavigate();

    // Function to navigate to report section
    const goToReportSection = () => {
        console.log('Redirigiendo a la sección de reportes...');
        // navigate('/reportar');
    };

    return (
        <div className="bg-green-800 text-white py-12 px-6 text-center">
            {/* Contenedor Principal */}
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-extrabold mb-4">
                    ¡Protejamos Nuestra Tierra!
                </h2>
                <p className="text-lg mb-6">
                    Si conoces la ubicación de cultivos ilícitos en tu comunidad, tu reporte anónimo puede marcar la diferencia. Contribuyamos a un Cauca libre de narcotráfico y más seguro para nuestras familias.
                </p>
                <p className="text-md font-semibold mb-8">
                    ¡Es rápido, anónimo y seguro! Haz clic abajo para enviar tu reporte y proteger a tu comunidad.
                </p>

                {/* Botón de Llamado a la Acción */}
                <button
                    onClick={goToReportSection}
                    className="bg-yellow-400 text-black hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Reportar Cultivos Ilícitos
                </button>

                {/* Imagen ilustrativa opcional */}
                <div className="mt-8">
                    <img
                        src="/path/to/farmer-image.jpg"
                        alt="Campesino trabajando en el campo"
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    );
}

export default Call2Act;
