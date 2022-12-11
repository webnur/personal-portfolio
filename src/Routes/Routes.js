import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/details/:id',
                element: <ProjectDetails></ProjectDetails>,
                loader: ({params}) => fetch(`https://portfolio-server-delta.vercel.app/details/${params.id}`)
            }
        ]
    }
]);

export default router;