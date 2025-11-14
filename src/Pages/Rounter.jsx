// import { createBrowserRouter } from "react-router";
// import Root from "./Root";
// import Vlog from "./Vlog";
// import Home from "./Home";
// import AllCategory from "../components/AllCategory";
// import PlantDetails from "../components/PlantDetails";
// import ErrorPage from "../components/ErrorPage";

// const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <Root></Root>,
//       errorElement: <ErrorPage></ErrorPage>,
//       children:[
//         {
//           path: '/',
//           element: <Home></Home>
//         },
//         {
//             path: '/vlog',
//             element: <Vlog></Vlog>
//         },
//         {
//             path: '/vlog',
//             element: <Vlog></Vlog>
//         },
//         {
//             path: "/plant/:id",
//             element: <PlantDetails></PlantDetails>
//         },

//       ]
//     }
// ])
// export default router




import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Vlog from "./Vlog";
import Home from "./Home";
import AllCategory from "../components/AllCategory";
import PlantDetails from "../components/PlantDetails";
import ErrorPage from "../components/ErrorPage";
import Login from "../components/Login";
import Root2 from "./Root2";
import { path } from "framer-motion/client";
import Faq from "../components/FAQ";
import FAQ from "../components/FAQ";

const router = createBrowserRouter(
  [
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/vlog',
        element: <Vlog></Vlog>
      },
      {
        path: '/all/:category?',
        element: <AllCategory />
      },

        {
        path: "/plant/:id",
        element: <PlantDetails></PlantDetails>
      },

      {
        path: '/Faq',
        element: <FAQ></FAQ>
      },

    ],
    
  },
   {
    path: '/login',       // Login route
    element: <Root2></Root2>, 
    children: [
      { path: '', element: <Login></Login> }
    ],
  }

],

   

)
export default router