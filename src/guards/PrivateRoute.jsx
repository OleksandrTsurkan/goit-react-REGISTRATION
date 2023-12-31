import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { authSelector } from 'store/auth/selector';

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(authSelector);
  const location = useLocation();
  // console.log('first', location);
  return isAuth ? children : <Navigate to="/login" state={location} />;
};

export default PrivateRoute;
