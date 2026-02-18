import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ExerciseDetails = () => {
  const { id } = useParams();
  const [exercise, setExercise] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/exercises/${id}`)
      .then((res) => res.json())
      .then((data) => setExercise(data));
  }, [id]);

  if (!exercise) {
    return <p className="text-center text-white">Loading...</p>;
  }

  return (
    <>
      <Header />

      <div className="bg-black text-white min-h-screen px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">
            {exercise.name}
          </h1>

          <p className="text-gray-400 mb-8">
            {exercise.description}
          </p>

          {/* YOUTUBE VIDEO */}
          {exercise.youtubeId && (
            <div className="aspect-video rounded-xl overflow-hidden border border-zinc-800">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${exercise.youtubeId}`}
                title={exercise.name}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ExerciseDetails;
