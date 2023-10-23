import FormLogin from '../../components/Forms/FormLogin';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../store/auth/thunks';
import toast from 'react-hot-toast';

const Login = () => {
  const dispatch = useDispatch();
  //   const isAuth = useSelector(authSelector);
  //   const navigate = useNavigate();
  //   useEffect(() => {
  //     if (isAuth) {
  //       toast.success('welcome', { duration: 3300, position: 'top-right' });
  //       navigate('/');
  //     }
  //   }, [isAuth, navigate]);

  const login = async body => {
    try {
      await dispatch(loginThunk(body)).unwrap();
      toast.success('welcome', { duration: 3300, position: 'top-right' });
    } catch (error) {
      toast.error('Error', { duration: 3300, position: 'top-right' });
    }
  };

  return <FormLogin login={login} />;
};

export default Login;
