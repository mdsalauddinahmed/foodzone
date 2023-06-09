import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Login/Login";
import SignUp from "../SignUp/signUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/DashBorad/MyCart";
import AllUsers from "../Pages/DashBorad/AllUsers/AllUsers";

 

 const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'menu',
          element:<Menu></Menu>
        },
        {
          path:'order/:category',
          element:<Order></Order>
        },
        {
         path:'login',
         element:<Login></Login>
        },
        {
          path:'signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'secret',
          element:<PrivateRoute><Secret></Secret></PrivateRoute>
        }
    ]
  },
  {
    path:'dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path:'mycart',
        element:<MyCart></MyCart>
      },
      {
        path:'allUsers',
        element:<AllUsers></AllUsers>
      }
    ]
  }
]);
export default router;