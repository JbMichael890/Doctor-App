import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home";


export  const mainRoute = createBrowserRouter ([
    {
        element: <MainLayout/>,
        children:[

{
    element:<Home/>,
    path:"/"
}









        ]
    }
])