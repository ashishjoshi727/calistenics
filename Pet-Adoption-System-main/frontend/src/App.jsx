import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Auth from './Components/Auth/Auth';
import Services from './Components/Services/Services';
import AdminLogin from './Components/AdminPanel/AdminLogin';
import Pets from './Components/Pets/Pets';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/auth" element={<Auth />} />
      <Route path="/admin" element={<AdminLogin />} />

      {/* Main pages */}
      <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
      <Route path="/services" element={<><Navbar /><Services /><Footer /></>} />
      <Route path="/pets" element={<><Navbar /><Pets /><Footer /></>} />
      <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
    </Routes>
  );
}

export default App;
