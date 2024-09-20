// Component name: Layout
function Layout() {
  return (
    <div
      className="mt-12 pl-9 pr-9 my-6 w-full md:flex flex-row gap-9 items-center bg-lightGray scroll-m-32"
      id='queremos'
    >
      <div className="w-full h-auto rounded-lg shadow-md">
        <iframe
          className="w-full h-96 rounded-lg"
          src="https://www.youtube.com/embed/mvDz7n_1JvI?si=goMWWNQS8l1WYUtp&amp;controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-full h-auto">
        <h2 className="text-4xl font-bold text-primaryBlue mb-5 text-center">¿Qué queremos lograr?</h2>
        <p className="text-center font-normal text-darkText mb-5">
          En nuestro compromiso por un Cauca más seguro y próspero, tenemos una misión clara: mejorar las condiciones socioeconómicas de las regiones afectadas por los cultivos ilícitos. No se trata solo de erradicar plantas, sino de transformar vidas.
        </p>
        <h2 className="text-4xl font-bold text-primaryBlue mb-5 text-center">¿Cómo lo lograremos?</h2>
        <p className="text-center font-normal text-darkText mb-5">
          A través de una plataforma dinámica que conecte a la comunidad con las autoridades.
        </p>
        <h2 className="text-4xl font-bold text-primaryBlue mb-5 text-center">¿Qué ganamos con esto?</h2>
        <p className="text-center font-normal text-darkText">
          Primero, la seguridad de las personas. Cada reporte es un paso hacia la protección de nuestras familias, nuestros vecinos y nuestros territorios. Segundo, la confianza en nuestras instituciones. Al facilitar el acceso a datos verificables, estamos construyendo puentes entre la comunidad y las autoridades.
        </p>
      </div>
    </div>
  )
}

// Export component
export default Layout;