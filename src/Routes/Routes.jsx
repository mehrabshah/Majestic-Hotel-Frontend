import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from '../Admin/pages/Dashboard';
import Bookings from '../Admin/pages/Bookings';
import Cabins from '../Admin/pages/Cabins';
import Users from '../Admin/pages/Users';
import Settings from '../Admin/pages/Settings';
import Account from '../Admin/pages/Account';
import Login from '../Admin/pages/Login';
import PageNotFound from '../Admin/pages/PageNotFound';
import AppLayout from '../Admin/components/AppLayout';
import ProtectedRoute from '../Admin/components/ProtectedRoute';
import BookingDetails from '../Admin/pages/BookingDetails';
import BookingCheckin from '../Admin/pages/BookingCheckin';
import Home from '../User/pages/Home';

function AppRoutes() {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate replace to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/bookings/:bookingId" element={<BookingDetails />} />
        <Route path="/checkin/:bookingId" element={<BookingCheckin />} />
        <Route path="/cabins" element={<Cabins />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/account" element={<Account />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/home" element={<Home/>} />
    </Routes>
  );
}

export default AppRoutes;
