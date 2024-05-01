import React from "react";
import {  Route, Routes } from "react-router-dom";
import Dashboard from "../Admin/pages/Dashboard";
import Bookings from "../Admin/pages/Bookings";
import Cabins from "../Admin/pages/Cabins";
import Users from "../Admin/pages/Users";
import Settings from "../Admin/pages/Settings";
import Account from "../Admin/pages/Account";
import Login from "../Admin/pages/Login";
import PageNotFound from "../Admin/pages/PageNotFound";
import AppLayout from "../Admin/components/AppLayout";
import ProtectedRoute from "../Admin/components/ProtectedRoute";
import BookingDetails from "../Admin/pages/BookingDetails";
import BookingCheckin from "../Admin/pages/BookingCheckin";
import Home from "../User/pages/Home";
import Contact from "../User/pages/Contact";
import About from "../User/pages/AboutUs";
import ContactUsAdmin from "../Admin/pages/ContactUs";
import ContactUsDetail from "../Admin/features/contactUs/contactUsDetails/ContactUsDetail";
import Rooms from "../User/pages/Rooms";
import SingleRoom from "../User/pages/SingleRoom";
import Dinning from "../User/pages/Dinning";
import Payment from "../User/pages/Payment";
import Events from "../User/pages/events";
import Return from "../Admin/features/payment/Return";
import Checkout from "../Admin/features/payment/Checkout";
import Accessibility from "../User/pages/Accessibility";
import JoinTeam from "../User/pages/JoinTeam";
import PrivacyPolicy from "../User/pages/PrivacyPolicy";
import TermsCondition from "../User/pages/TermsCondition";
import ConfirmDelete from "../Admin/components/ui/ConfirmDelete";
import Confirmation from "../User/pages/Confirmation";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        {/* <Route index element={<Navigate replace to="/dashboard" />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/bookings/:bookingId" element={<BookingDetails />} />
        <Route path="/checkin/:bookingId" element={<BookingCheckin />} />
        <Route path="/contactUs" element={<ContactUsAdmin />} />
        <Route path="/contactUs/:contactUsId" element={<ContactUsDetail />} />
        <Route path="/cabins" element={<Cabins />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/account" element={<Account />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
      {/* <Route path="/checkout" element={<Checkout amount={100} currency={"USD"}/>} /> */}
      <Route path="/return" element={<Return />} />
      <Route path="/home" element={<Home />} />      
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/events-celebrations" element={<Events />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/dining" element={<Dinning />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/single-room" element={<SingleRoom />} />
      <Route path="/accessibility"  element={<Accessibility/>}/>
      <Route path="/joinTeam"  element={<JoinTeam/>} />
      <Route path="/privacypolicy"  element={<PrivacyPolicy/>} />
      <Route path="/termsCondition"  element={<TermsCondition/>} />    
      <Route path="/confirmation"  element={<Confirmation/>} />    

    </Routes>
  );
}

export default AppRoutes;
