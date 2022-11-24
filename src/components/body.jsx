import React from 'react';
// import { render } from 'react-dom';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiOutlineWhatsApp } from 'react-icons/ai';

import Gallery from './SimpleGallery';

export default function Hero() {
  return (
  
    <div>
      <main className="bg-white px-10">
  

      <section>

        <div className="text-center py-2">
          <h2 className="text-5xl py-2 text-yellow-600 font-medium">Kelvin Boye-Doe</h2>
          <h3 className="text-2xl py-2">Hi, I&apos;m a Creative Photographer & Designer from Ghana</h3>
          <p className="text-md py-5 leading-8 text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        </div>

        <div className="text-5xl flex justify-center gap-12 py-3 ">

          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillInstagram />
          <AiOutlineWhatsApp />
          <AiFillFacebook />

        </div>

        <div className="relative bg-gradient-to-b from-yellow-500 overflow-hidden rounded-full w-80 h-80 mx-auto mt-8">

          {/* <img src={pic} alt="imageboi" /> */}

        </div>

      </section>

      <section>

        <h3 className="text-3xl py-1 px-8">
          My Services
        </h3>

        <h2 className="text-xl py-2 px-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

          <ul>
            <li>- Excepteur sint occaecat cupidatat non proident.</li>
            <li>- Duis aute irure dolor in reprehenderit.</li>
            <li>- Ask the experts.</li>
          </ul>

        </h2>

        <section>

          <h2 className="text-3xl py-1 px-8" >Here&apos;s some of my work</h2>
        
          <div>
            
            <div className="text-3xl py-1 px-8">
            <div>
        <Gallery
          galleryID="my-test-gallery"
          images={[
            {
              largeURL:
                'https://res.cloudinary.com/dcc1yy1zv/image/upload/v1669306068/cld-sample-5.jpg',
              thumbnailURL:
                'https://res.cloudinary.com/dcc1yy1zv/image/upload/v1669306068/cld-sample-5.jpg',
              width: 1875,
              height: 2500,
            },
            {
              largeURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
              thumbnailURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg',
              width: 1669,
              height: 2500,
            },
            {
              largeURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
              thumbnailURL:
                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
              width: 2500,
              height: 1666,
            },
          ]}
        />
      </div>
            </div>
          </div>

        </section>

      </section>

    
      <div className="text-center py-2">
        <h2 className="text-3xl py-2 font-medium">Want to hire me?</h2>
        <h3 className="text-1xl py-2">Send a message or reach out on any of my socials</h3>
        <h3 className="text-1xl py-2">Im always eager to work with clients</h3>
      </div>
    

    </main>
    
  </div>

  );
}