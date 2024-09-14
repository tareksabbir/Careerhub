import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./Components/Home/Home";
import Statistics from "./Components/Statistics/Statistics";
import AppliedJob from "./Components/AppliedJob/AppliedJob";
import Blogs from "./Components/Blogs/Blogs";
import Error from "./Components/Error/Error";
import JobDetails from "./Components/Home/Featured Job/JobDetails";
import JobPage from "./Components/Home/Jobs/JobPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
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
        path: "/jobs",
        element: <JobPage></JobPage>,
      },
      
      {
        path: "/applied",
        element: <AppliedJob></AppliedJob>,
      },
      {
        path: "/job/:id",
        loader: ()=> fetch('../jobs.json'),
        element: <JobDetails></JobDetails>,
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
