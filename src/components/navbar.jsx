
import { BsFillMoonStarsFill } from 'react-icons/bs';

export default function Navbar() {
    return (
        <section className=" px-10">

          
            {/* <header className="md:sticky top-0 z-10">
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
            </header> */}
     
     <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl">
            Welcome
        </h1>
        <ul className="flex items-center">
            <li><BsFillMoonStarsFill /></li>
            <li><a className="bg-yellow-500 text-white px-4 py-2 rounded-md ml-8" href="http://">Hire Me!</a></li>
            <li><a className=" bg-yellow-500 text-white px-4 py-2 rounded-md ml-8" href="http://"> Testimonials</a></li>
        </ul>
     </nav>
     
        </section>
    );
}