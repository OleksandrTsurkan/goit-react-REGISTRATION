import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { authSelector } from 'store/auth/selector';

const PublickRoute = ({ children }) => {
  const isAuth = useSelector(authSelector);
  const location = useLocation();
  console.log('first', location);
  return !isAuth ? children : <Navigate to={location.state ?? '/'} />;
};

export default PublickRoute;
