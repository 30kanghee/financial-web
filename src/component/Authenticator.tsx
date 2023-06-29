import React from "react";
import {Navigate, Outlet} from "react-router-dom";
// import useProfile from "../query/auth/useProfile";
//
// type AuthProviderProps = {
//     children?: React.ReactNode;
// }
//
// const Authenticator: React.FC<AuthProviderProps> = () => {
//     const {isLoading, isSuccess, error } = useProfile({useErrorBoundary: false});
//
//     if (isLoading) return <></>;
//
//     if (isSuccess) {
//         return (
//             <Outlet/>
//         )
//     } else {
//         if (error?.code === "401") {
//             return <Navigate to={'/login'}/>;
//         } else {
//             throw new SiteBunnyAdminError(error?.code, "An error occurred during auth.")
//         }
//     }
// };

type AuthProviderProps = {
    children?: React.ReactNode;
}

const Authenticator: React.FC<AuthProviderProps> = () => {
    return (
        <Outlet/>
    )
};

export default Authenticator;
