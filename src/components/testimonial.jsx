import React from 'react';

import pic from '../assets/images/profile.jpg';

export default function Testimonial() {
    return (
      
<div className=" text-center py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Testimonials</h2>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-gray-600 mb-4">"I have been using this product for a few months now and I am very happy with it. It has made my life so much easier!"</p>
              <p className="font-bold text-gray-800 mb-2">Jane Doe</p>
              <p className="text-gray-600">Manager at ACME Corporation</p>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-gray-600 mb-4">"This product has exceeded my expectations. I would highly recommend it to anyone looking to improve their productivity."</p>
              <p className="font-bold text-gray-800 mb-2">John Doe</p>
              <p className="text-gray-600">Founder of Doe&apos;s Inc.</p>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-gray-600 mb-4">"I was hesitant to try this product at first, but I am glad I did. It has been a game-changer for my business."</p>
              <p className="font-bold text-gray-800 mb-2">Jane Smith</p>
              <p className="text-gray-600">CEO of Smith Enterprises</p>
            </div>
          </div>
        </div>
      </div>
    </div>


    );
}