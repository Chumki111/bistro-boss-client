import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import "./index.css";
import router from './Router/Router';
import AuthProvider from './Context/AuthProvider';
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
  <QueryClientProvider client={queryClient}>
  <HelmetProvider>
   <Toaster />
    <RouterProvider router={router} />
    </HelmetProvider>
  </QueryClientProvider>
   </AuthProvider>
  </React.StrictMode>,
)
