import { useState } from 'react'
import Home from './pages/home';
import{BrowserRouter,Routes,Route} from "react-router-dom";
import Exercises from './pages/exercises';
import Programs from './pages/programs';
import Contact from './pages/contact';
import ExercisesDetails from "./pages/ExercisesDetails";
import ProgramDetails from "./pages/ProgramDetails";

function app(){
  return(
     <BrowserRouter>
     <Routes>

      
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Exercises" element={<Exercises/>}></Route>     
     <Route path="/Programs" element={<Programs/>}></Route>
     <Route path="/Contact" element={<Contact/>}></Route>
     <Route path="/exercise/:id" element={<ExercisesDetails />} />
     <Route path="/programs/:id" element={<ProgramDetails />} /> 
     </Routes>
     
     </BrowserRouter>
  )
}
export default app;