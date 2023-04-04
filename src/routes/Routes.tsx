import React, { lazy } from "react";

import { createBrowserRouter } from "react-router-dom";
import { Dashboard, HomeLayout } from "../components";
import  ErrorBoundary  from "../utils/hoc/ErrorBoundary";
import NotFound from "../utils/hoc/NotFound";

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
        hasErrorBoundary: true,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
        hasErrorBoundary: true,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/about",
        element: <About />,
        hasErrorBoundary: true,
        errorElement: <ErrorBoundary />,
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
        hasErrorBoundary: true,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/dashboard/comp",
        element: <Comp />,
        hasErrorBoundary: true,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
  {
    path : "*",
    element : <NotFound />
  }
]);
