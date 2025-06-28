import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/root/Root';
import Home from './Layout/home/Home';
// import DetailsServices from './Layout/services/DetailsServices';
import Errorpage from './Layout/Errorpage/Errorpage';
import ViewServices from './Layout/viewServices/ViewServices';
import AuthProvider from './Layout/auth/AuthProvider';
import Login from './Layout/login/Login';
import Register from './Layout/register/Register';
import PrivateRoute from './Layout/auth/PrivateRoute';
import Blogs from './Layout/blogs/Blogs';
import AllServices from './Layout/allServices/AllServices';
import DetailsServices from './Layout/services/DetailsServices';
import About from './Layout/about/About';
import FAQ from './Layout/faq/FAQ';
import BlogDetails from './Layout/blogs/BlogDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,

    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/service/:id',
        element:(          <PrivateRoute>

           <ViewServices></ViewServices>
           </PrivateRoute>

           ),
        loader: () => fetch('../Allservices.json')
      },
      {
        path: '/login',
        element: <Login></Login>

      },
      {

        path: '/register',
        element: <Register></Register>


      },{
        path:'/blogs',
        element:<Blogs></Blogs>
      }
      ,{
           path: '/about',
           element:<About></About>
      },
      {
        path:'/faq',
        element:<FAQ></FAQ>
      },
      {
        path: '/blogs/:id',
        element: <BlogDetails />
      }
    ]


  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)