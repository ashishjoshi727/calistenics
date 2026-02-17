import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 items-center">

        {/* BRAND */}
        <div>
          <h2 className="text-xl font-bold text-green-400 mb-2">
            Gravity Gains
          </h2>
          <p className="text-sm">
            Build strength. Control your body.  
            Calisthenics for real athletes.
          </p>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center space-x-6 text-2xl">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 transition"
          >
            <FaTwitter />
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 transition"
          >
            <FaYoutube />
          </a>
        </div>

        {/* COPYRIGHT */}
        <div className="text-sm md:text-right">
          <p>© {new Date().getFullYear()} Gravity Gains</p>
          <p>All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
