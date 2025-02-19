import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../components/ErrorPage";
import Home from "../Pages/Home";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/',
            element:<Home></Home>
        },
      ]
    },
    
  ]);
  export default router;