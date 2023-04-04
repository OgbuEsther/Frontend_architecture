import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../components";
import { About, Home } from "../pages";
import { ErrorBoundary, NotFound } from "../utils";



export const Elements = createBrowserRouter([
    {
        path : "/",
        element : <HomeLayout />,
        children : [
            {
                index : true,
                element : <Home />,
                errorElement : <ErrorBoundary />,
                hasErrorBoundary : true

            },
            {
                path : "/about",
                element : <About />,
                errorElement: <ErrorBoundary />,
                hasErrorBoundary : true

            }
        ]

    },
    {
        path : "*",
        element : <NotFound />
    }
])