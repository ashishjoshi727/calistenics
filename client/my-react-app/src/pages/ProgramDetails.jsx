import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { exerciseImages } from "../utils/exerciseImages";

const ProgramDetails = () => {
  const { id } = useParams();
  const [program, setProgram] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    // Fetch program by ID
    fetch(`http://localhost:5000/api/programs/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Program not found");
        return res.json();
      })
      .then((data) => {
        setProgram(data);

        // Fetch exercises in this program
        const exercisePromises = data.exercises.map((exId) =>
          fetch(`http://localhost:5000/api/exercises/${exId}`).then((res) => res.json())
        );

        return Promise.all(exercisePromises);
      })
      .then((exs) => {
        setExercises(exs);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return <p className="text-center text-white mt-20">Loading program...</p>;
  if (error)
    return <p className="text-center text-red-500 mt-20">{error}</p>;

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Program Info */}
        <h1 className="text-4xl font-bold mb-4">{program.title}</h1>
        <p className="text-gray-400 mb-2">Level: {program.level}</p>
        <p className="text-gray-400 mb-4">Duration: {program.duration}</p>
        <p className="text-gray-300 mb-12">{program.description}</p>

        {/* Exercises Grid */}
        <h2 className="text-2xl font-semibold mb-6">Exercises in this Program</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {exercises.map((ex) => (
            <Link key={ex.id} to={`/exercise/${ex.id}`}>
              <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 hover:scale-105 hover:shadow-lg transition duration-300 flex flex-col h-full">
                
                {/* Exercise Image */}
                <img
                  src={exerciseImages[ex.image]}
                  alt={ex.name}
                  className="rounded-lg mb-3 w-full h-36 object-cover"
                />

                {/* Name & Level */}
                <h3 className="text-lg font-semibold mb-1">{ex.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{ex.level}</p>

                {/* YouTube Video */}
                {ex.youtubeId && (
                  <div className="aspect-video rounded-xl overflow-hidden border border-zinc-800 mt-auto">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${ex.youtubeId}`}
                      title={ex.name}
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProgramDetails;
