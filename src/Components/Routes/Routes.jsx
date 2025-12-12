import { Root } from "postcss";
import { createBrowserRouter } from "react-router";
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
            }
        ]
    },
]);
export default router