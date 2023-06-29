import React from 'react';
import {createBrowserRouter, Navigate, Outlet, RouteObject, useRoutes} from "react-router-dom";
import {ErrorBoundary} from "react-error-boundary";
import {Toaster} from "react-hot-toast";
import Authenticator from "./component/Authenticator";
import LeftNavigatorProvider from "./component/LeftNavigatorProvider";
import ErrorFallback from "./view/ErrorFallbackView";


const Dashboard = () => {
  return (
      <div>
        Dashbaord
      </div>
  )
}

const AuthRequiredRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Authenticator/>,
      children: [
        { path: 'dashboard', element: <LeftNavigatorProvider element={<Dashboard />}/> },
        // {
        //   path: "channels",
        //   element: <LeftNavigatorProvider element={<ChannelMain/>}/>,
        // },
        // {
        //   path: "llms",
        //   element: <LeftNavigatorProvider element={<LLMMain/>}/>,
        // },
        // {
        //   path: "prompts",
        //   element: <LeftNavigatorProvider element={<PromptMain/>}/>,
        // },
        // {
        //     path: "DocSearching",
        //     element: <DashboardMain/>,
        // },
        // {
        //     path: "DocIndexing",
        //     element: <DashboardMain/>,
        // },
      ],
      // errorElement: <AuthRequiredErrorBoundary/>
    },

  ])
}

export const App = () => {

  return (
      <div className='w-full h-full'>
        <Toaster position="top-center"
                 containerStyle={{top: "15px"}}
                 toastOptions={{
                   style: {
                     maxWidth: "400px"
                   }
                 }}
        />
        {/*<BaseDialog />*/}
        <Outlet/>
      </div>
  );
}

const AppRouterInfo: RouteObject[] = [
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element: <Navigate replace to="dashboard" />
      },
      // {
      //   path: "/login",
      //   element: <LoginView/>,
      // },
      {
        path: "/*",
        element: <AuthRequiredRoutes/>
      }
    ],
    errorElement: <ErrorBoundary FallbackComponent={ErrorFallback}/>
  },
];

export const appRouterObject = createBrowserRouter(AppRouterInfo);
