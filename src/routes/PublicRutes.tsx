import { lazy } from "react";
import Loadable from "./Loadable";
import GuestGuard from "./public/GuestGuard";
import MinimalLayout from "./public/MinimalLayout";

const LoginScreen = Loadable(
    lazy(() => import("../modules/Home"))
);

const PublicRoutes = {
    path: "/",
    element: (
        <GuestGuard>
            <MinimalLayout />
        </GuestGuard>
    ),
    children: [
        {
            path: "/login",
            element: <LoginScreen />,
        },
        {
            path: "/*",
            element: <LoginScreen />,
        },
    ],
};

export default PublicRoutes;