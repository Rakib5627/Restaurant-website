import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/CArt";
import PrivateRoute from "./PrivateRoute"
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    //   errorElement: <ErrorPage />,
      children: [
       {
          path: "/",
          element:<Home></Home>,
        }, 
       {
          path: "menu",
          element:<Menu></Menu>,
        }, 
       {
          path: "login",
          element:<Login></Login>,
        }, 
       {
          path: "signup",
          element:<SignUp></SignUp>,
        }, 
        {
          path: 'order/:category',
          element: <Order></Order>
        } 
      ],
    },
    {
      path: 'dashboard',
      element: <PrivateRoute> <Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'cart',
          element: <Cart></Cart>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },

        // admin routes
        {
          path: 'users',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: 'addItems',
          element: <AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path: 'manageItems',
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path: `updateItem/:id`,
          element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader: ({params}) => fetch (`http://localhost:5000/menu/${params.id}`)
        }
      ]
    }
  ]);