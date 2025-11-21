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
import FAQ from "../components/FAQ";
import CartPage from "../Pages/CartPage"; // <-- Cart page

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/vlog', element: <Vlog /> },
      { path: '/all/:category?', element: <AllCategory /> },
      { path: '/plant/:id', element: <PlantDetails /> },
      { path: '/faq', element: <FAQ /> },
      { path: '/cart', element: <CartPage /> }, // <-- Cart route
    ],
  },
  {
    path: '/login', // Login route
    element: <Root2 />,
    children: [
      { path: '', element: <Login /> },
    ],
  }
]);

export default router;
