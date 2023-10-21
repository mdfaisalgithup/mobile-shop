import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainRoot from './MainRoot/MainRoot.jsx';

import Home from './Pages/Home/Home.jsx';
import Shop from './Pages/Shop/Shop';
import MyCard from './Pages/MyCard/MyCard';
import Login from './Pages/Login/Login';
import AddProduct from './Pages/AddProduct/AddProduct';
import Registration from './Pages/Registration/Registration';
import ShareProvider from './ShareProvider/ShareProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import BrandName from './Pages/BrandName/BrandName';
import SinglePage from './Pages/SinglePage/SinglePage';
import Update from './Pages/Update/Update';
import ErrorPage from './Error/ErrorPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot></MainRoot>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/addprouct')
       },
       {
        path: "/shop",
        element: <Shop></Shop>
       },
       {
        path: "/mycard",
        element: <PrivateRoute><MyCard></MyCard></PrivateRoute> ,
        loader: () => fetch('http://localhost:5000/mycardall')
       },
       {
        path: "/login",
        element: <Login></Login>
       },

       {
        path: "/registration",
        element: <Registration></Registration>
       },


       {
        path: "/addproduct",
        element: <PrivateRoute> <AddProduct></AddProduct></PrivateRoute>
       },
       {
        path: "/brand/:id",
        element: <PrivateRoute><BrandName></BrandName></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/brand/${params.id}`)
       },
       {
        path: "/singles/:id",
        element: <PrivateRoute><SinglePage></SinglePage></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/singles/${params.id}`)
       },
       {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({params}) => fetch(`http://localhost:5000/update/${params.id}`)
       }
      
  
  ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShareProvider>
      <RouterProvider router={router} />
    </ShareProvider>
  
  </React.StrictMode>,
)
