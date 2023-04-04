import React, { lazy } from "react";

import { createBrowserRouter } from "react-router-dom";
import { Dashboard, HomeLayout, SideBar } from "../components";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Comp = lazy(() => import("../pages/Comp"));
const ParentComp = lazy(() => import("../pages/ParentComp"));
const ContactUs = lazy(() => import("../pages/ContactUs"));

export const Elements = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <ParentComp />,
      },
      {
        path: "/dashboard/comp",
        element: <Comp />,
      },
    ],
  },
]);
