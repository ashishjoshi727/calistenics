import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/Footer";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const Contact = () => {
  return (
    <div>
      <Header></Header>

    <div className="bg-black text-white min-h-screen">

      {/* HEADER */}
      <section className="py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Contact <span className="text-green-400">Us</span>
        </h1>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Have questions about training, programs, or collaborations?
          Reach out to Gravity Gains.
        </p>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-12">

        {/* CONTACT INFO */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-green-400">
            Get in Touch
          </h2>
          <p className="text-gray-400 mb-6">
            We’d love to hear from you. Whether you’re a beginner or an advanced
            athlete, feel free to connect.
          </p>

          <div className="space-y-4 text-gray-300">
            <p>📧 Email: <span className="text-white">gravitygains@gmail.com</span></p>
            <p>📍 Location: India</p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 text-2xl mt-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* CONTACT FORM */}
        <form className="bg-zinc-900 p-8 rounded-xl space-y-6">
          <div>
            <label className="block mb-2 text-sm">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3 rounded bg-black border border-zinc-700 focus:outline-none focus:border-green-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-3 rounded bg-black border border-zinc-700 focus:outline-none focus:border-green-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Message</label>
            <textarea
              rows="4"
              placeholder="Your message"
              className="w-full p-3 rounded bg-black border border-zinc-700 focus:outline-none focus:border-green-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-400 text-black py-3 rounded-full font-semibold hover:bg-green-300 transition"
          >
            Send Message
          </button>
        </form>

      </section>

    </div>
 

<Footer></Footer>
</div>
  )
}
export default Contact;