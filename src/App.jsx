import React from 'react';

import Main from './components/body';
import Contact from './components/contact';
import Navbar from './components/navbar';
import Testimonial from './components/testimonial';

function App() {
  return (
    <div>
    <section className="bg-white px-10">
      <Navbar />
    </section>
    <Main />
    <Testimonial />
    <Contact />
    </div>


  );
}

export default App;
