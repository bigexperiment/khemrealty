import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl font-bold mb-8">Contact Khem Adhikari</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Phone</h2>
          <p>
            <a href="tel:+17146797165" className="text-blue-500">
              +1 (714) 679-7165
            </a>
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Email</h2>
          <p>
            <a href="mailto:khemlal@hotmail.com" className="text-blue-500">
              khemlal@hotmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
