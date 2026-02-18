import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("token"); 

  return user ? children : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;
