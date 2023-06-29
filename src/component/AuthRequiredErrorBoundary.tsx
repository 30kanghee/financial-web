// import React, { Component, ErrorInfo, ReactNode } from "react";
// import {AxiosError} from "axios";
// import {SiteBunnyAdminError} from "../error";
// import {Navigate} from "react-router-dom";
//
// interface Props {
//     children?: ReactNode;
// }
//
// interface State {
//     unauthorized: boolean
//     error?: Error
// }
//
// class AuthRequiredErrorBoundary extends Component<Props, State> {
//     public state: State = {
//         unauthorized: false
//     };
//
//     public static getDerivedStateFromError(error: Error): State {
//         console.log(error)
//         if ('isAxiosError' in error) {
//             const axiosError = error as AxiosError
//             if (axiosError.isAxiosError && axiosError.response?.statusText === '401') {
//                 return { unauthorized: true };
//             }
//         }
//
//         if ('isSiteBunnyAdminError' in error) {
//             const _swingChatError = error as SiteBunnyAdminError
//             if (_swingChatError.isSiteBunnyAdminError && _swingChatError.code === '401') {
//                 return { unauthorized: true };
//             }
//         }
//
//         return { unauthorized: false };
//     }
//
//     public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
//         console.error("Uncaught error:", error, errorInfo);
//     }
//
//     public render() {
//         console.log(this.state)
//         if (this.state.unauthorized) {
//             return <Navigate to="/login" replace />
//         } else if (this.state.error) {
//             throw this.state.error
//         } else {
//             return this.props.children;
//         }
//     }
// }
//
// export default AuthRequiredErrorBoundary;

export default <div></div>