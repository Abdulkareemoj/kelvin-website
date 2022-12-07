import React from 'react';

import Main from './components/body';
import Contact from './components/contact';
import Footer from "./components/footer";
import Navbar from './components/navbar';
import Testimonial from './components/testimonial';

function App() {
  return (
    <div>
<Navbar />
    <Main />
    <Testimonial />
    <Contact />
    <Footer />
    </div>


  );
}
export default App;