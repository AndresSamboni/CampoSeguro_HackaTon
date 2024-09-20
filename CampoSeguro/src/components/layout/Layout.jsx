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
        <p className="text-center font-normal text-darkText">
          Queremos mejorar las condiciones socio económicas de las regiones afectadas por los cultivos ilícitos, facilitando a las autoridades obtener información precisa y en tiempo real a través de nuestra plataforma garantizándola seguridad  de las personas y en este caso particular del reto es mediante la creación de un formulario de reportes.
        </p>
      </div>
    </div>
  )
}

// Export component
export default Layout;