import { Root } from "postcss";
import { createBrowserRouter } from "react-router";
import Roots from "../Roots/Roots";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Roots,
    },
]);
export default router