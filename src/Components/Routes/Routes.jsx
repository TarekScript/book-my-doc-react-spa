import { Root } from "postcss";
import { createBrowserRouter } from "react-router";
import Appoinment from "../Appoinment/Appoinment";
import DoctorsDetails from "../DoctorsDetails/DoctorsDetails";
import Home from "../Home/Home";
import Roots from "../Roots/Roots";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Roots,
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
            }
        ]
    },
]);
export default router