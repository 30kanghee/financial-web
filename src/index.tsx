import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {appRouterObject} from './App';
import reportWebVitals from './reportWebVitals';
import axios from "axios";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {RouterProvider} from "react-router-dom";

axios.defaults.withCredentials = true;
axios.defaults.timeout = 25000;

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            useErrorBoundary: true,
        }
    }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <RouterProvider router={appRouterObject} />
      </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
