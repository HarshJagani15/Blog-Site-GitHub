
import { Navigate, redirect, useNavigate } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import { useSelector } from "react-redux";



export const PrivateRoute = ({ children }) => {


  const isLogin = useSelector((state) => state?.isLogin?.state)

  if (isLogin) {
    return <Navigate to="/" />;
  }

  // Otherwise, allow access to the children (login/register pages)
  return children;
}