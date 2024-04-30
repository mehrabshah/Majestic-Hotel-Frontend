import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeContextProvider } from '../src/Admin/contexts/ThemeContext';
import AppRoutes from './Routes/Routes';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// import './App.css'
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHED_KEY);
function App() {
  return (
    <Elements stripe={stripePromise}>
    <ThemeContextProvider>
        <BrowserRouter>
          <AppRoutes/>
        </BrowserRouter>
        <Toaster
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              backgroundColor: 'rgb(var(--color-gray-0))',
              color: 'rgb(var(--color-gray-700))',
            },
          }}
        />
        </ThemeContextProvider>
    </Elements>
  );
}

export default App;
