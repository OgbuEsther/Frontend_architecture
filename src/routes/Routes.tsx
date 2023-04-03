import React from 'react'
import {createBrowserRouter} from "react-router-dom"
import { HomeLayout } from '../components'
import { Home } from '../pages'
import { ErrorBoundary } from '../utils'

const Routes = () => {

    const elememts = createBrowserRouter([
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

  return elememts
}

export default Routes