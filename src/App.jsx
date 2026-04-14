// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";
import DashboardLayout from "./layouts/DashboardLayout";

// Public pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Listings from "./pages/Listings";
import Services from "./pages/Services";
import GetStarted from "./components/GetStarted";
import Login from "./forms/Login";
import Dashboard from './components/Dashboard'
import LeaseDocs from './components/LeaseDocs'
import LeaseInfo from './components/LeaseInfo'
import Mentenance from './components/Mentenance'
import PaymentAccount from './components/PaymentAccount'
import PaymentHistory from './components/PaymentHistory'
import ProfileSettings from './components/ProfileSettings'
import SetAutoplay from './components/SetAutoplay'

// Dashboard pages
// import DashboardHome from "./pages/dashboard/Home";
// import Users from "./pages/dashboard/Users";
// import Settings from "./pages/dashboard/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/*  Public Website */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="listings" element={<Listings /> } />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="get-started" element={<GetStarted />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/*  Dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="lease-docs" element={<LeaseDocs />} />
        <Route path="lease-info" element={<LeaseInfo />} />
        <Route path="mentenance" element={<Mentenance />} />
        <Route path="payment-account" element={<PaymentAccount />} />
        <Route path="payment-history" element={<PaymentHistory />} />
        <Route path="profile-settings" element={<ProfileSettings />} />
        <Route path="set-autoplay" element={<SetAutoplay />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}