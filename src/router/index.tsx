import { createBrowserRouter } from 'react-router-dom';

import MainLayout from 'layout/MainLayout';
import Home from 'pages/Home';
import ProductList from 'pages/product/List';
import ProductDetail from 'pages/product/Detail';
import MyCart from 'pages/MyCart';
import Login from 'pages/user/Login';
import AdminProductUpload from 'pages/admin/product-upload';
import NotFound from 'pages/error/NotFound';
import ProtectedRoute from './ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <ProductList /> },
      { path: 'products/:id', element: <ProductDetail /> },
      {
        path: 'cart',
        element: (
          <ProtectedRoute>
            <MyCart />
          </ProtectedRoute>
        ),
      },
      { path: 'login', element: <Login /> },
      {
        path: 'admin/upload',
        element: (
          <ProtectedRoute>
            <AdminProductUpload />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
