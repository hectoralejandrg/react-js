import type { RouteObject } from "react-router-dom";
import Home from "../modules/Home";

// const routes: RouteObject[] = [
//   {
//     path: "/",
//     element: <Home />,
//   },
// //   {
// //     path: "*",
// //     element: <div>404 - Not Found</div>, // Or a dedicated 404 component
// //   },
//   //   {
//   //     path: "*",
//   //     element: <PublicRoute />,
//   //     children: [
//   //       {
//   //         path: "",
//   //         element: <BaseLayout />,
//   //         children: [
//   //           {
//   //             path: "",
//   //             element: <Navigate to="/login" replace />,
//   //           },
//   //           {
//   //             path: "login",
//   //             element: <Authentication />,
//   //           },
//   //           {
//   //             path: "register-customer",
//   //             element: <RegisterCustomer />,
//   //           },
//   //           {
//   //             path: "register-seller",
//   //             element: <RegisterSeller />,
//   //           },
//   //           {
//   //             path: "register-serviceprovider",
//   //             element: <ServiceProvider />,
//   //           },
//   //           {
//   //             path: "forgot-password",
//   //             element: <ForgotPassword />,
//   //           },
//   //         ],
//   //       },
//   //       {
//   //         path: "*",
//   //         element: <Status404 />,
//   //       },
//   //     ],
//   //   },
//   //   {
//   //     path: "",
//   //     element: <ProtectedRoute />,
//   //     children: [
//   //       {
//   //         path: "",
//   //         element: <SidebarLayout />,
//   //         children: [
//   //           {
//   //             path: "",
//   //             element: <HasRole rol="admin" />,
//   //             children: [
//   //               {
//   //                 path: "admin",
//   //                 element: <Navigate to="/admin-dash" />,
//   //               },
//   //               {
//   //                 path: "admin-dash",
//   //                 element: <Navigate to="/contract-list" />,
//   //               },
//   //               {
//   //                 path: "contract-list",
//   //                 element: <ContractListScreen />,
//   //               },
//   //               {
//   //                 path: "contract/:uid",
//   //                 element: <ReviewContractScreen />,
//   //               },
//   //               {
//   //                 path: "customer-list",
//   //                 element: <CustomerListScreen />,
//   //               },
//   //               {
//   //                 path: "customer-points/:uid",
//   //                 element: <RewardPointsScreen />,
//   //               },
//   //               {
//   //                 path: "seller-list",
//   //                 element: <SellerListScreen />,
//   //               },
//   //               {
//   //                 path: "provider-list",
//   //                 element: <ProviderListScreen />,
//   //               },
//   //             ],
//   //           },
//   //           {
//   //             path: "",
//   //             element: <HasRole rol="customer" />,
//   //             children: [
//   //               {
//   //                 path: "customer",
//   //                 element: <Navigate to="/customer-dash" />,
//   //               },
//   //               {
//   //                 path: "customer-dash",
//   //                 element: <CustomerDashboard />,
//   //               },
//   //               {
//   //                 path: "customer-profile",
//   //                 element: <ProfileCustomer />,
//   //               },
//   //               {
//   //                 path: "customer-list-contract",
//   //                 element: <CustomerContractListScreen />,
//   //               },
//   //               {
//   //                 path: "customer-progress/:uid",
//   //                 element: <ReviewProgressCustomerScreen />,
//   //               },
//   //             ],
//   //           },
//   //           {
//   //             path: "",
//   //             element: <HasRole rol="seller" />,
//   //             children: [
//   //               {
//   //                 path: "seller",
//   //                 element: <Navigate to="/seller-dash" />,
//   //               },
//   //               {
//   //                 path: "seller-dash",
//   //                 element: <Navigate to="/seller-list-contract" />,
//   //               },
//   //               {
//   //                 path: "seller-profile",
//   //                 element: <ProfileSeller />,
//   //               },
//   //               {
//   //                 path: "contract",
//   //                 element: <ContractScreen />,
//   //               },
//   //               {
//   //                 path: "seller-list-contract",
//   //                 element: <SellerContractListScreen />,
//   //               },
//   //               {
//   //                 path: "seller-contract-update/:uid",
//   //                 element: <UpdateContractScreen />,
//   //               },
//   //             ],
//   //           },
//   //           {
//   //             path: "",
//   //             element: <HasRole rol="service_provider" />,
//   //             children: [
//   //               {
//   //                 path: "service_provider",
//   //                 element: <Navigate to="/provider-dash" />,
//   //               },
//   //               {
//   //                 path: "provider-dash",
//   //                 element: <Navigate to="/provider-contract-list" />,
//   //               },
//   //               {
//   //                 path: "service_provider-profile",
//   //                 element: <ProfileServerProvider />,
//   //               },
//   //               {
//   //                 path: "provider-contract-list",
//   //                 element: <ProviderContractScreen />,
//   //               },
//   //               {
//   //                 path: "provider-contract/:uid",
//   //                 element: <ReviewContractProviderScreen />,
//   //               },
//   //               {
//   //                 path: "provider-progress/:uid",
//   //                 element: <ProgressContractProviderScreen />,
//   //               },
//   //             ],
//   //           },
//   //         ],
//   //       },
//   //     ],
//   //   },
// ];

// export default routes;

const routes: RouteObject[] = [
  {
    path: "/",
    element: Home(),
  },
];

export default routes;