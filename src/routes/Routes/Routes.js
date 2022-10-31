import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import { Home } from "../../Pages";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Main />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
      ],
   },
]);
