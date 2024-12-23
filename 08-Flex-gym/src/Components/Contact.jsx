import React from "react";

function Contact() {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
        <form className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div className="mb-6">
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-yellow-500"
              rows="5"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              onClick={() => alert("Your Message is recorded")}
              type="submit"
              className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;