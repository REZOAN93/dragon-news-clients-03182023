import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { Authcontext } from "../../Context/AuthProvider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user,loading } = useContext(Authcontext);
  const location = useLocation();


  if (!user) {
    return (
      <Navigate state={{ from: location }} to={"/login"} replace></Navigate>
    );
  }

  return children;
};

export default PrivateRoutes;
