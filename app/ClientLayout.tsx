'use client'
import React, { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchOnWindowFocus: false,
      retry: false,
      retryDelay: 1000 * 1 * 60
    }
  }
});

export const ClientLayout = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer theme='colored' />
      {children}</QueryClientProvider>
  )
}
