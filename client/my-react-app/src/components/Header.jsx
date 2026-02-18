import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Header = () => {
  return (
    <header className="bg-black text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Gravity Gains Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-2xl font-bold text-green-400">
            Gravity Gains
          </span>
        </Link>

        {/* NAV LINKS */}
        <nav className="space-x-6 hidden md:flex">
          <Link to="/" className="hover:text-green-400 transition">
            Home
          </Link>
          <Link to="/exercises" className="hover:text-green-400 transition">
            Exercises
          </Link>
          <Link to="/programs" className="hover:text-green-400 transition">
            Programs
          </Link>
          <Link to="/contact" className="hover:text-green-400 transition">
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <Link
          to="/programs"
          className="bg-green-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-green-300 transition"
        >
          Start Training
        </Link>

      </div>
    </header>
  );
};

export default Header;



// function Header(){
//   return(
//     <header>
// <div>
//   {/* logo */}
//   <Link to="/">
//   <span>Gravity Gains</span>
//   <img src={logo} alt="logo"/>
//   </Link>


// {/* nav links */}

// <nav>
//   <Link to="/">Home</Link>
// <Link to="/Exercises">Exercises</Link>
// <Link to="/Programs">Programs</Link>
//   </nav>
//    <Link
//           to="/workouts"
//           className="bg-green-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-green-300 transition"
//         >
//           Start Training
//         </Link>
// </div>
//     </header>

//   );
//  }
//  export default Header;