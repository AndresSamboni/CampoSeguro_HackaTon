// Component name: About
function About() {
  return (
    <div className="flex flex-col items-center bg-lightGray p-8 md:p-12 scroll-m-32" id='nosotros'>
      <div className="flex flex-col w-full max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-darkText text-center mb-6">Quiénes Somos</h1>

        <p className="font-normal mb-6 text-justify text-darkText text-base md:text-lg">
          Somos un equipo comprometido con el desarrollo de soluciones tecnológicas innovadoras para enfrentar los desafíos sociales más críticos en el Departamento del Cauca. A través de nuestra plataforma, buscamos involucrar a la ciudadanía en la lucha contra los cultivos ilícitos, permitiendo reportes seguros y anónimos que ayuden a las autoridades a combatir esta problemática de manera más efectiva. Creemos en el poder de la tecnología para generar un impacto positivo y construir comunidades más seguras y sostenibles.
        </p>

        <h2 className="text-2xl md:text-4xl font-bold text-primaryBlue mb-4">Misión:</h2>
        <p className="mb-6 text-justify font-normal text-darkText text-base md:text-lg">
          Nuestra misión es empoderar a las comunidades del Departamento del Cauca mediante el uso de tecnologías avanzadas para la identificación y reporte de cultivos ilícitos. A través de una plataforma digital que garantiza el anonimato y la seguridad de los ciudadanos, facilitamos la colaboración entre la población civil y las autoridades, promoviendo un entorno más seguro, sostenible y libre de actividades ilegales que afecten la calidad de vida y el medio ambiente de la región.
        </p>

        <h2 className="text-2xl md:text-4xl font-bold text-primaryBlue mb-4">Visión:</h2>
        <p className="font-normal text-justify mb-6 text-darkText text-base md:text-lg">
          Ser la plataforma líder en Colombia y América Latina en el uso de herramientas tecnológicas para combatir los cultivos ilícitos, fortaleciendo la cooperación ciudadana y gubernamental en la lucha contra el narcotráfico. Aspiramos a expandir nuestras soluciones para mejorar la seguridad, la justicia social y la sostenibilidad ambiental en las regiones más vulnerables, utilizando la innovación tecnológica como motor de cambio.
        </p>
      </div>
    </div>
  )
}

// Export component
export default About;