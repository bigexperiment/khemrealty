import React from "react";

const App = () => {
  return (
    <div>
      <header
        className="bg-cover bg-center h-screen"
        style={{
          backgroundImage: "url('https://example.com/home-background.jpg')",
        }}
      >
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 opacity-75 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold mb-4">Khem Adhikari Real Estate</h1>
          <p className="text-xl mb-8">Find Your Dream Home Today</p>
          <div>
            <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded-full mr-4">
              See Listings
            </button>
            <button className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded-full">
              Contact Me
            </button>
          </div>
        </div>
      </header>

      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Active Listings</h2>
        <div className="carousel">
          {/* Add carousel component for displaying active listings */}
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Contact Information</h3>
            <p>
              <a href="tel:+1234567890" className="text-blue-400">
                +1 (234) 567-890
              </a>
            </p>
            <p>
              <a
                href="mailto:khem.adhikari@example.com"
                className="text-blue-400"
              >
                khem.adhikari@example.com
              </a>
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Contact Form</h3>
            {/* Add contact form */}
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">Legal</h3>
            <p>Real Estate License: ABC123</p>
            <p>
              <a href="/privacy-policy" className="text-blue-400">
                Privacy Policy
              </a>
            </p>
            <p>
              <a href="/terms-and-conditions" className="text-blue-400">
                Terms and Conditions
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
