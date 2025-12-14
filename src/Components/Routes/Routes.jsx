import { Root } from "postcss";
import { createBrowserRouter } from "react-router";
import Appoinment from "../Appoinment/Appoinment";
import Blogs from "../Blogs/Blogs";
import DoctorsDetails from "../DoctorsDetails/DoctorsDetails";
import ErrorPage from "../ErrorePage/ErrorPage";
import Home from "../Home/Home";
import Roots from "../Roots/Roots";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Roots,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: '/',
                Component: Home
            },
            {
                loader: () => fetch('../doctorsData.json'),
                path: '/doctorsDetails/:id',
                Component: DoctorsDetails,
            },
            {
                loader: () => fetch('../doctorsData.json'),
                path: '/booking',
                Component: Appoinment,
            },
            {
                path: '/blogs',
                Component: Blogs
            }
        ]
    },

]);
export default router