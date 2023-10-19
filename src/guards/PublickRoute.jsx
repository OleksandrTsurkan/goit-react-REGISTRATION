
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelector } from 'store/auth/selector';

const PublickRoute = ({ children }) => {
  const isAuth = useSelector(authSelector);
  return !isAuth? children : <Navigate to='/login'/>
};

export default PublickRoute;
