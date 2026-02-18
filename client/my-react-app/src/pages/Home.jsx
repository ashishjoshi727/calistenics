import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Myimage from "../assets/Myimage.png";

const Home = () => {
  const [popularExercises, setPopularExercises] = useState([]);

  // Fetch exercises from backend and pick popular ones
  useEffect(() => {
    fetch("http://localhost:5000/api/exercises")
      .then((res) => res.json())
      .then((data) => {
        // Pick first 4 exercises as popular
        setPopularExercises(data.slice(0, 4));
      })
      .catch((err) => console.error("Failed to fetch exercises", err));
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      {/* HERO SECTION */}
      <section className="min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* TEXT */}
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Master Your <span className="text-green-400">Body</span> <br />
              Build Real <span className="text-green-400">Strength</span>
            </h1>

            <p className="text-gray-400 mt-6 max-w-xl">
              Gravity Gains is a calisthenics platform designed to help you
              build functional strength, muscle control, and an athletic physique
              using only your bodyweight.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                to="/programs"
                className="bg-green-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-green-300 transition"
              >
                Start Training
              </Link>

              <Link
                to="/exercises"
                className="border border-green-400 px-6 py-3 rounded-full font-semibold hover:bg-green-400 hover:text-black transition"
              >
                View Exercises
              </Link>
            </div>
          </div>

          {/* IMAGE / VISUAL */}
          <div className="hidden md:flex justify-center">
            <div className="w-80 h-80 rounded-full bg-green-400/10 flex items-center justify-center text-green-400 text-xl font-bold">
              <img
                src={Myimage}
                alt="Calisthenics Athlete"
                className="w-80 h-80 rounded-full object-cover border-4 border-green-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CALISTHENICS */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Why Calisthenics?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-green-400 mb-3">Functional Strength</h3>
              <p className="text-gray-400">
                Build real-world strength with movements your body was made for.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-green-400 mb-3">No Equipment</h3>
              <p className="text-gray-400">
                Train anywhere — home, park, or gym. Your body is enough.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-green-400 mb-3">Athletic Physique</h3>
              <p className="text-gray-400">
                Build lean muscle, balance, flexibility, and control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR EXERCISES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Exercises</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {popularExercises.map((exercise) => (
              <Link
                key={exercise.id}
                to={`/exercise/${exercise.id}`} // Navigate to ExerciseDetails page
                className="bg-zinc-900 p-6 rounded-xl text-center hover:scale-105 transition block"
              >
                <h3 className="text-lg font-semibold text-green-400">{exercise.name}</h3>
                <p className="text-gray-400 mt-2">Build strength & control</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Training Programs</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {["Beginner", "Intermediate", "Advanced"].map((level) => (
              <div key={level} className="bg-zinc-900 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-green-400 mb-3">{level}</h3>
                <p className="text-gray-400 mb-6">
                  Structured calisthenics plans designed for {level.toLowerCase()} athletes.
                </p>
                <Link to="/programs" className="text-green-400 hover:underline">
                  View Program →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Body?</h2>
        <p className="text-gray-400 mb-8">
          Start your calisthenics journey with Gravity Gains today.
        </p>
        <Link
          to="/contact"
          className="bg-green-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-green-300 transition"
        >
          Join Now
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
