import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeContextProvider } from './contexts/ThemeContext';
import AppRoutes from './Routes/Routes';

function App() {
  return (
    <ThemeContextProvider>
        <BrowserRouter>
          <AppRoutes />
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
  );
}

export default App;
