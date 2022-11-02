import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import { Checkout, Home, Login, Orders, Register } from "../../Pages";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Main />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/login",
            element: <Login />,
         },
         {
            path: "/register",
            element: <Register />,
         },
         {
            path: "/register",
            element: <Register />,
         },
         {
            path: "/checkout/:id",
            element: <Checkout />,
            loader: async ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
         },
         {
            path: "/orders",
            element: <Orders />,
         },
      ],
   },
]);
