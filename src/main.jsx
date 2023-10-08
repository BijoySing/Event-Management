import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/root/Root';
import Home from './Layout/home/Home';
import DetailsServices from './Layout/services/DetailsServices';
import Errorpage from './Layout/Errorpage/Errorpage';
import ViewServices from './Layout/viewServices/ViewServices';

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
      path:'/service/:id',
      element:<ViewServices></ViewServices>
       loader:()=>fetch(' ')
    }
    
    ]
   
  
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)