import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Programs = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/programs")
      .then(res => res.json())
      .then(data => setPrograms(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <Header />
      <div className="bg-black text-white min-h-screen">
        <section className="py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Training <span className="text-green-400">Programs</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Structured calisthenics programs designed to help you progress step
            by step, no matter your level.
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map(program => (
              <div
                key={program.id}
                className="bg-zinc-900 rounded-xl p-6 hover:scale-105 transition duration-300 border border-zinc-800"
              >
                <span
                  className={`inline-block mb-4 px-3 py-1 text-sm rounded-full ${
                    program.level === "Beginner"
                      ? "bg-green-500/20 text-green-400"
                      : program.level === "Intermediate"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {program.level}
                </span>

                <h3 className="text-2xl font-semibold mb-2">{program.title}</h3>
                <p className="text-sm text-gray-400 mb-4">Duration: {program.duration}</p>
                <p className="text-gray-300 mb-6">{program.description}</p>

                <Link to={`/programs/${program.id}`}>
                  <button className="w-full bg-green-400 text-black py-2 rounded-full font-semibold hover:bg-green-300 transition">
                    View Program
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Programs;
