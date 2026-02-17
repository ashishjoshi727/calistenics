const express = require("express");
const cors = require("cors");
const exercises = require("./Data/exercises");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Exercises
app.get("/api/exercises", (req, res) => res.json(exercises));
app.get("/api/exercises/:id", (req, res) => {
  const exercise = exercises.find(e => e.id === parseInt(req.params.id));
  if (!exercise) return res.status(404).json({ error: "Exercise not found" });
  res.json(exercise);
});

// Programs
const programs = [
  { id: 1, title: "Beginner Foundation", level: "Beginner", duration: "4 Weeks", description: "...", exercises: [1,2,3] },
  { id: 2, title: "Strength Builder", level: "Intermediate", duration: "6 Weeks", description: "...", exercises: [4,5,6] },
  { id: 3, title: "Skill & Control", level: "Intermediate", duration: "8 Weeks", description: "...", exercises: [6,7,8] },
  { id: 4, title: "Advanced Athlete", level: "Advanced", duration: "10 Weeks", description: "...", exercises: [7,8,9] },
];

app.get("/api/programs", (req, res) => res.json(programs));
app.get("/api/programs/:id", (req, res) => {
  const program = programs.find(p => p.id === parseInt(req.params.id));
  if (!program) return res.status(404).json({ error: "Program not found" });
  res.json(program);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
