import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { exerciseImages } from "../utils/exerciseImages";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/exercises")
      .then((res) => res.json())
      .then((data) => {
        setExercises(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredExercises =
    filter === "All"
      ? exercises
      : exercises.filter((ex) => ex.level === filter);

  const getExerciseImage = (imageKey) => {
    if (!imageKey) return "/assets/default.jpg";
    const key = imageKey.replace(/\.[^/.]+$/, "");
    return exerciseImages[key] || "/assets/default.jpg";
  };

  return (
    <>
      <Header />

      <div className="bg-black text-white min-h-screen">
        <section className="py-16 text-center">
          <h1 className="text-4xl font-bold">
            Calisthenics <span className="text-green-400">Exercises</span>
          </h1>
        </section>

        {/* FILTER */}
        <div className="flex justify-center gap-4 mb-10">
          {["All", "Beginner", "Intermediate", "Advanced"].map((lvl) => (
            <button
              key={lvl}
              onClick={() => setFilter(lvl)}
              className={`px-4 py-2 rounded-full ${
                filter === lvl
                  ? "bg-green-400 text-black"
                  : "border border-green-400 text-green-400"
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>

        {loading && <p className="text-center">Loading...</p>}

        {!loading && (
          <div className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredExercises.map((exercise) => (
              <div
                key={exercise.id}
                onClick={() => navigate(`/exercise/${exercise.id}`)}
                className="bg-zinc-900 rounded-xl cursor-pointer hover:scale-105 transition"
              >
                <img
                  src={getExerciseImage(exercise.image)}
                  alt={exercise.name}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">
                  <span className="text-xs text-green-400">
                    {exercise.level}
                  </span>
                  <h3 className="text-lg font-semibold">
                    {exercise.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Exercises;


