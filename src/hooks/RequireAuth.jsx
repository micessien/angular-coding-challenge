import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Actions
import { getUserData } from "../data/actions/auth";

const RequireAuth = ({ children }) => {
  const navigate = useNavigate();
  const currentUser = getUserData();

  useEffect(() => {
    if (!currentUser) {
      // Redirect to login page if user is not authenticated
      navigate("/signin");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  // Render the wrapped component if the user is authenticated
  return children;
};

export default RequireAuth;
