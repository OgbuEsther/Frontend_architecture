import React from 'react'
import {createBrowserRouter} from "react-router-dom"
import { HomeLayout } from '../components'
import { Home } from '../pages'
import { ErrorBoundary } from '../utils'



  export  const elememts = createBrowserRouter([
        {
            path : "/",
            element : <HomeLayout />,
            children : [
                {
                    index : true,
                    element : <Home />,
                    errorElement : <ErrorBoundary />,
                    hasErrorBoundary : true
                }
            ]
        }
    ])


