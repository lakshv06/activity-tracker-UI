import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import contexts from "../context/common_context";

function ProtectedRoute() {
  const { isSessionActive } = useContext(contexts.SessionActiveContext);

  return isSessionActive ? <Outlet /> : <Navigate to="/no-match" replace />;
}

export default ProtectedRoute;
