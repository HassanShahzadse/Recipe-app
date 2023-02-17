import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const auth = localStorage.getItem("token");
  const location = useLocation().pathname;

  return auth ? (
    children
  ) : (
    <Navigate to={`/login`} state={{ redirectForm: location }} />
  );
};

export default PrivateRoute;
