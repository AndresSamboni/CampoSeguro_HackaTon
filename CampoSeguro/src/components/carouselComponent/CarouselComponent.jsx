// Import libraries
import { Carousel } from "flowbite-react";

// Component name: CarouselComponent
function CarouselComponent() {
  const imgArray = [
    { source: '/images/campesino1.jpg', description: 'Campesino arando la tierra', id: 1 },
    { source: '/images/granja1.jpg', description: 'Granja en medio de campo', id: 2 },
    { source: '/images/planta.jpg', description: 'Mujer sosteniendo planta', id: 3 },
  ]
  return (
    <div className="h-56 sm:h-64 xl:h-[600px] 2xl:h-[700px]" id='inicio'>
      <Carousel pauseOnHover>
        {
          imgArray.map(image => {
            return (
              <img
                src={image.source}
                key={image.id}
                alt={image.description}
                className="object-cover w-full h-full"
              />
            )
          })
        }
      </Carousel>
    </div>
  )
}

// Export component
export default CarouselComponent;