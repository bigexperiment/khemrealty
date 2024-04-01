import React from "react";

const App = () => {
  return (
    <div className="px-1">
      <header
        className="bg-cover bg-center h-screen relative"
        style={{
          backgroundImage: "url('./house.jpeg')",
        }}
      >
        {/* Add overlay with semi-transparent background */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white-500 to-purple-500 opacity-50"></div>
        <nav className="container mx-auto py-4 flex justify-between items-center relative z-10">
          <div className="flex flex-col items-start">
            <a
              href="/"
              className="flex items-center text-white text-2xl font-bold"
            >
              <span className="bg-white px-3 py-1 rounded-lg mr-2 font-serif text-3xl text-gray-800 shadow-md">
                Khem Realty
              </span>
            </a>
            <span
              className="text-white text-lg mt-1"
              style={{ fontFamily: "fantasy" }}
            >
              Your Trustworthy Realtor
            </span>
          </div>
          <ul className="flex space-x-4 hidden md:flex">
            <li>
              <a href="/" className="text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/listings" className="text-white">
                Listings
              </a>
            </li>
            <li>
              <a href="/about" className="text-white">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="bg-gradient-to-r from-white-500 to-purple-500 opacity-75 h-full flex flex-col justify-center items-center text-white relative z-10">
          <h1 className="text-5xl font-bold mb-4">Find Your Dream Home</h1>
          <p className="text-xl mb-8">
            Discover the perfect property with Khem Adhikari Real Estate
          </p>
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
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Listings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Add featured listings */}
          <div className="bg-white shadow-lg rounded-lg">
            <img
              src="https://example.com/listing1.jpg"
              alt="Listing 1"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Luxury Villa</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-blue-500 font-bold">$1,500,000</span>
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                  View Details
                </button>
              </div>
            </div>
          </div>
          {/* Add more featured listings */}
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            About Khem Adhikari
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <img
              src="https://example.com/khem-adhikari.jpg"
              alt="Khem Adhikari"
              className="w-64 h-64 rounded-full mb-4 md:mb-0 md:mr-8"
            />
            <div>
              <p className="text-lg mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                at mauris vel velit bibendum tempus. Sed euismod velit vel
                bibendum malesuada. Praesent in eros non velit aliquam cursus.
              </p>
              <p className="text-lg">
                Phasellus sed vestibulum quam. Nulla facilisi. Duis in enim vel
                enim pharetra blandit. Sed vehicula velit vel bibendum
                malesuada.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Add testimonials */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-lg mb-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              at mauris vel velit bibendum tempus."
            </p>
            <p className="font-bold">- John Doe</p>
          </div>
          {/* Add more testimonials */}
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <iframe
          src="https://tally.so/r/wg0pJK"
          width="100%"
          height="800px"
          frameBorder="0"
          style={{ border: "none" }}
        ></iframe>
      </section>

      <section className="bg-blue-500 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Ready to Find Your Dream Home?
          </h2>
          <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded-full">
            Contact Khem Adhikari
          </button>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Contact Information</h3>
            <p>
              <a href="tel:+17146797165" className="text-white-400">
                +1 (714)679-7165
              </a>
            </p>
            <p>
              <a href="mailto:khemlal@hotmail.com" className="text-blue-400">
                khemlal@hotmail.com
              </a>
            </p>
            <div className="mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mr-4"
              >
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mr-4"
              >
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul>
              <li>
                <a href="/listings" className="text-blue-400">
                  Listings
                </a>
              </li>
              <li>
                <a href="/about" className="text-blue-400">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">Legal</h3>
            <p>Khem Adhikari</p>
            <span
              className="text-white text-xs mt-1"
              style={{ fontFamily: "fantasy" }}
            >
              Your Trustworthy Realtor
            </span>

            <p>DRE#02187254</p>
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
