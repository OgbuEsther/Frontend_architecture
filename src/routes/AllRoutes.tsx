import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../components";



export const Elements = createBrowserRouter([
    {
        path : "/",
        element : <HomeLayout />
    }
])