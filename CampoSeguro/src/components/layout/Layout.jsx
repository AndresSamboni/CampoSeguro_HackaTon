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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto illum nihil quas temporibus? Ullam sunt doloremque aperiam aliquid iusto tenetur deleniti, autem delectus ratione aut debitis minus! Omnis, minima magni.
          Odio ratione nulla nobis nemo cumque accusamus dolor molestiae, tempore veniam iure rerum placeat possimus ut provident dolore laudantium voluptatibus similique necessitatibus optio explicabo, doloribus eos. Dolor eveniet eaque est!
          Cum molestiae, dolorum eaque exercitationem id ex? Nostrum praesentium in sequi, ipsum explicabo exercitationem, veritatis quod animi, architecto perferendis adipisci dolor ipsam? Illo accusantium magnam dolore, fuga eligendi nam laborum?
          Sit, esse quaerat pariatur enim asperiores dolorum nam. Necessitatibus eos iste inventore ipsa at, sapiente repellat iusto dolore temporibus culpa soluta? Quod quas magnam molestiae non neque, illo placeat dolorum.
          Provident numquam incidunt aspernatur, iste consequuntur quasi, nemo neque quod, tempora dolorum at sunt reprehenderit veritatis odit molestiae quas. Totam soluta optio tempore sapiente dolore aut sequi provident expedita nihil?
        </p>
      </div>
    </div>
  )
}

// Export component
export default Layout;