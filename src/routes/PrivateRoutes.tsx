import AuthGuard from "./AuthGuard";
import MainLayout from "./MainLayout";

const PrivateRoutes = {
    path: "/",
    element: (<AuthGuard><MainLayout /></AuthGuard>),
    children: [
        {
            path: "/*",
            element: <></>
        }
    ]
}

export default PrivateRoutes