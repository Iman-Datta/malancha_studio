import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Verticals from "./components/sections/Verticals";
import WhatWeDo from "./components/sections/WhatWeDo";
import Services from "./components/sections/Services";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Gallery from "./components/sections/Gallery";
import Mission from "./components/sections/Mission";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-charcoal-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatWeDo />
        <Verticals />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Mission />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
