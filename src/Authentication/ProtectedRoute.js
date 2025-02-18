
import { Navigate, redirect, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


export const ProtectedRoute = ({ children }) => {

  const isLogin = useSelector((state) => state.isLogin.state)
  const location = useLocation();
  // const isLogin = obj.isLogin;

  // console.log(isLogin)
  // const navigate = useNavigate();

  if (!isLogin) {
    return <Navigate to="/Login" />;
  }

  // Otherwise, allow access to protected content
  return children;
}