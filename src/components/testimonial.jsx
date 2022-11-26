
import pic from '../assets/images/profile.jpg';

export default function Testimonial() {
    return (
      

<section className="mb-32 text-gray-800 text-center">
        <div id="carouselExampleCaptions" className="carousel slide relative carousel-dark" data-bs-ride="carousel">
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full text-center">
            <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
            &quot;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
              numquam iure provident voluptate esse quasi, voluptas nostrum quisquam!&quot;
            </p>
            <div className="mt-12 mb-6 flex justify-center">
              <img
                src= {pic}
                className="rounded-full w-24 h-24 shadow-lg"
                alt="smaple"
                width={24}
                height={24}
              />
            </div>
            <p className="text-gray-500">- Anna Morian</p>
          </div>
          <div className="carousel-item relative float-left w-full text-center">
            <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
            &quot;Neque cupiditate assumenda in maiores repudiandae mollitia adipisci maiores
              repudiandae mollitia consectetur adipisicing architecto elit sed adipiscing
              elit.&quot;
            </p>
            <div className="mt-12 mb-6 flex justify-center">
              <img
                src={pic}
                className="rounded-full w-24 h-24 shadow-lg"
                alt="smaple"
              />
            </div>
            <p className="text-gray-500">- Teresa May</p>
          </div>
          <div className="carousel-item relative float-left w-full text-center">
            <p className="text-xl italic mx-auto text-gray-700 max-w-4xl">
              &quot;Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur est laborum neque cupiditate assumenda in
              maiores.&quot;
            </p>
            <div className="mt-12 mb-6 flex justify-center">
              <img
                src={pic}
                className="rounded-full w-24 h-24 shadow-lg"
                alt="smaple"
              />
            </div>
            <p className="text-gray-500">- Kate Allise</p>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </section> 
    );
}