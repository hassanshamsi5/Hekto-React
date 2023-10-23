import { Outlet, Navigate } from "react-router-dom";

const AnonymousRoute = () => {
  const isLoggedIn = true;
  return isLoggedIn 
    ? <Navigate to="/login" replace />
    : <Outlet />;
};

export default AnonymousRoute;
