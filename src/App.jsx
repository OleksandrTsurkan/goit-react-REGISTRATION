import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';
import ProductsPage from './pages/ProductsPage';
import Layout from './Layout';
import { Suspense, lazy } from 'react';
import './store/store';
import UsersPage from './pages/UsersPage';
import Loader from './components/Loader';
import PrivateRoute from 'guards/PrivateRoute';
import PublickRoute from 'guards/PublickRoute';
import { Toaster } from 'react-hot-toast';


const ProductsPageDetails = lazy(() =>
  import('./pages/ProductsPage/ProductsPageDetails')
);
 
const ProfilePage = lazy(() => import('./pages/ProfilePage/Index'));
const Login = lazy(() => import('./pages/Login'));
const Registration = lazy(() => import('./pages/Registration/index'));

const App = () => { 
  return (
    <>
      <Loader />
      <Toaster />
      <Suspense fallback={'Loading.....'}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="todos" element={<TodoPage />} />
            <Route
              path="users"
              element={
                <PrivateRoute>
                  <UsersPage />
                </PrivateRoute>
              }
            />
            <Route path="products" element={<ProductsPage />} />
            <Route
              path="products/:productId"
              element={<ProductsPageDetails />}
            />
          </Route>
          {/* <Route path="/products" element={<ProductsPage />} /> */}

          <Route
            path="/login"
            element={
              // <PublickRoute>
              <Login />
              /* </PublickRoute> */
            }
          />
          <Route
            path="/registration"
            element={
              <PublickRoute>
                <Registration />
              </PublickRoute>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
