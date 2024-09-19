import { Carousel } from "flowbite-react";
const CarouselComponent = () => {
  const imgArray = [
    {source: '/images/campesino1.jpg', description: 'Campesino arando la tierra', id: 1},
    {source: '/images/granja1.jpg', description: 'Granja en medio de campo', id: 2},
    {source: '/images/planta.jpg', description: 'Mujer sosteniendo planta', id: 3},
  ]
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-[700px]">
      <Carousel>
        {
          imgArray.map(image => {
            return (
              <img src={image.source} key={image.id} alt={image.description} />
            )
          })
        }
      </Carousel>
    </div>
  )
}
export { CarouselComponent };