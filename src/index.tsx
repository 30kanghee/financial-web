import React from 'react';
import ReactDOM from 'react-dom/client';
import "tailwindcss/tailwind.css";
import './index.scss';
import {appRouterObject} from './App';
import reportWebVitals from './reportWebVitals';
import axios from "axios";
import {RouterProvider} from "react-router-dom";
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import {API_HOST} from "./core/variables";

axios.defaults.withCredentials = true;
axios.defaults.timeout = 25000;

// import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
// const queryClient = new QueryClient({
//     defaultOptions: {
//         queries: {
//             refetchOnWindowFocus: false,
//             refetchOnMount: false,
//             useErrorBoundary: true,
//         }
//     }
// })

const client = new ApolloClient({
    uri: `${API_HOST}/graphql`,
    cache: new InMemoryCache(),
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      {/*<QueryClientProvider client={queryClient}>*/}
      <ApolloProvider client={client}>
          <RouterProvider router={appRouterObject} />
      </ApolloProvider>
      {/*</QueryClientProvider>*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
