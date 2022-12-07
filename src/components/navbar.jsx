import React from 'react';


export default function Navbar() {
    return (
        <section>
          
            <header className="md:sticky top-0 z-10">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center py-5">
                    <a href="#about" className="ml-3 text-xl">
                        Welcome
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700   flex flex-wrap items-center text-base justify-center" />
                
                    <a
                        href="#contact"
                        className="inline-flex items-center  py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                        Hire Me

                    </a> <a href="#testimonials" className="mr-5 hover:text-white">
                        Testimonials
                    </a>
                </div>
            </header>
        </section>
    );
}