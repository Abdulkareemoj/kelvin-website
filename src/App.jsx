import React from 'react';

import Main from './components/body';
import Contact from './components/contact';
import Footer from "./components/footer";
import Navbar from './components/navbar';
import Testimonial from './components/testimonial';

function App() {
  return (
    <div className="bg-white px-10 py-0.5">
<Navbar />
    <Main />
    <Testimonial />
    <Contact />
    <Footer />
    </div>


  );
}
export default App;