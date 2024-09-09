import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./Components/Home/Home";
import Statistics from "./Components/Statistics/Statistics";
import AppliedJob from "./Components/AppliedJob/AppliedJob";
import Blogs from "./Components/Blogs/Blogs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/applied",
        element: <AppliedJob></AppliedJob>,
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
