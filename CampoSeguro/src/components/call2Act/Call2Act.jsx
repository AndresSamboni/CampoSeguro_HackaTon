// Component name: Call2Act
function Call2Act() {

    // Render component
    return (
        <div className="my-6">
            {/* <div className="bg-primaryBlue text-white py-20 px-6 text-center"> */}
            <div className="bg-successGreen text-darkText pt-20 pb-5 px-6 text-center">
                {/* Contenedor Principal */}
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-extrabold mb-6">
                        ¡Protejamos Nuestra Tierra!
                    </h2>
                    <p className="text-lg mb-6">
                        Si conoces la ubicación de cultivos ilícitos en tu comunidad, tu reporte anónimo puede marcar la diferencia. Contribuyamos a un Cauca libre de narcotráfico y más seguro para nuestras familias.
                    </p>
                    <p className="text-md font-semibold mb-8">
                        ¡Es rápido, anónimo y seguro! Haz clic abajo para enviar tu reporte y proteger a tu comunidad.
                    </p>

                    {/* Botón de Llamado a la Acción */}
                    <a href="#reportarMapa">
                        <button className="bg-ctaOrange text-white hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            Contribuye a un Cauca Seguro
                        </button>
                    </a>
                </div>
            </div>
            {/* Imagen ilustrativa opcional */}
            <div className="mt-0">
                <img
                    src="/logo/banner.jpg"
                    alt="Logo + Eslogan"
                    className="w-full h-auto shadow-lg"
                />
            </div>
        </div>
    );
}

// Export component
export default Call2Act;
