import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from './App';
import './index.css';

// new instance of QueryClient, a core object that manages and caches remote data
const queryClient = new QueryClient({
  defaultOptions: { // for customising query's behaviour
    queries: {
      retry: 3,  //default -> try to refetch data from server 3 time if the first fetch fails
      cacheTime: 300_000,  // determines how long the data should be cached before it's considered expired and needs to be refetched (300_000 -> 5mins)
      staleTime: 10 * 1000, //how long the data is considered fresh and will not trigger a refresh
      refetchOnWindowFocus: false, //controls whether the query should automatically refetch when the application window gains focus, false means it will not
      refetchOnReconnect: false,  //specifies whether the query should trigger a refetch when the app reconnects to the network
      refetchOnMount: false //option determines whether the query should be refetched automatically when component is initially mounted.
    }
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} >
      <App />
      {/* only included in development build */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
